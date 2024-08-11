import React from "react";

import "./Products.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import productDetail from "./Product.json";

import { useSelector,useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/actions";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Products() {
const dispatch=useDispatch();
  const cartItems =useSelector((state)=>state.cart.items);

const handleAddToCart =(item)=>{
  toast.success("SuccessFully Add in Cart",{position:"bottom-right"})
dispatch(addToCart(item));
}



  return (
    <div className="productPage">
      <div className="productTopBanner">
        <div className="productTopBannerItems">Electronics</div>

        <div className="productTopBannerItemsSubMenu">Mobile & Accessories</div>
        <div className="productTopBannerItemsSubMenu">
          Laptops & Accessories
        </div>
        <div className="productTopBannerItemsSubMenu">
          TV & Home Entertainment
        </div>
        <div className="productTopBannerItemsSubMenu">Audio</div>
        <div className="productTopBannerItemsSubMenu">Cameras</div>
        <div className="productTopBannerItemsSubMenu">Computer Peripherals</div>
        <div className="productTopBannerItemsSubMenu">Smart Technology</div>
      </div>

      <div className="productsPageMain">
        <div className="productsPageMainLeftCategory">
          <div className="productPageMainLeftCategoryTitle">Category</div>
          <div className="productsPageMainLetCategoryContent">
            <div className="productsPageMainLetCategoryTitleContent">
              Coputers & Accessories
            </div>

            <div className="productsPageMainLetCategoryTitleContentSub">
              Macbooks
            </div>
            <div className="productsPageMainLetCategoryTitleContentSub">
              Amazone Prime
            </div>
            <div className="productsPageMainLetCategoryTitleContentSub">
              Average Customer Review
            </div>

            <div className="ratingLeftBox">
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className="andUp">& Up</div>
            </div>

            <div className="ratingLeftBox">
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className="andUp">& Up</div>
            </div>
            <div className="ratingLeftBox">
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className="andUp">& Up</div>
            </div>

            <div className="ratingLeftBox">
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className="andUp">& Up</div>
            </div>

            <div className="productsPageMainLetCategoryTitleContentSub">
              Telephones & Accessories Warranties
            </div>

            <div className="productsPageMainLetCategoryTitleContentSub">
              eBook Readers & Accessories
            </div>
            <div className="productsPageMainLetCategoryTitleContentSub">
              Wearable Technology
            </div>

            <div className="productsPageMainLetCategoryTitleContentSub">
              General Purpose Batteries & Battery Chargers
            </div>
            <div className="productsPageMainLetCategoryTitleContentSub">
              Headphones, Earbuds & Accessories
            </div>

            <div className="productsPageMainLetCategoryTitleContentSub">
              Power Accessories
            </div>
          </div>
        </div>

        <div className="productsPageMainRight">
          <div className="productPageMainRightTopBanner">
            1-5 of 5 results for{" "}
            <span className="productPageMainRightTopBannerSpan">Macbooks</span>
          </div>

          <div className="itemsImageProductPage">
            {productDetail.product.map(
              (item,
              index) => {
                return (
                  <div className="itemImageProductPageOne" key={item.id}>
                    <div className="imgBlockitemsImageProductPageOne">
                      <img
                        src={item.imageUrl}
                        className="productImgproduct"
                        alt=""
                      />
                    </div>
                    <div className="productNameProduct">
                      <div>{item.name}</div>
                      <div className="productNameProductRating">
                        <StarRateIcon
                          sx={{ fontSize: "16px", color: "#febd69" }}
                        />
                        <StarRateIcon
                          sx={{ fontSize: "16px", color: "#febd69" }}
                        />
                        <StarRateIcon
                          sx={{ fontSize: "16px", color: "#febd69" }}
                        />
                        <StarRateIcon
                          sx={{ fontSize: "16px", color: "#febd69" }}
                        />
                        <StarOutlineIcon
                          sx={{ fontSize: "16px", color: "#febd69" }}
                        />
                      </div>

                      <div className="priceProductDetailPage">
                        <div className="currencyText">₹</div>
                        <div className="ratehomeDetailPrice">{item.price}</div>
                        <div className="addtobasketBtn" onClick={()=>{handleAddToCart(item)}}>Add To Cart</div>
                      </div>

                      <div className="ofProductpage">
                        Upto 10% off on select cards
                      </div>
                      <div className="freeDeliveryofAmazone">
                        Free Delivery By Amazone
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Products;
