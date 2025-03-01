import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartProvider"; // Import useCart
// import { useParams } from "react-router-dom";

export default function ProductTemplate({ product }) {
    const { addToCart } = useCart(); // Get addToCart from context
    // const { id } = useParams();
    const [isItemAdded, setIsItemAdded] = useState(false);
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]); // Default size selection
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(product.image); // Store image

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleAddToCart = () => {
        addToCart({
            ...product,
            selectedSize,
            selectedImage, // Include image
            quantity
        });

        setIsItemAdded(true);
        setTimeout(() => setIsItemAdded(false), 3000); // Hide message after 3 seconds
    };

    console.log("product",product._id)

    return (
        <div className="flex-col p-1 md:flex-row justify-between items-start mx-2 py-2" style={{ width: "15vw" }}>
            <div className="flex bg-white rounded-lg shadow dark:bg-gray-800 flex-col md:flex-row">
                <div className="dark:bg-gray-800" style={{ borderRadius: "20px" }}>
                    <div className="md:w-60 flex justify-center items-center">
                       
                        <Link to={`/productOverview/${product._id}`}>
                            <img
                                src={selectedImage}
                                alt={product.name}
                                className="object-cover md:h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                            />
                        </Link>
                    </div>

                    <form className="flex-auto p-2">
                        <h1 className="text-xl font-semibold dark:text-gray-50">
                            {product.name}
                        </h1>

                        <div className="text-xl font-semibold text-gray-500 dark:text-gray-300">
                            <span>Price ₹{product.price}</span>
                            <span>MRP ₹{product.mrp}</span>
                            <div className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
                                {product.availability}
                            </div>
                        </div>

                        <div className="flex items-baseline mt-1 mb-1 text-gray-700 dark:text-gray-300">
                            <div className="flex space-x-2">
                                {product.sizes.map((size) => (
                                    <label key={size} className="text-center">
                                        <input
                                            type="radio"
                                            className="w-4 h-4 accent-violet-600"
                                            name="size"
                                            value={size}
                                            checked={selectedSize === size}
                                            onChange={handleSizeChange}
                                        />
                                        {size}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="flex mb-4 text-sm font-medium">
                            <button
                                type="button"
                                onClick={handleAddToCart}
                                className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white w-full transition ease-in duration-200 text-center text-base font-semibold rounded-lg"
                            >
                                Add To Cart
                            </button>
                        </div>

                        {isItemAdded && (
                            <div className="mt-2 text-green-600 font-semibold">
                                ✅ Item added to cart!
                            </div>
                        )}

                        <p className="text-sm text-gray-500 dark:text-gray-300">
                            Free shipping over ₹850 orders.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
