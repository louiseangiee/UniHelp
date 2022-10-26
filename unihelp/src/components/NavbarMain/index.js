import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import Dropdown from 'react-bootstrap/Dropdown';


import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLogo,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Nava,
  Dropdowns,
  DropdownsItem
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

  const[show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  }
  const hideDropdown = e => {
    setShow(false);
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome}>
              <img src={"logos/Unihelp_white.png"} width="80" />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>

              <NavItem>
                <Dropdowns variant="Nava" show={show}
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}
                  >
                  <Dropdowns.Toggle variant="Nava" bsPrefix="p-0">
                    <Nava activeStyle={{ borderBottom: '3px solid #FFE052' }} to="main-page">
                      MyUni
                    </Nava>
                  </Dropdowns.Toggle>
                  <Dropdowns.Menu style={{ color: "#FFE052", background: "#5271ff", padding: "0px -20px 0px 0px", width: "10px"}}>
                    <Dropdowns.Item variant="NavItem" style={{ color: "#fff"}} href="/main-page">SMU</Dropdowns.Item>
                    <Dropdowns.Item variant="NavItem" style={{ color: "#fff"}} href="/forum">NTU</Dropdowns.Item>
                    <Dropdowns.Item variant="NavItem" style={{ color: "#fff"}} href="/submit-results">NUS</Dropdowns.Item>
                  </Dropdowns.Menu>
                </Dropdowns>
              </NavItem>
              <NavItem>
                <Nava
                  activeStyle={{ borderBottom: '3px solid #FFE052' }}
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
