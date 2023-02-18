const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function deleteFromDb(id) {
    await fetch(BASE_URL + "products/" + id, {
        method: "DELETE"
    })
}

export async function addProduct(link, priceSelector) {
    await fetch(BASE_URL + 'products', {
        method: 'POST',
        body: JSON.stringify({
            link,
            priceSelector
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function getAllProducts() {
    const response = await fetch(BASE_URL + 'products');
    return await response.json()
}