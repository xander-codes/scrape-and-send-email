import React from 'react';
import DeleteIcon from "./Delete";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Product = ({url, selectorPrice}) => {

    function ellipsify(str, end) {
        if (str.length > 10) {
            return (str.substring(0, end) + "...");
        } else {
            return str;
        }
    }

    async function handleDelete(url) {
        const response = await fetch(BASE_URL + "delete", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: url})
        })
        const data = await response.json();
        console.log(data)
        // location.reload()
    }

    return (
        <>
            <main className="container">
                <article>
                    {ellipsify(url, 100)}
                    <hr/>
                    {ellipsify(selectorPrice, 40)}
                    <hr/>
                    <div style={{ display: "flex", justifyContent: "end"}}>
                        <a onClick={()=>handleDelete(url)}><DeleteIcon style={{"color": "#ED571C", resizeBy: 20}}/></a>
                    </div>
                </article>
            </main>
        </>
    );
};

export default Product;