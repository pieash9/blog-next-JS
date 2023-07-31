"use client";

import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(async () => {
    const res = await fetch(`https://dummyjson.com/products`);
    const data = await res.json();
    setProducts(data.products);
  }, []);
  return (
    <div className="text-center">
      <h3>Product List</h3>
      <div className="grid grid-cols-3">
        {products.map((item) => (
          <p key={item.id}>Name: {item.title}</p>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
