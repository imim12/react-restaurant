import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import axios from 'axios';
import { fetchRegister } from '../../store/register/registerSlice';
import { Restaurant } from '../../types/restaurant';
import { DaumPost } from '../../components';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { VscClose } from 'react-icons/vsc';
import { Registerform } from './Register.styles';


const RegisterPage = () => {
  const [storeName, setStoreName] = useState<string>("");
  const [addres, setAddress] = useState<string>("");
  const [addres2, setAddress2] = useState<string>("");
  const [menu, setMenu] = useState<string>("");
  const [introduction, setIntroduction] = useState<string>("");
  const [lar, setLar] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);
  const [sido, setSido] = useState<string>("");
  const [sigungu, setSigungu] = useState<string>("");

  const [errors, setErrors] = useState<string>("")

  const { postData  } = useAppSelector(state => state.post);  //주소찾기로 선택한 주소, 위도, 경도 데이터 가져옴.

  useEffect(() => {
    setAddress(postData.address);  //주소찾기로 주소 선택했을때 주소 인풋창에 결과값 넣어주기 위해서.
    setLar(postData.lar);
    setLng(postData.lng);
    setSido(postData.sido);
    setSigungu(postData.sigungu);
    console.log("postData.sigungu",postData.sigungu)
  }, [postData])
  
  let data:Restaurant = {} as Restaurant

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();  

    if(!storeName || !addres || !menu || !introduction)
    { toast.error('모든 항목을 다 입력해주세요.'); return;} 
    //setErrors("모든 항목을 다 입력해주세요."); 토스트메시지 안 쓰고 그냥 state에 넣어서 보여주고 싶을때/}

    data={"storeName" : storeName, 
          "address" : addres,
          "address2" : addres2,
          "menu" : menu,
          "introduction" : introduction,
          "lar" : lar,
          "lng" : lng,
          "id" : null,
          "recommend" : 0,
          "userId" : null,
          "sido" : sido,
          "sigungu" : sigungu,
          "ranking" : null
        }

    console.log("data", data);
    
    setStoreName("");
    setAddress("");
    setAddress2("");
    setMenu("");
    setIntroduction("");
    setLar(0);
    setLng(0);
    setErrors("");
    setSigungu("");
    setSido("");

    register(data);
  }

  const dispatch =  useAppDispatch();
  const navigate = useNavigate();
  //axios
  const register = (data:Restaurant) => {
    dispatch(fetchRegister(data))
    .then((data)=>{console.log("등록됨", data.payload.id)})
    //.then(()=>navigate('/'));  //메인 화면 가고싶을때.
  }

  //* 화면에 출력될 파일과 서버에 보내질 파일을 구분할 필요없다. 
  //화면에 출력되는 파일
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState(null as any);

  console.log("selectedFiles",selectedFiles);

  const onSelectFile = (e: any) => {
    e.preventDefault();
    e.persist();
    //선택한 파일 
    const selectedFiles = e.target.files;
    //선택한 파일들을 fileUrlList에 넣어준다. 
    const fileUrlList = [...selectedFiles];

    // 업로드되는 파일에는 url이 있어야 한다. filePath로 보내줄 url이다.
    //획득한 Blob URL Address를 브라우져에서 그대로 호출 시에 이미지는 표시가 되고 ,
    //일반 파일의 경우 다운로드를 할 수 있다.
    for (let i = 0; i < selectedFiles.length; i++) {
      const nowUrl = URL.createObjectURL(selectedFiles[i]);
      fileUrlList.push(nowUrl[i]);
    }

    setSelectedFiles(fileUrlList);

    //Array.from() 은 문자열 등 유사 배열(Array-like) 객체나 이터러블한 객체를 배열로 만들어주는 메서드
    const selectedFileArray: any = Array.from(selectedFiles);

    //브라우저 상에 보여질 파일 이름
    const imageArray = selectedFileArray.map((file: any) => {
      return file.name;
    });

    // 첨부파일 삭제시
    setSelectedImages((previousImages: any) => previousImages.concat(imageArray));
    e.target.value = '';
  };

  //브라우저상에 보여질 첨부파일
  const attachFile =
    selectedImages &&
    selectedImages.map((image: any) => {
      return (
        <div className="divImg" key={image}>
          <div>{image}</div>
          <button onClick={() => setSelectedImages(selectedImages.filter((e) => e !== image))}>
          <VscClose size='30' />  
          </button>
        </div>
      );
    });




  return (
    <div className='page'>
        <Registerform>
          <form
            className=''
            onSubmit={handleSubmit}
            action='/'
          >
            <h2></h2>
            <label>
              <p>가게 이름</p>
              <br/>
              <input 
                type="text" 
                value={storeName || ''}
                onChange={(e)=>setStoreName(e.target.value)}
                //placeholder='가게 이름을 입력하세요'
                className=''/>
            </label>
            <br/>
            <label>
              <p>주소</p>
              <br/>
              <input 
                type="text" 
                value={addres}
                onChange={(e)=>setAddress(e.target.value)}
                //placeholder='주소 검색'
                className=''/>
                <DaumPost/>
            </label>
            <br/>
            <label>
              <p>상세주소</p>
              <br/>
              <input 
                type="text" 
                value={addres2}
                onChange={(e)=>setAddress2(e.target.value)}
                //placeholder='상세 주소를 입력하세요'
                className=''/>
            </label>
            <br/>
            <label>
              <p>메뉴</p>
              <br/>
              <input 
                type="text" 
                value={menu}
                onChange={(e)=>setMenu(e.target.value)}
                //placeholder='메뉴를 입력하세요'
                className=''/>
            </label>
            <br/>
            <label>
              <p>가게 설명</p><br/>
              <textarea
              value={introduction}
              onChange={(e)=>setIntroduction(e.target.value)}
              //placeholder='가게 설명을 입력하세요'
              />
            </label>
            <br/>
            <br/>
            {/* <label>
              <p>이미지 첨부</p>
              <br/>
              <input 
                type="file" 
                multiple
                value={selectedFiles}
                onChange={(e)=>setSelectedFiles(e.target.value)
                }
                accept='image/*'
                className=''/>
            </label> */}
            {/* <label>
              <p>이미지 첨부</p><br/>
              <div className={styles.tableDiv}>
                  {selectedImages.length !== 0 ? (
                    <div>{attachFile}</div>
                  ) : (
                    <div className={styles.notDownload}>최대 세 개까지 첨부할 수 있습니다</div>
                  )}
                  <div className={styles.changeButton} >업로드</div>
                  {selectedImages.length !== 0 ? (
                    ''
                  ) : (
                    <input
                      type='file'
                      multiple
                      name='images'
                      onChange={onSelectFile}
                      accept='.png, .jpg,image/*'
                    />
                  )}
                </div>
            </label> */}
            {/* {errors && <p>{errors}</p>} */}
            <br/>
            <button className="submit" type='submit'>   
              등록하기
            </button>
          </form>
        </Registerform>
    </div>
  )
}

export default RegisterPage