import React, { useState } from "react";
import CartContext from "./store/cart-context.js";
// 搜索框
import FilterMeals from "./components/FilterMeals/FilterMeals.js";
// 主要内容，食物列表
import Meals from "./components/Meals/Meals.js";
// 合計欄
import Cart from "./components/Cart/Cart.js";
// 模拟一组食物数据，以JSON形式
const MEALS_DATA = [
  {
    id: "1",
    title: "漢堡包",
    desc: "百分百純牛肉配搭爽脆酸瓜洋蔥粒與美味番茄醬經典滋味讓你無法抵擋！",
    price: 12,
    img: "/img/meals/1.png",
  },
  {
    id: "2",
    title: "雙層吉士漢堡",
    desc: "百分百純牛肉與雙層香軟芝，加上松軟面包及美味醬料，誘惑無人能擋！",
    price: 20,
    img: "/img/meals/2.png",
  },
  {
    id: "3",
    title: "巨無霸",
    desc: "兩塊百分百純牛肉，搭配生菜、洋蔥等新鮮食材，口感豐富，極致美味！",
    price: 24,
    img: "/img/meals/3.png",
  },
  {
    id: "4",
    title: "麥辣雞腿漢堡",
    desc: "金黃脆辣的外皮，鮮嫩幼滑的雞腿肉，多重滋味，一次打動您挑剔的味蕾！",
    price: 21,
    img: "/img/meals/4.png",
  },
  {
    id: "5",
    title: "板燒雞腿堡",
    desc: "原塊去骨雞排嫩滑多汁，與翠綠新鮮的生菜和香濃燒雞醬搭配，口感豐富！",
    price: 22,
    img: "/img/meals/5.png",
  },
  {
    id: "6",
    title: "麥香雞",
    desc: "清脆爽口的生菜，金黃酥脆的雞肉。營養配搭，好滋味的健康選擇！",
    price: 14,
    img: "/img/meals/6.png",
  },
  {
    id: "7",
    title: "吉士漢堡包",
    desc: "百分百純牛肉與香軟芝士融為一體配合美味番茄醬豐富口感一咬即刻湧現！",
    price: 12,
    img: "/img/meals/7.png",
  },
];
// 主页面
const App = () => {
  // 創建一個state，存储食物列表，屬APP組件
  const [mealsData, setMealsData] = useState(MEALS_DATA);
  // 购物车数据
  const [cartData, setCartData] = useState({
    items: [], // 购物车项
    totalAmount: 0, // 商品数量
    totalPrice: 0, // 总价
  });
  // 過濾器，重新渲染組件
  const filterHandler = (keyword) => {
    // 把結果匹配的值做更新
    const newMealsData = MEALS_DATA.filter((item) =>
      item.title.includes(keyword)
    );
    setMealsData(newMealsData);
  };
  // 购物车增加商品，注意拿的meal是對象的引用
  const addItem = (meal) => {
    const newCart = { ...cartData };
    // 当购物车存在该商品
    if (newCart.items.includes(meal)) {
      meal.amount += 1;
    } else {
      // meal添加到购物车
      newCart.items.push(meal);
      // 初始化當前對象的計數屬性為1
      meal.amount = 1;
    }
    newCart.totalAmount += 1; // 增加总数
    newCart.totalPrice += meal.price; // 增加总金额
    // 重新設置購物車，重新渲染組件
    setCartData(newCart);
  };
  // 減少商品的數量
  const removeItem = (meal) => {
    // 複製購物車
    const newCart = { ...cartData };
    // 數量減一
    meal.amount -= 1;
    // 如果數量歸為零
    if (meal.amount === 0) {
      // 刪掉一個元素，位於meal的元素被刪掉
      newCart.items.splice(newCart.items.indexOf(meal), 1);
    }
    // 修改商品總數和總金額
    newCart.totalAmount -= 1;
    newCart.totalPrice -= meal.price;

    setCartData(newCart);
  };

  return (
    // 應該說是添加數據
    <CartContext.Provider value={{ ...cartData, removeItem, addItem }}>
      <div>
        {/* 搜索區域組件，props傳遞過濾器 */}
        <FilterMeals onFilter={filterHandler} />
        {/* 食物清單組件，用props傳遞數據 */}
        <Meals mealsData={mealsData} />
        {/* 底部合計蘭 */}
        <Cart />
      </div>
    </CartContext.Provider>
  );
};
export default App;
