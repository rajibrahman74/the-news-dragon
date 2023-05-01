import React from "react";
import moment from "moment";
import logo from "../../../assets/logo.png";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const currentDate = moment().format("dddd, MMMM D, YYYY");

  return (
    <Container className="mt-5">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{currentDate}</p>
      </div>
      <div className="d-flex align-items-center">
        <Button variant="danger">Latest</Button>
        <Marquee speed={90}>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>
      <Navbar
        className="d-flex justify-content-end align-align-items-center"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#career">Careeer</Nav.Link>
            </Nav>
            <Nav className="d-flex align-items-center">
              <Nav.Link href="#deets">
                <FaUserCircle />
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button variant="dark">Dark</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;