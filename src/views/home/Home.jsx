import React from 'react'
import Banner from '../../components/home/Banner'
import Advantage from '../../components/home/Advantages'
import Category from '../../components/home/Category'
import Products from '../../components/home/Products'
import WeekendOffers from '../../components/home/WeekendOffers'
import TopSelling from '../../components/home/TopSelling'
import Order_Banner from '../../components/home/Order_Banner'
import TopVendors from '../../components/home/TopVendors'
import SpecialOffer from '../../components/home/SpecialOffer'
import CustomerServices from '../../components/home/CustomerServices'
import WeeklyTopVenders from '../../components/home/WeeklyTopVenders'
import Footer from '../../components/Footer/Footer'
import Header from '../Nav/Header'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Advantage/>
      <Category/>
      <Products/>
      <WeekendOffers/>
      <TopSelling/>
      <Order_Banner/>
      <TopVendors/>
      <SpecialOffer/>
      <CustomerServices/>
      <WeeklyTopVenders/>

    </div>
  )
}

export default Home
