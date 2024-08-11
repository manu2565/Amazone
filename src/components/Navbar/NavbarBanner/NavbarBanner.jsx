import React from "react";
import "./NavbarBanner.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function NavbarBanner() {
  const options = [
    { name: "Fresh" },
    { name: "Amazone miniTV" },
    { name: "Sell" },
    { name: "Best Seller" },
    { name: "Today's Deals" },
    { name: "Mobile" },
    { name: "Electronics" },
    { name: "Prime" },
    { name: "Customer Service" },
    { name: "Fashion" },
    { name: "Home & Kitchen" }
  ];

  return (
    <div className="navbarBanner">
      <div className="navbarBannerOptionsLeft">
        <div className="optionNavbarBanner">
          <MenuIcon sx={{ fontSize: "24px" }} />
          <div className="allOptionNavbarBanner">All</div>
        </div>

        {options.map((item, ind) => {
          return (
            <Link to={'/products'} className="optionNavbarBanner">
              <div className="allOptionNavbarBanner" key={ind}>
                {item.name}
              </div>
            </Link>
          );
        })}
      </div>

      <div className="navbarBannerRightSide">
        <img
          src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Mirzapur/SWM_400x39_NP._CB570056770_.jpg"
          alt="amazone prime logo"
        />
      </div>
    </div>
  );
}

export default NavbarBanner;
