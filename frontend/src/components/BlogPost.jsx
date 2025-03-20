import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`https://humble-trout-jx944rvwrr7hq5x4-5000.app.github.dev/blog/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((error) => console.error("Error fetching blog:", error));
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="p-6 mt-20">
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <div className="mt-4 text-gray-700">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>
    </div>
  );  
};

export default BlogPost;
