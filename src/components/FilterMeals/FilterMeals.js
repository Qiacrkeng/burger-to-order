import React from "react";
import classes from "./FilterMeals.module.css";
// 引入第三方包
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // 作為react圖標組件
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // 引入搜索icon

// 頭頂搜索
const FilterMeals = (props) => {
  // 輸入框獲得焦點事件處理
  const inputChangeHandler = (event) => {
    const keyword = event.target.value.trim(); // 兩端刪除字符串
    props.onFilter(keyword); // 調用過濾器，通過父組件傳遞
  };

  return (
    <div className={classes.FilterMeals}>
      <div className={classes.InputOuter}>
        <input
          placeholder={"請輸入關鍵字"}
          onChange={inputChangeHandler}
          type={"text"}
          className={classes.SearchInput}
        />
        <FontAwesomeIcon className={classes.SearchIcon} icon={faSearch} />
      </div>
    </div>
  );
};

export default FilterMeals;
