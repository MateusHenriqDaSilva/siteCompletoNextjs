import React, { useState } from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarSubMenuData } from './SidebarSubMenuData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
  background: #8E8E8E;
  background: -webkit-linear-gradient(bottom left, #8E8E8E, #FFFFFF);
  background: -moz-linear-gradient(bottom left, #8E8E8E, #FFFFFF);
  background: linear-gradient(to top right, #8E8E8E, #FFFFFF);
  height: 60px;
  display: flex;
  justify-content: flex-start;
  list-style-type: none;
  align-items: center;
  box-shadow: 0px 0px 5px black;
`;

const NavIcon = styled.a`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  align-items: center;
  list-style-type: none;
`;

const SidebarNav = styled.nav`
  background: #8E8E8E;
  background: -webkit-linear-gradient(top left, #8E8E8E, #FFFFFF);
  background: -moz-linear-gradient(top left, #8E8E8E, #FFFFFF);
  background: linear-gradient(to bottom right, #8E8E8E, #FFFFFF);
  width: 200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  box-shadow: 0px 0px 5px black;
  list-style-type: none;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const SidebarSubMenu = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: 'black' }}>
        <Nav>
          <NavIcon>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarSubMenuData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default SidebarSubMenu;