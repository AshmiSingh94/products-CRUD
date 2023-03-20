import React from "react";
import "./index.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { Button } from "@mui/material";
export default function GridView(props) {
  const { products, addToCart,addToWishList } = props;
  return (
    <div className="grid-container">
      {products.map((item) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            components="img"
            image={item.imageUrl}
            alt=""
          />
          <CardContent className="content-card">
            <div>{item.name}</div>
            <div>{item.price}</div>
            <div>{item.description}</div>
          </CardContent>
          <CardActions className="action-card">
            <Button variant="outlined" onClick={()=>{addToCart(item)}}>
              <AddShoppingCartOutlinedIcon />
            </Button>
            <Button variant="outlined" onClick={()=>{addToWishList(item)}}>
              <FavoriteOutlinedIcon />
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
