import classes from "./Checkout.module.css";
import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/cart-context.js";
import CheckoutItem from "./CheckoutItem/CheckoutItem.js";
import Bar from "./Bar/Bar.js";
// 結帳元素
const checkoutRoot = document.querySelector("#checkout-root");

const Checkout = (props) => {
  const ctx = useContext(CartContext);
  // 渲染到其他節點
  return ReactDOM.createPortal(
    <div
      className={classes.Checkout}
      onClick={(event) => event.stopPropagation()}
    >
      <div className={classes.Close}>
        {/* 点击时可以关闭对话框 */}
        <FontAwesomeIcon onClick={() => props.onHide()} icon={faXmark} />
      </div>
      <div className={classes.MealsDesc}>
        <header className={classes.Header}>
          <h2 className={classes.Title}>餐品詳細</h2>
        </header>

        <div className={classes.Meals}>
          {ctx.items.map((item) => (
            <CheckoutItem key={item.id} meal={item} />
          ))}
        </div>

        <footer className={classes.Footer}>
          <p className={classes.TotalPrice}>{ctx.totalPrice}</p>
        </footer>
        {/* 底部欄 */}
        <Bar totalPrice={ctx.totalPrice} />
      </div>
    </div>,
    checkoutRoot
  );
};
export default Checkout;
