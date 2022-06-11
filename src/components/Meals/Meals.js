import React from "react";
import Meal from "./Meal/Meal.js";
import classes from "./Meals.module.css";

// 食物列表组件
const Meals = (props) => {
  return (
    <div className={classes.Meals}>
      {
        //數組的結果自動被展開
        props.mealsData.map((item) => (
          <Meal key={item.id} meal={item} />
        ))
      }
    </div>
  );
};

export default Meals;
