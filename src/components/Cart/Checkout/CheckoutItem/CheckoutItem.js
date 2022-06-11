import React from "react";
import Counter from "../../../UI/Counter/Counter.js";
import classes from "./CheckoutItem.module.css";

const CheckoutItem = (props) => {
  return (
    <div className={classes.CheckoutItem}>
      <div className={classes.MealImg}>
        <img src={props.meal.img} />
      </div>
      {/* 食物描述 */}
      <div className={classes.Desc}>
        <h2 className={classes.Title}>{props.meal.title}</h2>
        <div className={classes.PriceOuter}>
          {/* 樣式在組件模塊已定義 */}
          <Counter meal={props.meal} />
          {/* 總價 */}
          <div className={classes.Price}>
            {props.meal.price * props.meal.amount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
