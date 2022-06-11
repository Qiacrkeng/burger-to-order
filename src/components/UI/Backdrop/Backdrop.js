import React from "react";
import classes from "./Backdrop.module.css";
import ReactDOM from "react-dom";
// 作為背景根
const backdropRoot = document.querySelector("#backdrop-root");
// 背景遮罩
const Backdrop = (props) => {
  // 對一個子節點渲染到已有的節點（DOM）
  return ReactDOM.createPortal(
    // 將父組件的值導出，同時應用父組件指定的樣式及參數（props通過展開運算符）
    <div {...props} className={`${classes.Backdrop} ${props.className}`}>
      {props.children}
    </div>,
    backdropRoot
  );
};

export default Backdrop;
