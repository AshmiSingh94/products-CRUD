import React, { useState } from "react";
import Addproduct from "./components/AddProduct";
import CartList from "./components/CartList";
import Navbar from "./components/Navbar";
import WishList from "./components/WishList";
import { products } from "./components/utils/contents";
import GridView from "./components/GridView";
import ListView from "./components/ListView";
export default function App() {
  const [viewProduct, setViewProduct] = useState(false);
  const [viewCart, setViewCart] = useState(false);
  const [viewWishList, setViewWishList] = useState(false);
  const [view, setview] = useState("GRID");
  const [productList, setProductList] = useState(products);
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);

  const addNewProduct = (item) => {
    productList.push({ ...item });
    setProductList([...productList]);
  };
  const changeView = (arg) => {
    setview(arg);
  };

  const showproduct = () => {
    if (viewCart || viewWishList) {
      setViewCart(false);
      setViewWishList(false);
    }
    setViewProduct(true);
  };

  const showCart = () => {
    if (viewProduct || viewWishList) {
      setViewProduct(false);
      setViewWishList(false);
    }
    setViewCart(true);
  };

  const showWishList = () => {
    if (viewCart || viewProduct) {
      setViewCart(false);
      setViewProduct(false);
    }
    setViewWishList(true);
  };

  const addToCart = (item) => {
    if (cart.filter((currentItem) => currentItem.id === item.id).length > 0) {
      cart.forEach((currentItem) => {
        if (currentItem.id === item.id) {
          currentItem.count = currentItem.count + 1;
        }
      });
    } else {
      cart.push({ ...item, count: 1 });
    }
    setCart([...cart]);
  };

  const addToWishList = (item) => {
    if (
      wishList.filter((currentItem) => currentItem.id === item.id).length === 0
    ) {
      wishList.push({ ...item });
      setWishList([...wishList]);
    } else {
      const newList = wishList.filter(
        (currentItem) => currentItem.id !== item.id
      );
      setWishList([...newList]);
    }
  };

  /**
   * if count of item id greater than 1
   *  then decrease the number of count from selected item from cartlist
   * else remove the selected item from the cartlist
   *
   * @param {*} item
   */
  const removeFromCart = (item) => {
    if (item.count > 1) {
      cart.forEach((currentItem) => {
        if (currentItem.id === item.id) {
          currentItem.count = currentItem.count - 1;
        }
      });
      setCart([...cart])
    } else {
      const newList = cart.filter((currentItem) => currentItem.id !== item.id);
      setCart([...newList])
    }
  };

  return (
    <div>
      <Navbar
        changeView={changeView}
        showproduct={showproduct}
        showCart={showCart}
        showWishList={showWishList}
      />
      {view === "GRID" ? (
        <GridView
          products={productList}
          addToCart={addToCart}
          addToWishList={addToWishList}
        />
      ) : (
        <ListView products={productList} />
      )}
      {viewWishList && (
        <WishList
          products={wishList}
          moveToCart={addToCart}
          removeFromWishList={addToWishList}
          closeWishList={() => {
            setViewWishList(false);
          }}
        />
      )}
      {viewCart && (
        <CartList
          products={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          closeCart={() => {
            setViewCart(false);
          }}
        />
      )}
      {viewProduct && (
        <Addproduct
          addNewProduct={addNewProduct}
          closeproduct={() => {
            setViewProduct(false);
          }}
        />
      )}
    </div>
  );
}
