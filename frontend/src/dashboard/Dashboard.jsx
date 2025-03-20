import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const handleLogout = () => {
    logOut().then(() => {
      // Sign-out successful.
      alert('Signed Out Successfully!');
      navigate(from, { replace: true });
    }).catch((error) => {
      // An error happened.
    });
}
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Bookstore Admin Dashboard</h1>
      <p className="text-gray-700 mb-6">
        Here, you can manage the bookstore, add new books, update listings, and keep track of inventory.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Manage Books */}
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Manage Books</h2>
          <p className="text-gray-600">Edit or remove books from your collection.</p>
          <Link to="/admin/dashboard/manage" className="text-blue-600 underline mt-2 inline-block">Go to Manage Books</Link>
        </div>

        {/* Add New Book */}
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Add New Book</h2>
          <p className="text-gray-600">Easily add new books to your store.</p>
          <Link to="/admin/dashboard/upload" className="text-blue-600 underline mt-2 inline-block">Go to Add Book</Link>
        </div>

        {/* Sign Out */}
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Sign Out</h2>
          <p className="text-gray-600">Sign out from the admin panel securely.</p>
          <button onClick={handleLogout} className="text-red-600 underline mt-2">Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
