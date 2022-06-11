import React from "react";

// 購物車，真正添加数据是在APP组件中
const CartContext = React.createContext({
  items: [], // 購物車項
  totalAmount: 0, // 購物車總計
  totalPrice: 0, // 總計單價
  addItem() {},
  removeItem() {},
  clearItem() {},
}); // 共享對於組件數據是全局數據

export default CartContext;
