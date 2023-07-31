"use client";

import React from "react";

const ProductButton = ({ item }) => {
  return (
    <>
      <button
        onClick={() => alert(`Price is ${item.price}`)}
        className="btn btn-xs btn-info"
      >
        Check price
      </button>
    </>
  );
};

export default ProductButton;
