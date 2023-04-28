import React from "react";
import moment from "moment";
import logo from "../../../assets/logo.png";

const Header = () => {
  const currentDate = moment().format("dddd, MMMM D, YYYY");

  return (
    <div>
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{currentDate}</p>
      </div>
    </div>
  );
};

export default Header;