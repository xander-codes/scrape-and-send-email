import React, {useState} from "react";


const App = () => {
    const [link, setLink] = useState("")
    const [priceSelector, setPriceSelector] = useState("")

    async function submit() {
        console.log(link, priceSelector)
        const response = await fetch(`http://localhost:5000/`, {
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
        console.log(data);
    }

    return <>
        <main className="container" data-theme="light">
            <article>
                <div className="grid">

                    <label>
                        Product page link
                        <input type="text" id="link" name="link" placeholder="Link" required
                               value={link}
                               onChange={(e) => setLink(e.target.value)}
                        />
                    </label>

                    <label>
                        Price selector
                        <input type="text" id="price" name="price" placeholder="Price" required
                               value={priceSelector}
                               onChange={(e) => setPriceSelector(e.target.value)}
                        />
                    </label>

                    <button onClick={submit}>Add</button>

                </div>

            </article>
        </main>
    </>;
}

export default App