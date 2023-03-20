import { Button } from "@mui/material";
import "./index.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import React from "react";
export default function WishList(props) {
  const { closeWishList, products,moveToCart,removeFromWishList } = props;
  return (
    <div className="wishlist-container">
      <div className="wishlsit-header">
        <label className="wishlist-title">WishList</label>
        <Button variant="outlined" onClick={closeWishList}>
          <CloseOutlinedIcon />
        </Button>
      </div>
      <div className="wishlist-items-container">
        {products.map((item) => (
          <div className="wishlist-items" key={item.id}>
            <div>
              <img src={item.imageUrl} width="100px" height="150" alt="" />
            </div>
            <div> {item.name} </div>
            <div> {item.price} </div>
            <div> {item.description} </div>
            <div>
              <Button variant="outlined" onClick={()=>{moveToCart(item)}}><ShoppingCartOutlinedIcon/></Button>
              <Button variant="outlined" onClick={()=>{removeFromWishList(item)}}><DeleteOutlineOutlinedIcon/></Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
