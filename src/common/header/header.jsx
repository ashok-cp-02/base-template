// *******~ Import ~******** //
// React
import React, { useState } from "react";
// Assets

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Typewriter from "typewriter-effect";
// Components
// import ThemeContext from "../theme/components/contexts/themecontexts";
import MenuBtn from "./menubtn/menubtn";
import myResumePDF from "../assets/Ashok-UI-Developer.pdf";
import Contact from "../../pages/contact/contact";
// CSS
import "./css/header.scss";
// Images

// Responsive Img

// Icons

import { GrDocumentDownload } from "react-icons/gr";

// *******~ Import ~******** //

const Header = (params) => {
  // const { theme } = useContext(ThemeContext);
  const [Contactshow, setContactshow] = useState(false);
  const ContacthandleShow = () => setContactshow(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavLinkClick = (index) => {
    setActiveIndex(index);
  };
  const MenuData = [
    {
      menu: "Home",
      url: "/",
      as: HashLink,
    },
  ];
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -70;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = myResumePDF;
    link.download = "Ashok UI Developer.pdf"; // Change the filename as needed
    link.click();
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" fixed="top" className="main-header">
        <Container>
          <div className="logo">
            <>
              <Nav.Link as={Link} to={"/"} eventKey={0}>
                <div className="name">
                  <p className="code">{"<"} </p>
                  Ashok C<p className="code">{"/>"}</p>
                </div>
                <div className="desgi">
                  <p>
                    <Typewriter
                      options={{
                        strings: ["Sr. UI Developer", "React Developer"],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 0,
                        delay: 10,
                        pauseFor: 3000,
                        cursor: "",
                      }}
                    />
                  </p>
                </div>
              </Nav.Link>
            </>
          </div>
          <MenuBtn />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-menu-div">
              {MenuData.map((data, index) => (
                <>
                  <Nav.Link
                    as={data.as}
                    to={data.url}
                    key={index}
                    eventKey={index}
                    smooth
                    scroll={(el) => scrollWithOffset(el)}
                    active={index === activeIndex}
                    onClick={() => handleNavLinkClick(index)}
                  >
                    {data.menu}
                  </Nav.Link>
                </>
              ))}
              <Nav.Link onClick={ContacthandleShow}>Contact</Nav.Link>
            </Nav>
            <Nav>
              <button className="get-btn" href="/" onClick={handleDownload}>
                <GrDocumentDownload /> Download CV
                <span></span>
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Contact Contactshow={Contactshow} setContactshow={setContactshow} />
    </>
  );
};
export default Header;
