import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../customer/Context/CartProvider";

const OrderPage = () => {
  const { cart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  // Get address from Delivery Page or set empty state
  const [address, setAddress] = useState(location.state?.selectedAddress || {});

  // Order items
  const orderItems = location.state?.orderItem
    ? [location.state.orderItem]
    : location.state?.orderItems || cart;

  const subtotal = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalMRP = orderItems.reduce((acc, item) => acc + item.mrp * item.quantity, 0);
  const discount = totalMRP - subtotal;
  const finalAmount = subtotal - discount;

  // const handleOrderSubmit = () => {
  //   if (!address.street || !address.city || !address.pincode || !address.mobile) {
  //     alert("Please select a delivery address.");
  //     return;
  //   }
  //   alert("✅ Order Placed Successfully!");
  // };

  const handleOrderSubmit = async () => {
    navigate('/orderconfirmation')
    if (!address.street || !address.city || !address.pincode || !address.mobile) {
      alert("Please select a delivery address.");
      return;
    }
  
    const orderData = {
      items: orderItems,
      address,
      totalAmount: finalAmount,
      userId: "user123", // Replace with actual user ID from context/auth
    };
  
  //   try {
  //     const response = await fetch("https://food-backend-l0nx.onrender.com/api/orders", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(orderData),
  //     });
  
  //     if (response.ok) {
  //       alert("✅ Order Placed Successfully!");
  //       navigate("/order-confirmation"); // Redirect to order confirmation page
  //     } else {
  //       throw new Error("Order placement failed!");
  //     }
  //   } catch (error) {
  //     console.error("Error placing order:", error);
  //     alert("❌ Failed to place order. Please try again.");
  //   }
  };
  

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-2xl font-bold text-center mb-4">Order Summary</h2>

      {/* Delivery Address */}
      <div className="mb-4 p-4 border rounded">
        <h3 className="font-semibold">Delivery Address</h3>
        {address.street ? (
          <p>
            {address.name}, {address.street}, {address.city} - {address.pincode}, 
            <br /> Mobile: {address.mobile}, Flat No: {address.flatNo}
          </p>
        ) : (
          <p className="text-gray-500">No address selected.</p>
        )}
        <button onClick={() => navigate("/checkoutDeliveryAddress")} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
          Choose / Add Address
        </button>
      </div>

      {/* Order Items */}
      {orderItems.map((item, index) => (
        <div key={index} className="flex items-center border-b py-2">
          <img src={item.selectedImage} alt={item.name} className="w-16 h-16 mr-4 rounded" />
          <div className="flex-1">
            <p className="font-semibold">{item.name}</p>
            <p className="text-gray-600">Price: ₹{item.price * item.quantity}</p>
          </div>
        </div>
      ))}

      {/* Place Order */}
      <button onClick={handleOrderSubmit} className="w-full mt-4 bg-indigo-600 text-white py-3 rounded-lg">
        Place Order
      </button>
    </div>
  );
};

export default OrderPage;
