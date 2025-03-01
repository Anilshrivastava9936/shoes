import React from 'react'
import HomeCarousel from '../components/HomeCarousel/HomeCarousel'
import Navigation from '../components/Navigation/Navigation'
import Product from '../components/Product/Product'

export default function HomePages() {
  return (
    <div>
        {/* <Navigation ></Navigation> */}
        <HomeCarousel></HomeCarousel>
        <Product/>
        <Product/>
        </div>
  )
}
