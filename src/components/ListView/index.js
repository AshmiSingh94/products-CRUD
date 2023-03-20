import React from "react";
import "./index.css";
import { products } from "../utils/contents";
import { Button } from "@mui/material";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
export default function ListView() {
  return (
    <div className="list-Container">
      <table>
        <thead>
          <tr>
            <th>sl.No</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={item.id}>
              <th>{index + 1}</th>
              <th>
                <img src={item.imageUrl} width="100px" height="150px" alt="" />
              </th>
              <th>{item.name}</th>
              <th>{item.price}</th>
              <th>{item.description}</th>
              <th>
                <Button variant="outlined" type="small"><AddShoppingCartOutlinedIcon/></Button>
                <Button variant="outlined"><FavoriteBorderOutlinedIcon/></Button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
