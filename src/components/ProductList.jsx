import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  const { productsData, setStateModal } = props;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {productsData.map((product) => (
        <ProductItem key={product.id} item={product} setStateModal={setStateModal} />
      ))}
    </div>
  );
};

export default ProductList;
