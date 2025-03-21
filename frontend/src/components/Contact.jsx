import React from "react";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-6">Have any questions? Feel free to reach out to us.</p>
      
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Name" />
        </div>
        
        <div>
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Email" />
        </div>
        
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea className="w-full p-2 border border-gray-300 rounded" placeholder="Your Message" rows="4"></textarea>
        </div>
        
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
