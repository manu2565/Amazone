import React from "react";
import "./NavbarBelt.css";
import stock from "../../../assets/stock.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import india from "../../../assets/india.png";

import { Link } from "react-router-dom";

import { useSelector,useDispatch } from "react-redux";

function NavbarBelt() {

  const cartItems =useSelector((state)=>state.cart.items);


  
  return (
    <div className="navbarBelt">
      <div className="leftNavBelt">
        <Link to={"/"} className="leftNavBeltLogo">
          <img className="amazonLogoNavbar" src={stock} alt="amazonLogo" />
          <span className="navbar_inLogo">.in</span>
        </Link>
        <div className="navbarBeltLocation">
          <div className="navbarBeltLocationImg">
            <LocationOnOutlinedIcon
              className="navbarBeltLocationImgIcon"
              sx={{ fontSize: "22px" }}
            />
          </div>
          <div className="navbarBeltLocationPlace">
            <div className="navbarBeltLocationTop">
              Delivering to Pune 411032
            </div>
            <div className="navbarBeltLocationBottom">Update location</div>
          </div>
        </div>
      </div>

      <div className="navbarBeltSearchBox">
        <div className="navbarBeltSearchDiv">
          <div className="navbarBeltSearchBoxAll">
            <div className="navbarBeltSearchBoxAllText">All</div>
            <ArrowDropDownIcon sx={{ fontSize: "20px" }} />
          </div>
          <input
            type="text"
            className="navbarBeltInputSearchBox"
            placeholder="search items"
          />
          <div className="searchIconNavbarBelt">
            <SearchOutlinedIcon
              sx={{ fontSize: "26px" }}
              className="searchNavbarBeltIcon"
            />
          </div>
        </div>
      </div>
      <div className="rightSideNavbarBelt">
        <div className="indianFlagCode">
          <img src={india} className="indiaFlag" />
          <div className="indiaCodeNavbarBelt">
            EN
            <ArrowDropDownIcon
              sx={{ fontSize: 16, marginTop: 1, marginLeft: -0.4 }}
              className="indiaCodeNavbarBeltDrp"
            />
          </div>
        </div>
        <div className="helloSignInNavbaeBelt">
          <div className="helloTopNavbarBelt">Hello,User</div>
          <div className="indiaCodeNavbarBelt">Account & Lists</div>
        </div>
        <div className="helloSignInNavbaeBelt">
          <div className="helloTopNavbarBelt">Returns</div>
          <div className="indiaCodeNavbarBelt">& orders</div>
        </div>

        <div className="helloSignInNavbaeBelt">
          <span className="cartItemNumberNavbarBelt">{cartItems.length}</span>

          <Link to={"/cart"}className="helloTopNavbarBelt">
            <ShoppingCartOutlinedIcon />
            <span className="cartTitle">Cart</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavbarBelt;
