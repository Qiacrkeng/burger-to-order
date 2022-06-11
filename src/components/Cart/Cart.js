import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context.js";
import CartDetails from "./CartDetails/CartDetails.js";
// import
// 導入收納袋的圖標
import iconImage from "../../asset/bag.png";
import Checkout from "./Checkout/Checkout";

const Cart = () => {
  // 使用購物車數據
  const ctx = useContext(CartContext);
  // 設置詳情是否顯示
  const [showDetails, setShowDetails] = useState(false);
  // 結帳頁是否顯示
  const [showCheckout, setShowCheckout] = useState(false);
  // 顯示詳情，當用戶單擊底部欄時
  const toggleDetailsHandler = () => {
    if (ctx.totalAmount === 0) {
      setShowDetails(false);
      return;
    }
    // 讓用戶再次點擊時可以取消
    setShowDetails((prevData) => !prevData);
  };
  // 顯示結帳
  const showCheckoutHandler = (event) => {
    event.stopPropagation(); // 取消事件傳播
    if (ctx.totalAmount === 0) return;
    setShowCheckout(true);
  };
  // 取消結帳
  const hideCheckoutHandler = () => {
    setShowCheckout(false);
  };

  return (
    <div className={classes.Cart} onClick={toggleDetailsHandler}>
      {
        // 結帳，當用戶點擊了去結算後，這個組件撲滿螢幕
        showCheckout && <Checkout onHide={hideCheckoutHandler} />
      }
      {
        // 顯示出來，不影響當前組件，取視口定位，顯示購物車列表
        showDetails && <CartDetails />
      }
      <div className={classes.Icon}>
        <img src={iconImage} />
        <span className={classes.TotalAmount}>{ctx.totalAmount}</span>
      </div>
      <p className={classes.Price}> {ctx.totalPrice} </p>
      <button onClick={showCheckoutHandler} className={classes.Button}>
        去結算
      </button>
    </div>
  );
};

export default Cart;
