import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("https://humble-trout-jx944rvwrr7hq5x4-5000.app.github.dev/all-books")
      .then(res => res.json())
      .then(data => setAllBooks(data));
  }, []);

  // delete a book
  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://humble-trout-jx944rvwrr7hq5x4-5000.app.github.dev/book/${id}`, {
      method: "DELETE",
    }).then(res => res.json()).then(data => {
      alert("Book is deleted successfully!")
//      setAllBooks(data)
    })
  }

  return (
    <div className="px-4 my-8">
      <h2 className="mb-6 text-xl sm:text-2xl font-bold text-gray-800">Manage Your Books</h2>

      {allBooks.length === 0 ? (
        <p className="text-red-500 font-medium text-sm">No books available</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Table Head */}
            <thead className="bg-gray-100 text-gray-700 text-sm sm:text-base">
              <tr>
                <th className="p-3 text-left">No.</th>
                <th className="p-3 text-left">Book Name</th>
                <th className="p-3 text-left">Author Name</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Edit</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="text-gray-800 text-xs sm:text-sm">
              {allBooks.map((book, index) => (
                <tr key={book._id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{book.bookTitle}</td>
                  <td className="p-3">{book.authorName}</td>
                  <td className="p-3">{book.category}</td>
                  <td className="p-3">$2999</td>
                  <td className="p-3">
                    <Link 
                      className="text-cyan-600 hover:text-cyan-800 transition mr-5"
                      to={`/admin/dashboard/edit-book/${book._id}`}
                    >
                      Edit
                    </Link>
                    <button onClick={() => handleDelete(book._id)}className='bg-blue-600 px-4 py-1 font-semi-bold text-white rounded-sm 
                    hover:bg-red-600'>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageBooks;
