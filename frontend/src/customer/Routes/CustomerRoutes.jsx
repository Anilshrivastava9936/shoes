import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SighUp from '../Auth/SighUp'
import LoginForm from '../Auth/LoginForm'
import CheckoutDeliveryAddress from '../components/Checkout/CheckoutDeliveryAddress';
import Cart from '../components/Cart/Cart';
// import HomeCarousel from '../components/HomeCarousel/HomeCarousel';
import ProductOverview from '../components/Product/ProductOverview';
import Product from '../components/Product/Product';
import Navigation from '../components/Navigation/Navigation';
import HomePages from '../Pages/HomePages';
import Order from '../Orders/Order';
import OrderConfirmation from '../Orders/OrderConfirmation';
import ProtectedRoute from '../Auth/ProtectedRoute'
import Profile from '../components/Profile/Profile'

export default function CustomerRoutes() {
  return (
    <div>
         <Router>
   <Navigation />
   <Routes>
      <Route path="/sighup" element={<SighUp />} />
      <Route path="/login" element={<LoginForm />} />
      <Route element={<ProtectedRoute />}/> 
      <Route path="/checkoutDeliveryAddress" element={<CheckoutDeliveryAddress />} />
      <Route path="/cart" element={<Cart />} />
      
      <Route path="/productOverview/:_id" element={<ProductOverview />} />

      <Route path="/product" element={<Product />} />
      <Route path="/" element={<HomePages />} />
      <Route path="/orderconfirmation" element={<OrderConfirmation />} />
      <Route path="/order" element={<Order/>} />
      <Route path="/profile/:_id" element={<Profile/>} />

   </Routes>
</Router>
    </div>
  )
}













