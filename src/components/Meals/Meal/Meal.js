import React from "react";
import classes from "./Meal.module.css";
import Counter from "../../UI/Counter/Counter.js";

// 食物组件
const Meal = (props) => {
  return (
    // 對Meal應用了flex佈局，兩列內容
    <div className={classes.Meal}>
      <div className={classes.ImgBox}>
        {/* 父組件負責提供路徑 */}
        <img src={props.meal.img} />
      </div>
      <div className={classes.DescBox}>
        {/* 食物名 */}
        <h2 className={classes.Title}>{props.meal.title}</h2>
        {/* 食物詳情 */}
        {props.noDesc ? null : (
          <p className={classes.Desc}>{props.meal.desc}</p>
        )}
        <div className={classes.PriceWrap}>
          {/* 價格 */}
          <span className={classes.Price}>{props.meal.price}</span>
          <Counter meal={props.meal} />
        </div>
      </div>
    </div>
  );
};

export default Meal;
