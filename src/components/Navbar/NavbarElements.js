import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 99;
`;
  
export const NavLogo = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  margin-left: 24px;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
      color: #808080;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #808080;
  }
  &:hover {
      color: #808080;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 1068px) {
    display: none;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 1068px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 101;
  }
`;

export const NavMenuMobile = styled.div`
  display: none;
  @media screen and (max-width: 1068px) {
    background: #000;
    height: 500px;
    display: block;
    justify-content: space-between;
    z-index: 99;
    position: absolute;
    width: 100%;
    left: 0%;
  }
`;

export const NavLinkMobile = styled(Link)`
  display: none;
  @media screen and (max-width: 1068px) {
    top: 25%;
    color: #fff;
    text-decoration: none;
    display: block;
    padding: 10px 1rem;
    height: auto;
    width: auto;
    margin: 0 auto;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    z-index: 99;
    cursor: pointer;
    &.active {
      color: #808080;
    }
    &:hover {
        background-color: #808080;
        color: #000
    }
  }
`;