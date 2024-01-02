import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import {  AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { DeleteBox, FixedContainer } from '../Modal.styles';
import { Box } from './RestaurantModal.styles';
import { modalState } from '../../../store/modal/restaurantModalSlice';
import { Restaurant } from '../../../types/restaurant';
import { fetchIncrease } from '../../../store/kakao/increaseRcSlice';

interface RestaurantProps {
  item: Restaurant[]
}

const RestaurantModal = ({item}:RestaurantProps) => {

  const dispatch = useAppDispatch();
  console.log("item",item[0])
  const data = item[0];
  const [recommend, setRecommend] = useState<number>(data.recommend);

  const { success  } = useAppSelector(state => state.increaseRc);

  const increaseRc = () => {
    const rData = {"id" : data.id, "recommend":recommend+1}
    console.log(rData,"rData")
    dispatch(fetchIncrease(rData))
    success ? setRecommend(recommend+1) : ""  //axios 로 제대로 데이터가 들어갔다면 success state가 true값으로 바뀜. 
  }


  const address3 = data.address2 ?  data.address2 : ""

  return (
    <FixedContainer>
      <Box>
        <DeleteBox
          onClick={() => dispatch(modalState(false))}
          className="close-btn"
        >
          <FaTimes />
        </DeleteBox>
        <div className='modalTitle'>
          {data.storeName} 
          <button onClick={()=>{increaseRc()}}>
            <AiFillStar color="#ffa704" width="30px"  />  
          </button>
        </div>
        <label className='recommand'>{recommend}</label> 
        <div className='modalContent'>
          <p className='address'>{`${data.address} ${address3}`}</p> 
          <p className='title'>대표 메뉴</p> 
          <p className='content'>{data.menu}</p>
          <p className='title'>가게 설명 </p>
          <div className='content'>{data.introduction}</div> 
        </div>
        <div className='edit'><button>수정하기</button></div>
      </Box>
    </FixedContainer>
  )
}

export default RestaurantModal