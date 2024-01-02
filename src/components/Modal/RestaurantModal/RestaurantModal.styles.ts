import styled from "styled-components";

export const Box = styled.div`
  // width: clamp(250px, 90%, 350px);
  // max-height: 90vh;
  width: clamp(350px, 90%, 650px);
  min-height: 370px;
  background-color: white;
  color: black;
  border-radius: 10px;
  padding: 20px 20px 25px;
  overflow-y: auto;
  margin-left:240px;

  .recommand{
    font-size:17px;
    float: right;
    margin-right:20px;
    margin-top : -20px;
    color:red;
    font-weight:bold;
  }

  .address{
    padding-bottom: 17px;
  }

  .title{
    font-size: 15px;
    padding-bottom: 5px;
    font-weight: bold;
  }

  .content{
    font-size: 20px;
    padding-bottom: 15px;
    white-space:pre-line;
    width:600px;

  }

  

  .close-btn {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .modalTitle {
    height: 50px;
    margin-top:20px;
    font-size: clamp(1.3rem, 3vw, 1.4rem);
    font-weight: 600;
    margin-bottom: 12px;
    
    button {
      width:45px;
      height:45px;
      margin-top : 0px;
      float: right;
      font-size: 43px;
      margin-right:7px;
      border:none;
      background-color:transparent;
      cursor:pointer;
      }
  }

  .modalContent {
    font-size: clamp(15px, 1.3vw, 1rem);
    img {
      width: 100%;
      border-radius: 10px;
    }

  }

  .edit{
    button{
      padding:7px;
      background-color:#0F3758;
      float:right;
      border-radius: 5px;
      color:#fff;
      cursor:pointer;
    }
  }

`;
