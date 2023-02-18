import React from 'react';
import DeleteIcon from "./Delete";
import {SITES} from "../store";
import {useAtom} from "jotai";
import {deleteFromDb, getAllProducts} from "../dbActions";

const Product = ({id, url, selectorPrice}) => {

    const [, setSites] = useAtom(SITES)

    function ellipsify(str, end) {
        if (str.length > 10) {
            return (str.substring(0, end) + "...");
        } else {
            return str;
        }
    }

    async function handleDelete(id) {
        await deleteFromDb(id);
        setSites(await getAllProducts())
    }

    return (
        <>
            <main className="container">
                <article>
                    {ellipsify(url, 100)}
                    {/*{url}*/}
                    <hr/>
                    {ellipsify(selectorPrice, 40)}
                    {/*{selectorPrice}*/}
                    <hr/>
                    <div style={{display: "flex", justifyContent: "end"}}>
                        <a onClick={() => handleDelete(id)}><DeleteIcon style={{"color": "#ED571C", resizeBy: 20}}/></a>
                    </div>
                </article>
            </main>
        </>
    );
};

export default Product;