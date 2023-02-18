import React, {useState} from 'react';
import '../App.css'

const BASE_URL = import.meta.env.VITE_BASE_URL;

function AddProduct({getAllProducts}) {
    const [link, setLink] = useState("")
    const [priceSelector, setPriceSelector] = useState("")

    async function submit() {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify({
                link,
                priceSelector
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        // location.reload()
        getAllProducts()
        console.log(data);
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
                               placeholder="13.50"
                               onChange={(e) => setPriceSelector(e.target.value)}
                               value={priceSelector}
                        />
                    </label>

                    <label>
                        Add another
                        <button className="outline contrast"
                                style={{"marginTop": "5px", "borderColor": "#F7AE1E" }}
                                role="submit"
                                onClick={submit}>Add</button>
                    </label>

                </div>

            </article>
        </main>
    </>;
}

export default AddProduct;