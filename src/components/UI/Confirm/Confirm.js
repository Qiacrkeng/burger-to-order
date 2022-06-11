import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Confirm.module.css";

const Confirm = (props) => {
  return (
    // 如果點擊遮罩外邊則視為取消
    <Backdrop onClick={props.onCancel} className={classes.ConfirmOuter}>
      <div className={classes.Confirm}>
        <p className={classes.ConfirmText}>
          {
            // 為了可複用組件，組件的描述文字由父組件傳遞
            props.confirmText
          }
        </p>
        <div>
          <button
            onClick={(event) => props.onCancel(event)}
            className={classes.Cancel}
          >
            取消
          </button>
          <button onClick={(event) => props.onOk(event)} className={classes.Ok}>
            確認
          </button>
        </div>
      </div>
    </Backdrop>
  );
};
export default Confirm;
