import React from "react";
import "./Navbar.css";
import NavbarBelt from "./NavbarBelt/NavbarBelt";

import NavbarBanner from "./NavbarBanner/NavbarBanner";

function Navbar() {
  return (
    <div className="navbar">
      <NavbarBelt />
      <NavbarBanner />
    </div>
  );
}

export default Navbar;
