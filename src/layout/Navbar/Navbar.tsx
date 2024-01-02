import React from 'react'
import { Container, StyledNav } from './Navbar.styles'
import { FiMenu } from 'react-icons/fi';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { toggleMenu } from '../../store/menu/menuSlice';
import getStandardName from '../../utils/getStandardName';

const Navbar = () => {
  const dispatch = useAppDispatch();

  const { pathname, state } = useLocation()
  console.log("state>>",state);
  
  if (pathname === "/404") {
    return null;
  }

  let menuName = state;
  //홈화면이라서 state값이 없을때
    if (state == null) {
      menuName = "맛집 지도"
  }

  return (
    <StyledNav>
      <div className='nav__menu'>
        <FiMenu onClick={() => dispatch(toggleMenu(true))} />
      </div>
      <Container>
        <div className='nav__page-title'>{getStandardName(menuName)} </div>
      </Container>
    </StyledNav>
  )
}

export default Navbar