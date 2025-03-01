import React, { useState, useEffect } from 'react';
import ProductTemplate from './ProductTemplate';

export default function Product() {
    const [products, setProducts] = useState([]); // State to store products
    const [error, setError] = useState(null); // State to handle errors

    // Fetch data from API when component mounts
    useEffect(() => {
        // Make the function inside useEffect async
        const fetchProducts = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/products", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!res.ok) {
                    throw new Error("Failed to fetch products");
                }

                const data = await res.json(); // Assuming the API returns JSON
                setProducts(data); // Update state with fetched products
            } catch (error) {
                setError(error.message); // Handle any errors
            }
        };

        fetchProducts(); // Call the async function

    }, []); // Empty dependency array ensures this runs only once after initial render

    // If there's an error, show a message
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="m-2">
            <h5 className="text-3xl ml-3">Men's T-shirts</h5>
            <div className="flex flex-row w-full overflow-auto border-2 ml-2">
                {products.length > 0 ? (
                    products.map((product) => (
                        <ProductTemplate key={product.id} product={product} />
                    ))
                ) : (
                    <div>Loading products...</div>
                )}
            </div>
        </div>
    );
}











