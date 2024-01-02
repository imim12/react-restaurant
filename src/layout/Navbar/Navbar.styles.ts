import styled from "styled-components";

export const StyledNav = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.12);
  padding: 0 30px;
 // background-color:#212121;  

  .nav__menu {
    display: none;

  }

  @media screen and (max-width: 950px) {
    padding: 0 15px;
    .nav__menu {
      display: block;
      flex-basis: 5%;
      margin: 8px 10px 0px 0px;
      svg {
        font-size: 1.65rem;
        cursor: pointer;
      }
    }
  }
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  // justify-content: space-between;
  justify-content: center;

  .nav__page-title {
    font-weight: 600;
    font-size: 1.3rem;
    font-weight:bold;
    //color: #fff;

  }

  @media screen and (max-width: 950px) {
    margin-top: 7px
  }
`;
