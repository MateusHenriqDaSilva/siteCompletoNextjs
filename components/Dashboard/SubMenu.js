import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled.a`
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style-type: none;
  height: 40px;
  text-decoration: none;
  font-size: 0.8rem;
  &:hover {
    background: #C3CFE2;
    list-style-type: none;
    border-left: 4px solid black;
    list-style-type: none;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
  list-style-type: none;
`;

const DropdownLink = styled.a`
  background: rgb(230, 230, 230);
  height: 30px;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 0.8rem;
  list-style-type: none;
  &:hover {
    background: #FDFBFB;
    cursor: pointer;
    list-style-type: none;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink href={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink href={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;