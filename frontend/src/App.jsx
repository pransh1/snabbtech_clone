import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Discover from './components/Discover'
import Review from './components/Review'
import Service from './components/Service'
import TennisPal from './components/Tennispal'
import { ChooseUs } from './components/ChooseUs'
import Partnership from './components/PartnerShip'
import Prediction from './components/Prediction'
import Unique from './components/Unique'
import BestSolutions from './components/BestSolutions'
import FeedBack from './components/FeedBack'
import Blog from './components/Blog'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Discover />
      <Review />
      <Service />
      <TennisPal />
      <ChooseUs />
      <Partnership />
      <Prediction />
      <Unique />
      <BestSolutions />
      <FeedBack />
      <Blog />
      <Footer />
    </>
  )
}

export default App