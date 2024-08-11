import React from "react";
import "./HomeBanner.css";
import homeBannerItemProduct from "../../../homeProduct.json";

function HomeBanner() {
  return (
    <div className="homebanner">
      <img
        className="homeBannerimg"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/march/brands/GW/Under_1499_Tallhero_3000x1200._CB561212093_.jpg"
        alt="homebanner img"
      />
      <div className="grayBackgroundHomeBanner"></div>

      <div className="homebannerItemDiv">
        {homeBannerItemProduct.product.map((item, ind) => {
          return (
            <div className="homeBannerItemDivCard">
              <div className="homeBannerItemDivCardTitle">{item.itemTitle}</div>
              <div className="imgHomeBannerItemDivCard">
                {item.imgs.map((it, ind) => {
                  return (
                    <div className="imgBannerHomeDiv">
                      <img className="imgBannerHomeDivImg" src={it} alt="" />
                      <div className="imgBannerImgName">
                        Cusion Cover,bedsheets & more
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="seeMoreHomeBanner">See More</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeBanner;
