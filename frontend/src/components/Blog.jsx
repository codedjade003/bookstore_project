import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://humble-trout-jx944rvwrr7hq5x4-5000.app.github.dev/all-blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);


  return (
    <div className="p-6 mt-20"> {/* Added mt-20 */}
      <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
      {blogs.length === 0 ? (
        <p>No blogs available yet.</p>
      ) : (
        <div className="grid gap-6">
          {blogs.map((blog) => (
            <div key={blog._id} className="p-4 border rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p className="text-gray-600">
                {blog.content.length > 200
                  ? blog.content.substring(0, 200) + "..."
                  : blog.content}
              </p>
              <Link
                to={`/blog/${blog._id}`}
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );  
};


export default Blog;
