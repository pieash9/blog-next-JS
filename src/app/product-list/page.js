import React from 'react';
import ProductButton from './product';

const productList = async()=>{
    const res = await fetch(`https://dummyjson.com/products`)
    const data = await res.json()
    return data.products
}

const ProductList = async() => {
    const products = await productList()
    return (
        <div>
            Product list

            <div className="grid grid-cols-3 gap-5">
                {products.map(item=><div key={item.id}>
                    <p>Name: {item.title}</p>
                   <ProductButton item={item}/>
                </div>)}
            </div>
        </div>
    );
};

export default ProductList;