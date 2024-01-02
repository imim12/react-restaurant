import styled from "styled-components";
export const Registerform = styled.div`

    position: relative;
    margin: 70px auto;
    // width: 900px;
    // height: 950px;
    width: 700px;
    height: 850px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: var(--padding);
    //background-color: #c4dfff;
    border-radius: 12px;
    position: relative;
    border : 3px solid #474747;
    text-align:center;
    padding-top: 30px;
    
    p{

        //margin-left:123px;
        margin-left:70px;
        color: #212121;
        font-size: 20px;
        text-align: left;
   }

   .post{
    position: absolute;
    color: #fff;
    //right:  120px;
    right:  72px;
    width: 95px;
    height: 52px;
    font-weight: bold;
    background-color: #0F3758;
    border-radius: 5px;
    font-size: 17px;
   }

    input{

        padding: 15px;
        font-size: 1.2em;
        border: none;
        margin-bottom: 25px;
        background-color: #ebebeb;
        border-radius: 4px;
        width : 650px;
        width : 550px;
        
    }

    .submit {
        // padding: 15px;
        // font-size: 1.2em;
        // border: none;
        // background-color: #ffe4c4;
        // color: #547fb2;
        // border-radius: 4px;
        cursor: pointer;
    font-weight: bold;
    width: 230px;
    margin: 0 35px 20px;
    height: 55px;
    padding: 6px 15px;
    border-radius: 5px;
    outline: none;
    border: none;
    background-color:  #0F3758;
    color:#fff;
    font-size : 20px;
    margin-top: 10px;
    }

    textarea{
         height: 100px;   
         width: 550px;
         border: none;
         background-color: #ebebeb;
         border-radius: 4px;
         resize: none;
         font-size: 1.7 em;
         font-size: 20px;
         font-family: 'NanumBarunGothic';
        }


    .divImg{
        justify-content: space-between;
        display: flex;
        border-radius: 0.3em;
        border: 0.01em solid #efeff1;
        display: flex;
        padding: 0.1rem;
        background-color:red;// #efeff1;
        align-items: center;
        font-weight: 400;
        display: flex;
        button {
          margin-left: 10px;
          color: gray;
          background-color: white;
          border-radius: 0.5rem;
          height: 30px;
          display: flex;
          
        }
    }
    .notDowload{
        color: red;
        font-size: 0.24rem;
    }
    .tableDiv{
        width: 450px;
        //height:52px;
        font-size: 15px;
        //margin-left: 0.12rem;
        border: 0.01rem solid none;
        //padding: 7px;
        display: flex;
        align-items: center;
        background-color: #ebebeb;
        margin-left: 124px;
        border-radius: 4px;
        input {
          position: relative;
          text-align: right;
          opacity: 0;
          z-index: 2;
          cursor: pointer;
          height: 20px;
          max-width: 1.28rem;
          background-color: red;
        }
    }
    .changeButton{
        background-color:#0F3758;
        color: white;
        font-size: 1.5em;
        width: 130px;
        height: 52px;
        border-radius: 5px;
        cursor: pointer;
        right: 122px;
        /* margin-bottom: -0.1rem; */
        //bottom: 24%;
        position: absolute;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
    }
`;
