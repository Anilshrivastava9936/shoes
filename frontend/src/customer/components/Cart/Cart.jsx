import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Context/CartProvider";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalMRP = cart.reduce((acc, item) => acc + item.mrp * item.quantity, 0);
  const discount = totalMRP - subtotal;

  const handleCheckout = () => {
    navigate("/order", { state: { orderItems: cart } }); // Navigate to checkout page
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-4 border-b">
            <img
              src={item.selectedImage}
              alt={item.name}
              className="w-20 h-20 object-cover rounded"
            />
            <div className="flex-1 px-4">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-500">Size: {item.selectedSize}</p>
              <p className="text-gray-500 line-through">MRP: ₹{item.mrp}</p>
              <p className="text-green-600 font-bold">Price: ₹{item.price}</p>
              <p className="text-red-500">Discount: {Math.round(((item.mrp - item.price) / item.mrp) * 100)}%</p>
            </div>
            <div className="flex items-center">
              <button
                className="px-2 py-1 bg-gray-200 rounded"
                onClick={() => updateQuantity(item.id, -1)}
              >
                -
              </button>
              <span className="px-4">{item.quantity}</span>
              <button
                className="px-2 py-1 bg-gray-200 rounded"
                onClick={() => updateQuantity(item.id, 1)}
              >
                +
              </button>
            </div>
            <button
              className="px-3 py-1 bg-red-500 text-white rounded"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
{cart.length===0?<div>Your Cart Is Empty</div>:


  
      <div className="p-4 mt-4 bg-gray-100 rounded-lg">
        <p>Total MRP: ₹{totalMRP}</p>
        <p className="text-red-500">Discount: -₹{discount}</p>
        <p>Subtotal: ₹{subtotal}</p>
        <p className="font-bold text-xl mt-2">Final Amount: ₹{subtotal - discount}</p>
        <button
          onClick={handleCheckout}
          className="w-full mt-4 bg-blue-500 text-white py-2 rounded"
        >
          Proceed to Checkout
        </button>
      </div>
  }

    </div>
  );
};

export default Cart;
