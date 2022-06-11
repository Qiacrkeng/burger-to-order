import React, { useContext } from "react";
import classes from "./Counter.module.css";
// Awesome圖標庫
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // 作為react圖標組件
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"; // 加與減
// 購物車數據
import CartContext from "../../../store/cart-context.js";
// 旁边的加与减区域
const Counter = (props) => {
  // 獲取context
  const ctx = useContext(CartContext);
  // 點擊添加
  const addButtonHandler = () => {
    ctx.addItem(props.meal);
  };
  // 取消一項
  const subButtonHandler = () => {
    ctx.removeItem(props.meal);
  };
  return (
    <div className={classes.Counter}>
      {props.meal.amount && props.meal.amount !== 0 ? (
        // 減號圖標
        <>
          <button onClick={subButtonHandler} className={classes.Sub}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className={classes.count}>{props.meal.amount}</span>
        </>
      ) : null}
      <button onClick={addButtonHandler} className={classes.Add}>
        {/* 加號圖標 */}
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default Counter;
