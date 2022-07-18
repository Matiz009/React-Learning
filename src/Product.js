import React from "react";
import "./Product.css";
import Item_Dec from "./Item_Dec";
function Product({ name, description, price }) {
  return (
    <div className="product">
      <Item_Dec name={name} description={description} />
      <h2 className="product__error">An error occurred</h2>
    </div>
  );
}
export default Product;
