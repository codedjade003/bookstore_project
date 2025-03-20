import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-20"> {/* Added mt-20 */}
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
        About Our Bookstore
      </h1>
      
      <p className="text-gray-700 text-lg text-center mb-6">
        Welcome to our online bookstore, your one-stop destination for discovering, buying, and exploring books across various genres. 
        Whether you're a book lover, a student, or just looking for your next great read, we've got something for you!
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-500">Browse & Buy</h2>
          <p className="text-gray-600">
            Explore our collection of books and find the ones that interest you. Add them to your cart and order with ease.
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-500">AI-Powered Assistance</h2>
          <p className="text-gray-600">
            Have questions? Use our AI-powered chatbot to get instant recommendations, book details, and assistance.
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-500">Easy Book Management</h2>
          <p className="text-gray-600">
            Keep track of your favorite books, manage your orders, and enjoy a seamless shopping experience.
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-500">Community & Reviews</h2>
          <p className="text-gray-600">
            Read reviews from other book lovers and share your thoughts on your favorite reads.
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-lg text-gray-700">
          Thank you for being part of our bookstore! We hope you find the perfect book and enjoy your experience.
        </p>
      </div>
    </div>
  );
};

export default About;
