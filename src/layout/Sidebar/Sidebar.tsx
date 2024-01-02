import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Container, MainBox, StyledLogo, ItemsBox } from './Sidebar.styles';
import { toggleMenu } from '../../store/menu/menuSlice';
import { IoMdAddCircle } from "react-icons/io";
import { FaCrown } from "react-icons/fa";
import { FaArchive, FaLightbulb, FaTag, FaMapMarkedAlt   } from 'react-icons/fa';
import { v4 } from 'uuid';


const items = [
  { icon: <FaArchive />, title: "Archive", id: v4() },
  { icon: <IoMdAddCircle />, title: "Trash", id: v4() },
]

const Sidebar = () => {
  const dispatch = useAppDispatch();

  const { isOpen } = useAppSelector((state) => state.menu);

  const { pathname } = useLocation();

  if (pathname === "/404") {
    return null;
  }

  return (
    <Container openMenu={isOpen ? "open" : ""}>
      <MainBox openMenu={isOpen ? "open" : ""}>
        <StyledLogo>
          <h1>전국 맛집 지도</h1>
        </StyledLogo>

        <ItemsBox >
          <li onClick={() => dispatch(toggleMenu(false))}>
            <NavLink
              to={"/"}
              state={`맛집 지도`}
              className={({ isActive }) => isActive ? "active-item" : "inactive-item"}
            >
              <span>
                <FaMapMarkedAlt    />
              </span>
              <span>맛집 지도</span>
            </NavLink>
          </li>
          <li onClick={() => dispatch(toggleMenu(false))}>
              <NavLink
                to={"/register"}
                state={'맛집 등록하기'}
                className={({ isActive }) => isActive ? "active-item" : "inactive-item"}
              >
                <span>
                  <IoMdAddCircle  />
                </span>
                <span>맛집 등록하기</span>
              </NavLink>
            </li>           
            <li onClick={() => dispatch(toggleMenu(false))}>
              <NavLink
                to={"/ranking"}
                state={'맛집 순위'}
                className={({ isActive }) => isActive ? "active-item" : "inactive-item"}
              >
                <span>
                  <FaCrown  />
                </span>
                <span>맛집 순위</span>
              </NavLink>
            </li>

          {/* edit tag item */}
          {/* <li
            className='sidebar__edit-item'
            onClick={() => dispatch(toggleTagsModal({ type: "edit", view: true }))}
          >
            <span>
              <MdEdit />
            </span>
            <span>Edit Notes</span>
          </li> */}

          {/* other items */}
          {/* {items.map(({ icon, title, id }) => (
            <li key={id} onClick={() => dispatch(toggleMenu(false))}>
              <NavLink
                to={`/${title.toLocaleLowerCase()}`}
                state={`${title}`}
                className={({ isActive }) => isActive ? "active-item" : "inactive-item"}
              >
                <span>{icon}</span>
                <span>{title}</span>
              </NavLink>
            </li>
          ))} */}

        </ItemsBox>
      </MainBox>
    </Container>
  )
}

export default Sidebar

