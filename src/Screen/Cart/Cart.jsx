import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";

import { removeFromCart } from "../../redux/actions/actions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart() {
  const [cartItem, setCartItem] = useState([]);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  let a=0;
  let cost = cartItems.map((item)=>{return a = a+ item.price})



  useEffect(() => {
    setCartItem(cartItems);
  }, [cartItems]);


  const handleRemoveFromCart =(id) =>{
    toast.error("Item Removed from Cart",{position:"bottom-right"})
  dispatch(removeFromCart(id));
  }

  return (
    <div className="cart">
      <div className="topLeftCart">
        <div className="topLeftCartTitle">Shopping Cart</div>
        <div className="deselectAllcart">Deselect all items</div>

        <div className="cartPricesTextDivider">Price</div>

        <div className="cartitemsdiv">
          {cartItem.map((item, index) => {
            return (
              <div className="cartitemBlock">
                <div className="cartItemleftblock">
                  <div className="cartItemblockImage">
                    <img
                      className="cartItemLeftBlockingimg"
                      src={item.imageUrl}
                      alt=""
                    />
                  </div>

                  <div className="cartitemLeftBlockDetails">
                    <div className="cartItemProductName">
                     {item.name}
                    </div>
                    <div className="instockcard">In stock</div>

                    <div className="elgfreeship">
                      Eligible for Free shipping
                    </div>

                    <div className="amazonefullfieldImg">
                      <img
                        className="fullfillImg"
                        src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
                        alt=""
                      />
                    </div>
                    <div className="removefrombasket" onClick={()=>{handleRemoveFromCart(item.id)}}>Remove From Basket</div>
                  </div>
                </div>

                <div className="cartItemRightBlock">{item.price}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="topRightCart">
        <div className="subTotalTitle">
          Subtotal ({cartItem.length} items):
          <span className="subTotalTitleSpan">Rs{a}</span>{" "}
        </div>
        <div className="giftAddto">
          <input type="checkbox" />

          <div>This Order Contains a gift</div>
        </div>

        <div className="proceedToBuy">Proceed To Buy</div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Cart;
