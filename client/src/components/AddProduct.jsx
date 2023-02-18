import React, {useState} from 'react';
import '../App.css'
import {SITES} from "../store";
import {useAtom} from "jotai";
import {getAllProducts, addProduct} from "../dbActions";

function AddProduct() {
    const [link, setLink] = useState("")
    const [priceSelector, setPriceSelector] = useState("")
    const [, setSites] = useAtom(SITES)

    function clearInputs() {
        setLink("");
        setPriceSelector("");
    }

    async function submit() {
        await addProduct(link, priceSelector);
        clearInputs();
        setSites(await getAllProducts())
    }


    return <>
        <main className="container" data-theme="light">
            <article>
                <div className="grid">
                    <label>
                        Product page link
                        <input type="text" id="link" name="link" required
                               placeholder="http://store.com/product"
                               onChange={(e) => setLink(e.target.value)}
                               value={link}
                        />
                    </label>

                    <label>
                        Product price selector
                        <input type="text" id="price" name="price" required
                               placeholder="right click price element > in inspect right click on element > copy selector"
                               onChange={(e) => setPriceSelector(e.target.value)}
                               value={priceSelector}
                        />
                    </label>

                    <label>
                        Add another
                        <button style={{"marginTop": "5px", "borderColor": "#F7AE1E", backgroundColor: "#F7AE1E"}}
                                role="submit"
                                onClick={submit}>Add</button>
                    </label>

                </div>

            </article>
        </main>
    </>;
}

export default AddProduct;