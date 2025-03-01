// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import ProductOverview from './customer/components/Product/ProductOverview'
// import Navigation from './customer/components/Navigation/Navigation'


import CustomerRoutes from './customer/Routes/CustomerRoutes';

// import Ferji from './customer/components/HomeCarousel/Ferji';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navigation/> */}
    <CustomerRoutes/>
    {/* <ProductOverview/> */}
    
    
    </>
  )
}

export default App
