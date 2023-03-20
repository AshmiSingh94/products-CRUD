import { Button } from "@mui/material";
import React from "react";
import "./index.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
export default function CartList(props) {
  const { closeCart, products, addToCart, removeFromCart } = props;
  const [total, setTotal] = React.useState(0);
  const [totalItems, setTotalItems] = React.useState(0);

  React.useEffect(() => {
    let subtotal = 0;
    let totalCount = 0;
    products.forEach((currentItem) => {
      subtotal = subtotal + currentItem.count * currentItem.price;
      totalCount = totalCount + currentItem.count;
    });
    setTotal(subtotal);
    setTotalItems(totalCount);
  }, [products]);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <label className="cart-title">CartList</label>
        <Button variant="outlined" onClick={closeCart}>
          <CloseOutlinedIcon />
        </Button>
      </div>
      {totalItems > 0 ? (
        <div className="subtotal-container">
          Subtotal : {total}
          <Button variant="outlined">
            Proceed To Buy ({totalItems} {totalItems > 1 ? "Items" : "Item"}){" "}
          </Button>
        </div>
      ):""}
      <div className="cart-items-container">
        {products.map((item) => (
          <div className="cart-items" key={item.id}>
            <div>
              <img src={item.imageUrl} width="150px" height="200px" alt="" />
            </div>
            <div> {item.name} </div>
            <div> {item.price} </div>
            <div> {item.description} </div>
            <div> Count: {item.count} </div>
            <div>
              <Button
                variant="outlined"
                onClick={() => {
                  addToCart(item);
                }}
              >
                <AddBoxOutlinedIcon /> Add
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  removeFromCart(item);
                }}
              >
                <DeleteOutlineOutlinedIcon />
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
