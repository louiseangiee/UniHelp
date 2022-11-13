import { Link as LinkR } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';


export const Nav = styled.nav`
  background-color: #5271ff;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #5271ff;
    color: #FFE052;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height = 80px;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Nava = styled(NavLink)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-top: 8px;
  padding: 1.9rem 1rem;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #5271ff;
    color: #FFE052;
  }

`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #5271ff;
  white-space: nowrap;
  padding: 10px 10px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  img {
    filter: invert(1);
  };

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  };

  &:hover img {
    filter: invert(0);
  };
`;

export const SignOutButton = styled(LinkR)`
  border-radius: 50px;
  background: #5271ff;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: 120px;

  &:hover:before {
    content: "Sign Out";
    text-align: center;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }

  &:hover span {
    display: none;
  }

`;

export const ProfileIcon = styled.img`
  width: 20px;
  height: 20px;
  filter: invert(1);

  &:hover {
    filter: invert(0);
  }
`

export const Dropdowns = styled(Dropdown)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 1.9rem 1rem;
cursor: pointer;
height: 80px;

&:active {
  color: transparent;
}

`;

export const DropdownsItems = styled(Dropdown.Item)`

color: #fff;

&:hover {
  color: #FFE052;
  background-color: #395cff
}


`;




