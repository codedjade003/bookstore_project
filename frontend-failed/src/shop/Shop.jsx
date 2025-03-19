import React, { useEffect, useState } from 'react'
import { Card } from "flowbite-react";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect( () => {
    fetch("https://humble-trout-jx944rvwrr7hq5x4-5000.app.github.dev/all-books").then(res => res.json()).then(data => setBooks(data));
  })
  return ( 
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>All Books are here</h2>
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          books.map(book => <Card
          >
            <img src={book.imageURL} alt="" className='h-96'/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>
                {book.bookTitle}
              </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quos dolore atque dignissimos laboriosam. Alias labore provident pariatur unde, eaque voluptates aliquam, laborum quos fuga, ipsa obcaecati. Unde, eveniet est!
              </p>
            </p>

            <button className='bg-red-700 font-semi-bold text-white py-2 rounded'>Shop Now</button>
          </Card>)
        }
      </div>
    </div>
  )
}

export default Shop