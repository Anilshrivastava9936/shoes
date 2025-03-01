import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/solid";


const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderDetails = location.state?.orderData || {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md text-center">
        <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto" />
        <h2 className="text-2xl font-bold text-gray-800 mt-4">Order Placed Successfully!</h2>
        <p className="text-gray-600 mt-2">Thank you for shopping with us.</p>
        
        {/* Order Summary */}
        <div className="mt-4 text-left">
          <h3 className="font-semibold text-lg">Order Details</h3>
          <p className="text-gray-700">Order ID: {orderDetails.orderId || "#123456"}</p>
          <p className="text-gray-700">Total Amount: ₹{orderDetails.totalAmount || "0.00"}</p>
          <p className="text-gray-700">Estimated Delivery: 3-5 Business Days</p>
        </div>
        
        <button 
          onClick={() => navigate("/")} 
          className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
