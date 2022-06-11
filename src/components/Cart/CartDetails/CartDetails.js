import React, { useContext, useState } from "react";
import CartContext from "../../../store/cart-context.js";
import classes from "./CartDetails.module.css";
// 背景根
import Backdrop from "../../UI/Backdrop/Backdrop.js";
import Meal from "../../Meals/Meal/Meal.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Confirm from "../../UI/Confirm/Confirm.js";
// 購物車列表
const CartDetails = () => {
  const ctx = useContext(CartContext);
  // 確認框提示
  const [showConfirm, setShowConfirm] = useState(false);
  // 顯示確認窗口
  const showConfirmHandler = () => {
    setShowConfirm(true);
  };
  // 關閉確認窗口
  const cancelHandler = (event) => {
    // 阻止事件傳播
    event.stopPropagation();
    setShowConfirm(false);
  };
  //
  const okHandler = () => {
    // 清空購物車
    ctx.clearCart();
  };
  return (
    <Backdrop>
      {
        // 確認框
        showConfirm && (
          <Confirm
            onCancel={cancelHandler} // 如果點擊取消
            onOk={okHandler} // 如果點機確認
            confirmText={"確認清空購物車嗎？"} // 提示的文本
          />
        )
      }
      <div
        className={classes.CartDetails}
        // 防止事件傳播
        onClick={(event) => event.stopPropagation()}
      >
        {/* flex兩端對齊 */}
        <header className={classes.Header}>
          <h2 className={classes.Title}>餐品詳情</h2>
          <div onClick={showConfirmHandler} className={classes.Clear}>
            <FontAwesomeIcon icon={faTrash} />
            <span>清空購物車</span>
          </div>
        </header>
        <div className={classes.MealList}>
          {ctx.items.map((item) => (
            // 沒有食物詳情，或者說是為空，剩下的數據都傳遞出去了
            <Meal key={item.id} noDesc meal={item} />
          ))}
        </div>
      </div>
    </Backdrop>
  );
};

export default CartDetails;
