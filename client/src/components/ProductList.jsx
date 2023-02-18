import React, {useEffect} from 'react';
import AddProduct from "./AddProduct";
import Product from "./Product";
import {useAtom} from "jotai";
import {SITES} from "../store";

const ProductList = () => {
    const [sites] = useAtom(SITES)

    useEffect(() => {
    }, [sites])


    return <>
        <AddProduct/>
        {sites.map((site) =>
            <Product key={site._id}
                     id={site._id}
                     url={site.link}
                     selectorPrice={site.priceSelector}
            />)}
    </>;
};

export default ProductList;
