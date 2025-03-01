import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutDeliveryAddress = () => {
  const navigate = useNavigate();
  
  // Sample saved addresses (Replace this with API calls)
  const [savedAddresses, setSavedAddresses] = useState([
    { name: "John Doe", street: "123 Elm St", city: "New York", pincode: "10001", mobile: "1234567890", flatNo: "A1" },
    { name: "Jane Smith", street: "456 Oak Rd", city: "Los Angeles", pincode: "90001", mobile: "0987654321", flatNo: "B2" },
  ]);

  // State for the new address form
  const [newAddress, setNewAddress] = useState({
    name: "", street: "", city: "", pincode: "", mobile: "", flatNo: ""
  });

  // Handle new address form changes
  const handleChange = (e) => {
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
  };

  // Save new address and navigate to Order Page
  const handleSaveNewAddress = () => {
    if (!newAddress.name || !newAddress.street || !newAddress.city || !newAddress.pincode || !newAddress.mobile || !newAddress.flatNo) {
      alert("Please fill all fields!");
      return;
    }
    
    setSavedAddresses([...savedAddresses, newAddress]);
    navigate("/order", { state: { selectedAddress: newAddress } });
  };

  // Select an existing address and navigate to Order Page
  const handleSelectAddress = (address) => {
    navigate("/order", { state: { selectedAddress: address } });
  };

  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-2 gap-10">
        {/* Saved Addresses */}
        <div>
          <h2 className="text-2xl font-semibold mb-5">Saved Addresses</h2>
          <div className="space-y-5">
            {savedAddresses.map((address, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <p><strong>Name:</strong> {address.name}</p>
                <p><strong>Street:</strong> {address.street}</p>
                <p><strong>City:</strong> {address.city}</p>
                <p><strong>Pincode:</strong> {address.pincode}</p>
                <p><strong>Mobile:</strong> {address.mobile}</p>
                <p><strong>Flat No:</strong> {address.flatNo}</p>
                <button 
                  onClick={() => handleSelectAddress(address)}
                  className="bg-green-500 text-white px-4 py-2 rounded mt-2"
                >
                  Deliver Here
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* New Address Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-5">Add New Address</h2>
          <form>
            <div className="space-y-4">
              <input type="text" name="name" placeholder="Name" value={newAddress.name} onChange={handleChange} className="w-full p-2 border rounded" />
              <input type="text" name="street" placeholder="Street" value={newAddress.street} onChange={handleChange} className="w-full p-2 border rounded" />
              <input type="text" name="city" placeholder="City" value={newAddress.city} onChange={handleChange} className="w-full p-2 border rounded" />
              <input type="text" name="pincode" placeholder="Pincode" value={newAddress.pincode} onChange={handleChange} className="w-full p-2 border rounded" />
              <input type="text" name="mobile" placeholder="Mobile" value={newAddress.mobile} onChange={handleChange} className="w-full p-2 border rounded" />
              <input type="text" name="flatNo" placeholder="Flat No" value={newAddress.flatNo} onChange={handleChange} className="w-full p-2 border rounded" />
              <button type="button" onClick={handleSaveNewAddress} className="bg-blue-500 text-white px-4 py-2 rounded w-full">
                Save Address & Use
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDeliveryAddress;
