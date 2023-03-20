import React, { useState } from "react";
import "./index.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
export default function Addproduct(props) {
  const { closeproduct,addNewProduct } = props;
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const createProduct = () => {
    addNewProduct({imageUrl, name, price, description});
  };

  return (
    <div className="product-container">
      <div className="product-header">
        <label className="header-title">Add New product</label>
        <Button variant="outlined" onClick={closeproduct}>
          <CloseOutlinedIcon />
        </Button>
      </div>
      <div className="product-input-field">
        <div className="product-input">
          <TextField
            id="standard-basic"
            label="ImageUrl"
            variant="standard"
            fullWidth
            onChange={(event) => {
              setImageUrl(event.target.value);
            }}
            value={imageUrl}
          />
        </div>
        <div className="product-input">
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            fullWidth
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}
          />
        </div>
        <div className="product-input">
          <TextField
            id="standard-basic"
            label="Price"
            variant="standard"
            fullWidth
            onChange={(event) => {
              setPrice(event.target.value);
            }}
            value={price}
          />
        </div>
        <div className="product-input">
          <TextField
            id="standard-basic"
            label="Description"
            variant="standard"
            fullWidth
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            value={description}
          />
        </div>
        <Button variant="outlined" fullWidth onClick={()=>{createProduct(closeproduct())}}>
          Create
        </Button>
      </div>
    </div>
  );
}
