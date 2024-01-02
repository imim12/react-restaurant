import React from 'react'
import styles from '../../pages/Register/Register.module.scss';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { postcodeScriptUrl } from 'react-daum-postcode/lib/loadPostcode';
import { useAppDispatch } from '../../hooks/redux';
import { setPostData } from '../../store/register/postSlice';
import { PostData } from '../../types/post';

function DaumPost(){
  //클릭 시 수행될 팝업 생성 함수
  const open = useDaumPostcodePopup(postcodeScriptUrl);

  //주소찾기로는 위도,경도값을 못 받아오기에 카카오맵 연동해서 주소값에 대한 위도,경도값 가져와야함
  const geoCoder = new kakao.maps.services.Geocoder();  //오류 날때는 index.html에 카카오맵 <script> 태그의 키값뒤에 &libraries=services를 추가

  const getAddressCoords = (address: string) => {
    return new Promise((resolve, reject) => {
      geoCoder.addressSearch(address, (result: any, status: any) => {
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(result[0].x, result[0].y);
          resolve(coords);
        } else {
          reject(status);
        }
      });
    });
  };

  const handleComplete = async (data:any) => {
    console.log("Postdata>>",data)
    let mainAddress = '';
    let x = 0;
    let y = 0;

    mainAddress = data.roadAddress || data.jibunAddress;

    const coords:any = await getAddressCoords(mainAddress);
        x = coords.getLng();
        y = coords.getLat();

    console.log("x",x, ">>>y>>>", y);

    const result ={"lar": x, "lng": y, "address":data.address, "sido": data.sido, "sigungu": data.sigungu}

    setPost(result);

  }
  const dispatch =  useAppDispatch();

  const setPost = (result:PostData) => {
    dispatch(setPostData(result))
}
  const handleClick = () => {
    //주소검색이 완료되고, 결과 주소를 클릭 시 해당 함수 수행
  	open({onComplete: handleComplete});
  }


  return <button type="button" className="post" onClick={handleClick}>주소찾기</button>
  
 }

export default DaumPost;