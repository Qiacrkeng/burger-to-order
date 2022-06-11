import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// 移動裝置適配，總寬度為750rem
document.documentElement.style.fontSize = 100 / 750 + "vw";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 启动严格模式
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
