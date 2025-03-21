import React, { useEffect, useState } from 'react';
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    fetch("https://humble-trout-jx944rvwrr7hq5x4-5000.app.github.dev/all-books")
      .then(res => res.json())
      .then(data => {
        const shuffledBooks = [...data].sort(() => Math.random() - 0.5); // Shuffle books randomly
        setBooks(shuffledBooks);
        setFilteredBooks(shuffledBooks);
      });
  }, []);

  // Handle search input
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === "") {
      setFilteredBooks(books);
      return;
    }

    const results = books.filter(book =>
      book.bookTitle.toLowerCase().includes(query) ||
      book.authorName?.toLowerCase().includes(query)
    );

    setFilteredBooks(results);
  };

  return ( 
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>All Books are here</h2>

      {/* Search Input */}
      <div className="my-6 flex justify-center">
        <input 
          type="text" 
          placeholder="Search for books..." 
          value={searchQuery}
          onChange={handleSearch}
          className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Book Grid */}
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <Card key={book._id} className="relative p-4">
              {/* Click anywhere except 'Shop Now' to go to book details */}
              <Link to={`/book/${book._id}`} className="absolute inset-0 z-0"></Link>  

              {/* Image - Ensures no cropping */}
              <img src={book.imageURL} alt={book.bookTitle} className='w-full h-auto object-contain relative z-10' />

              {/* Book Title */}
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white relative z-10 mt-4">
                {book.bookTitle}
              </h5>

              {/* Author */}
              <p className="font-semibold text-gray-700 dark:text-gray-300 relative z-10">
                {book.authorName || "Unknown Author"}
              </p>

              {/* Truncated Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 relative z-10">
                {book.bookDescription
                  ? book.bookDescription.length > 100
                    ? book.bookDescription.substring(0, 100) + "..."
                    : book.bookDescription
                  : "No description available."}
              </p>

              {/* Shop Now Button */}
              <button 
                onClick={(e) => { 
                  e.stopPropagation(); // Prevents triggering book details navigation
                  window.location.href = book.bookPDFURL; 
                }} 
                className='bg-red-700 font-semibold text-white py-2 rounded mt-3 relative z-10'
              >
                Shop Now
              </button>
            </Card>
          ))
        ) : (
          // No results found message
          <div className="text-center col-span-full">
            <p className="text-2xl font-semibold text-gray-600">
              No results found for "{searchQuery}"
            </p>
            <p className="text-lg text-gray-500">
              Try searching the Open Library from the <Link to="/" className="text-blue-600 underline">Home Page</Link>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Shop;
