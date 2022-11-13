import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import { useLogout } from '../../hooks/useLogout';
import { ReactSession } from 'react-client-session';


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
  DropdownsItems,
  SignOutButton,
} from "./navbarMainElements";
import { useAuthContext } from "../../hooks/useAuthContext";

function SignOutModal(props) {
  const { logout, isPending } = useLogout()
  ReactSession.set("isLoggedout", true);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sign Out
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Are you sure you want to sign out?</h4>
        <p>
          We are sad to see you go. Do remember to visit us and finish your university applications. Good luck!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={logout} variant="danger">Sign Out</Button>
        {/* {!isPending && <Button className="mb-3" variant="warning" onClick={logout}>Logout</Button>}
              {isPending && <Button className="mb-3" variant="warning" disabled>Logging out...</Button>} */}
      </Modal.Footer>
    </Modal>
  );
}

const NavbarMain = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

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

  const {user} = useAuthContext()

  const [show, setShow] = useState(false);

  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  const style1 = {
    borderBottom: "3px solid #FFE052",
    marginTop: "8px",
  };

  const style2 = {
    borderBottom: "3px solid #5271ff",
    marginTop: "8px",
  };

  const unis = ["/smu", "/ntu", "/nus", "/main-page"];

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome}>
              <img src={"/logos/Unihelp_white.png"} width="80" />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <Dropdowns
                  show={show}
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}
                >
                  <Dropdowns.Toggle block variant="Nava" bsPrefix="p-0">
                    <Nava
                      style={
                        unis.includes(window.location.pathname)
                          ? style1
                          : style2
                      }
                      to="/main-page"
                    >
                      MyUni
                    </Nava>
                  </Dropdowns.Toggle>
                  <Dropdowns.Menu
                    style={{
                      background: "#395cff",
                      margin: "-3px 0px 0px 1.2px",
                      textAlign: "center",
                      border: "0px",
                      minWidth: "101px",
                      borderRadius: "0px",
                    }}
                  >
                    <DropdownsItems href="/smu">SMU</DropdownsItems>
                    <DropdownsItems href="/ntu">NTU</DropdownsItems>
                    <DropdownsItems href="/nus">NUS</DropdownsItems>
                  </Dropdowns.Menu>
                </Dropdowns>
              </NavItem>
              <NavItem>
                <Nava
                  activeStyle={{
                    borderBottom: "3px solid #FFE052",
                    marginTop: "8px",
                  }}
                  style={{ marginTop: "8px" }}
                  to="/forum"
                >
                  Forum
                </Nava>
              </NavItem>
              <NavItem>
                <Nava
                  activeStyle={{
                    borderBottom: "3px solid #FFE052",
                    marginTop: "8px",
                  }}
                  style={{ marginTop: "8px" }}
                  to="/submit-results"
                >
                  Submit Results
                </Nava>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <SignOutButton onClick={() => setModalShow(true)}>
                <span>Hi {user.displayName.split(' ')[0]}!</span>
              </SignOutButton>
              <SignOutModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
              &nbsp;
              <NavBtnLink to="/settings">
                <i class="bi bi-gear-fill"></i>
              </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavbarMain;