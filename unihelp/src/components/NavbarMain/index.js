import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom';

import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLogo,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Nava
} from "./navbarMainElements";

const NavbarMain = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome}>
              UniHelp
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>

              <NavItem>
                  <Nava
                    activeStyle={{ borderBottom: '3px solid #FFE052' }}
                    to="main-page"
                  >
                    MyUni
                  
                  </Nava>
              </NavItem>
              <NavItem>
                  <Nava
                    activeStyle={{ borderBottom: '3px solid #FFE052'}}
                    to="forum"
                  >
                    Forum
                  </Nava>
              </NavItem>
              <NavItem>
                  <Nava
                    activeStyle={{ borderBottom: '3px solid #FFE052' }}
                    to="submit-results"
                  >
                    Submit Results
                  </Nava>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/settings"><i class="bi bi-gear-fill"></i></NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavbarMain;
