import React from "react";
import { useLoaderData } from "react-router";

const SingleBook = () => {
  const { _id, bookTitle, imageURL, bookDescription, bookPDFURL, authorName } = useLoaderData();

  return (
    <div className="mt-28 px-4 lg:px-24 flex flex-col items-center">
      {/* Book Title */}
      <h2 className="text-4xl font-bold text-gray-900 mb-3 text-center">{bookTitle}</h2>

      {/* Author */}
      <p className="text-lg text-gray-600 mb-5">
        {authorName ? `by ${authorName}` : "Unknown Author"}
      </p>

      <div className="bg-white p-6 shadow-xl rounded-xl max-w-3xl w-full flex flex-col items-center border border-gray-200">
        {/* Book Cover */}
        <img
          src={imageURL}
          alt={bookTitle}
          className="h-96 w-auto object-cover rounded-lg shadow-md mb-6 border border-gray-300"
        />

        {/* Book Description */}
        <p className="text-gray-700 text-lg text-center mb-6 px-6 leading-relaxed">
          {bookDescription || "No description available."}
        </p>

        {/* Get This Book Button */}
        {bookPDFURL ? (
          <a
            href={bookPDFURL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-lg font-medium shadow-md"
          >
            📖 Get This Book
          </a>
        ) : (
          <p className="text-gray-500 text-sm mt-4">No external link available.</p>
        )}
      </div>
    </div>
  );
};

export default SingleBook;
