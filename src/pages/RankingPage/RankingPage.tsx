import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { ButtonOutline, Container, EmptyMsgBox, RankingContainer } from '../../styles/styles';
import { Box, InputBox, TopBox } from './RankingPage.styles';
import {  RankingCard } from '../../components';
import { fetchKakao } from '../../store/kakao/kakaoSlice';
import { IoIosRefreshCircle } from "react-icons/io";
import { RestaurantModal } from '../../components';
import { modalState } from '../../store/modal/restaurantModalSlice';

const RankingPage = () => {
  const {restaurant} = useAppSelector(state => state.kakao)

  const dispatch = useAppDispatch()

	useEffect(() => {
	  dispatch(fetchKakao());  
  }, [])


  //console.log("restaurant>>",restaurant)

  let today = new Date();   

  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1;  // 월
  let date = today.getDate();  // 날짜
  let hours = today.getHours(); // 시
  let minutes = today.getMinutes();  // 분

  const todayData = year + '/' + month + '/' + date + "  " + hours + ':' + minutes 

	const [modalOpen, setModalOpen] = useState(0);
  const {restaurantModal} = useAppSelector(state=>state.restaurantModal)
  const modalId= (id:number) =>{
    setModalOpen(id)
    console.log("id>>>>",id)
  }

  return (
    <Container>
       {restaurantModal && <RestaurantModal item={restaurant.filter(data => data.id==modalOpen)}/>}	
          <Box>
              <div className="allNotes__notes-type">
                {todayData} 기준 
                <button onClick={()=>{location.reload()}}>
                  <IoIosRefreshCircle color="gray" size="30px"/>
                </button>
              </div>
              <RankingContainer>
                {restaurant.map((list) => (
                  <RankingCard key={list.id} list={list} data={modalId}/>
                ))}
              </RankingContainer>
          </Box>
    </Container>
  )
}

export default RankingPage