import React, {useEffect, useState} from 'react';
import AddProduct from "./AddProduct";
import Product from "./Product";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const ProductList = () => {
    const [sites, setSites] = useState([])

    async function getAllProducts() {
        const response = await fetch(BASE_URL + 'get');
        const data = await response.json();
        setSites(data)
        console.log(data)
    }

    useEffect(() => {
        getAllProducts()
    }, [])


    return <>
        {sites.map((site, i) => <Product key={i} url={site.url} selectorPrice={site.selectorPrice}/>)}
        <AddProduct getAllProducts={getAllProducts}/>
        <button role="button" onClick={getAllProducts}>Get all</button>
    </>;
};

export default ProductList;