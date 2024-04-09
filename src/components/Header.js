import React from "react";
import Logo from "../assets/Vector__3_.svg";
const Header = () => {
  return (
    <div className=" w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        src={Logo}
        alt="logo"
        style={{ height: "40px", width: "auto", marginLeft: "-10px" }}
      />
    </div>
  );
};

export default Header;
