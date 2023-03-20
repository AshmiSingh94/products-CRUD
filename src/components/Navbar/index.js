import React from "react";
import "./index.css";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { Button } from "@mui/material";
import ReorderOutlinedIcon from "@mui/icons-material/ReorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
export default function Navbar(props) {
  const { showproduct, showCart, showWishList, changeView } = props;
  return (
    <div className="Navbar-container">
      <Button
        variant="outlined"
        onClick={() => {
          changeView("GRID");
        }}
      >
        <AppsOutlinedIcon />
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          changeView("LIST");
        }}
      >
        <ReorderOutlinedIcon />
      </Button>
      <Button variant="outlined" onClick={showCart}>
        <ShoppingCartOutlinedIcon  />
      </Button>
      <Button variant="outlined" onClick={showWishList}>
        <FavoriteBorderOutlinedIcon />
      </Button>
      <Button variant="outlined" onClick={showproduct}>
        <AddBoxOutlinedIcon />
      </Button>
    </div>
  );
}
