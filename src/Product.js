import React from "react";
import Item_Dec from "./Item_Dec";
function Product({ name, description, price }) {
  return (
    <>
      <Item_Dec name={name} description={description} />
    </>
  );
}
export default Product;
