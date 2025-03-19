import React from 'react'
import { Link } from 'react-router'
import bookPic from '../assets/awardbooks.png'

const PromoBanner = () => {
  return (
    <div className='mt-16 py-1 bg-yellow-100 px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <h2 className='text-4xl font-bold mb-6 leading-snug'>Award winning Books for Fiction 
            Shortlist</h2>
            <Link to="shop" className='mt-1 block'><button className='bg-red-700 text-white 
            font-semibold px-5 py-2 rounded hover:bg-black trannsition-all duration-300'> Get Promo Code</
            button></Link>
        </div>

        <div>
            <img src={bookPic} alt="" className='w-96'/>
        </div>
        </div>
    </div>
  )
}

export default PromoBanner