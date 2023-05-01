import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";

const RightNav = () => {
  return (
    <div>
      <div className="d-flex flex-column gap-4">
        <h4>Login with</h4>
        <span className="d-flex flex-column gap-3">
          <Button variant="outline-primary">
            <FaGoogle /> Login with Google
          </Button>
          <Button variant="outline-secondary">
            <FaGithub /> Login with Github
          </Button>
        </span>
      </div>
      <div className="mt-5 d-flex flex-column gap-4">
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item className="py-4">
            {" "}
            <FaFacebookF /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="py-4">
            {" "}
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="py-4">
            {" "}
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone/>
    </div>
  );
};

export default RightNav;