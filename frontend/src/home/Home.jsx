import React from 'react'
import Banner from '../components/Banner'
import BestSellerBooks from './BestSellerBooks'

const Home = () => {
  return ( 
    <div className='h-screen'>
      <Banner/>
      <BestSellerBooks/>
    </div>
  )
}

export default Home