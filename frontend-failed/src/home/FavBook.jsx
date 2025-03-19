import React from 'react'
import FavBookImg from "../assets/favoritebook.jpg"
import { Link } from 'react-router-dom'

const FavBook = () => {
  return (
    <div className='px-4 lg:px-4 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div>
            <img src={FavBookImg} alt="" className='rounded ms:w-10/12' />
        </div>

        <div className='md:1-1/2 space-y-6'>
            <h2 className='text-5xl font-black my-5 md:w-3/4 leading-snug'>Find Your Favorite <span
            className='text-red-700'>Book Here!</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate dolorum corrupti 
            incidunt sed delectus explicabo quasi deleniti iusto facere numquam dignissimos voluptatum 
            molestias, quibusdam, quo debitis ratione ut voluptatibus vitae!</p>
            {/* stats */}
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
            <div>
                <h3 className='text-5xl font-bold'>800+</h3>
                <p className='text-base'>Book Listing</p>
            </div>
            <div>
                <h3 className='text-5xl font-bold'>400+</h3>
                <p className='text-base'>Registered Readers</p>
            </div>
            <div>
                <h3 className='text-5xl font-bold'>1000+</h3>
                <p className='text-base'>Copies Sold</p>
            </div>
            </div>

            <Link to="/shop" mt-12 block><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>
        </div>
    </div>
  )
}

export default FavBook