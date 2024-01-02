import React from 'react'
import { Card, MenuBox, TopBox } from './RankingCard.styles';
import { Restaurant } from '../../types/restaurant';
import {  AiOutlineStar, AiFillStar } from 'react-icons/ai'
import {PiNumberOneFill ,PiNumberTwoFill ,PiNumberThreeFill, PiNumberFourFill,PiNumberFiveFill, PiNumberSixFill , PiNumberSevenFill ,  PiNumberEightFill   } from "react-icons/pi";

interface RestaurantProps {
  list: Restaurant,
  type: string
}

const NoteCard = ({ list, type }: RestaurantProps) => {
  const { storeName, menu, recommend, ranking, sido, sigungu} = list;

  // const func:any = () => {  //내용 줄임표용
  //     if(introduction){
  //       return introduction.length > 90 ? introduction.slice(0, 90) + "..." : introduction;
  //     }
  // }

  return (
    <>
      <Card>
        <TopBox>
          <div className='title'>
            <div className='icon'>
              {/* 랭킹 1,2,3위 아이콘 주기 위해 */}
              {ranking == 1 ? <PiNumberOneFill color="red" size="22px"/> : 
              ranking == 2 ? <PiNumberTwoFill color="green" size="22px"/> :  
              ranking == 3 ? <PiNumberThreeFill color="#c7058a" size="22px"/> : 
              ranking == 4 ? <PiNumberFourFill  size="22px"/> : 
              ranking == 5 ? <PiNumberFiveFill  size="22px"/> : 
              ranking == 6 ? <PiNumberSixFill  size="22px"/> : 
              ranking == 7 ? <PiNumberSevenFill  size="22px"/> : 
              ""}  
             </div>
            {" "}
            {storeName.length > 20 ? storeName.slice(0, 20) + '...' : storeName}  
          </div>
          <div className='top-options'>
            <div className='sido'>
              {`${sido} ${sigungu}`}
            </div> 
            <button>
              <AiFillStar color="#ffa704" size="25px"  /> 
            </button> {" "}
            <label className='recommand'>{recommend}</label> 
          </div>
        </TopBox>
        {/* <ContentBox>
          {parse(func())}
        </ContentBox> */}
        <br/>
        <h5>대표 메뉴</h5>
        <MenuBox>
          {menu}
        </MenuBox>
      </Card>
    </>
  )
}

export default NoteCard