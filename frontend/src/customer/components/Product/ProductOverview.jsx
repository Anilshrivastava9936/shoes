import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../Context/CartProvider";

export default function ProductOverview() {
    const { _id } = useParams(); // Get product ID from URL
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null); // Track selected size
    const [quantity, setQuantity] = useState(1); // Track quantity
    const [mainImage, setMainImage] = useState(""); // Track main image for gallery

    useEffect(() => {
        // Fetch product by ID
        const fetchProduct = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/products/${_id}`);
                if (!res.ok) throw new Error("Failed to fetch product");
                const data = await res.json();
                setProduct(data);
                setMainImage(data.image); // Set the main image
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchProduct();
    }, [_id]);

    // Handle image change on clicking a small image
    const handleImageClick = (image) => {
        setMainImage(image);
    };

    // Handle add to cart with size and quantity
    const handleAddToCart = () => {
        if (!selectedSize) {
            alert("Please select a size.");
            return;
        }
        addToCart({
            ...product,
            selectedSize,
            quantity,
        });
    };

    // Check if the product is available, otherwise return loading
    if (!product) return <div>Loading...</div>;

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="flex flex-col md:flex-row">
                {/* Main product image */}
                <div className="w-full md:w-1/2">
                    <img
                        src={mainImage}
                        alt={product.name}
                        className="w-full object-cover rounded-lg"
                    />
                    <div className="mt-3 flex space-x-2">
                        {/* Additional images, if they exist */}
                        {product.images?.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`product-thumbnail-${index}`}
                                className="w-16 h-16 object-cover border cursor-pointer"
                                onClick={() => handleImageClick(image)}
                            />
                        ))}
                    </div>
                </div>

                {/* Product details */}
                <div className="p-4 w-full md:w-1/2">
                    <h1 className="text-2xl font-bold">{product.name}</h1>
                    <p className="text-gray-600">{product.description}</p>
                    <p className="text-xl font-semibold text-green-600">₹{product.price}</p>
                    <p className="text-sm text-gray-500 line-through">MRP: ₹{product.mrp}</p>

                    {/* Size selection, if sizes exist */}
                    <div className="mt-3">
                        <span className="font-semibold">Available Sizes:</span>
                        <div className="flex flex-wrap">
                            {product.sizes?.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-2 py-1 border m-1 ${selectedSize === size ? 'bg-indigo-600 text-white' : ''}`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity selection */}
                    <div className="mt-3">
                        <span className="font-semibold">Quantity:</span>
                        <input
                            type="number"
                            value={quantity}
                            min="1"
                            onChange={(e) => setQuantity(e.target.value)}
                            className="w-16 p-2 border rounded-md"
                        />
                    </div>

                    {/* Add to Cart and Buy Now buttons */}
                    <div className="mt-4 flex space-x-2">
                        <button
                            onClick={handleAddToCart}
                            className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
                        >
                            Add to Cart
                        </button>
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
                            Buy Now
                        </button>
                    </div>

                    {/* Reviews and Ratings */}
                    <div className="mt-6">
                        <h3 className="font-semibold text-xl">Reviews & Ratings</h3>
                        <div>
                            <span className="font-semibold">Average Rating: </span>
                            <span>{product.rating} ⭐</span>
                        </div>
                        <div>
                            <h4 className="font-semibold">Customer Reviews</h4>
                            {product.reviews?.length > 0 ? (
                                product.reviews.map((review, index) => (
                                    <div key={index} className="border-t py-2">
                                        <p className="font-semibold">{review.user}</p>
                                        <p>{review.comment}</p>
                                    </div>
                                ))
                            ) : (
                                <p>No reviews yet.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}







// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useCart } from "../../Context/CartProvider";

// export default function ProductOverview() {
//     const { _id } = useParams(); // Get product ID from URL
//     const { addToCart } = useCart();
//     const [product, setProduct] = useState(null);

//     console.log("_id", _id);  // Log the _id from URL

//     useEffect(() => {
//         // Fetch product by ID
//         const fetchProduct = async () => {
//             try {
//                 const res = await fetch(`http://localhost:5000/api/products/${_id}`);
//                 if (!res.ok) throw new Error("Failed to fetch product");
//                 const data = await res.json();
//                 setProduct(data);
//                 console.log("data", data)
//             } catch (error) {
//                 console.error(error.message);
//             }
//         };

//         fetchProduct();
//     }, [_id]);

//     if (!product) return <div>Loading...</div>;

//     return (
//         <div className="max-w-4xl mx-auto p-4">
//             <div className="flex flex-col md:flex-row">
//                 <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full md:w-1/2 object-cover rounded-lg"
//                 />
//                 <div className="p-4">
//                     <h1 className="text-2xl font-bold">{product.name}</h1>
//                     <p className="text-gray-600">{product.description}</p>
//                     <p className="text-xl font-semibold text-green-600">₹{product.price}</p>
//                     <p className="text-sm text-gray-500 line-through">MRP: ₹{product.mrp}</p>
//                     <div className="mt-3">
//                         <span className="font-semibold">Available Sizes:</span>
//                         {product.sizes.map((size) => (
//                             <button key={size} className="px-2 py-1 border m-1">
//                                 {size}
//                             </button>
//                         ))}
//                     </div>
//                     <div className="mt-4 flex space-x-2">
//                         <button
//                             onClick={() => addToCart(product)}
//                             className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
//                         >
//                             Add to Cart
//                         </button>
//                         <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
//                             Buy Now
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
