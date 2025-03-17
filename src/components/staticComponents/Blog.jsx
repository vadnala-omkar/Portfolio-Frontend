import { FaExternalLinkAlt } from "react-icons/fa";

const blogs = [
  {
    title: "Understanding the MERN Stack",
    description: "A deep dive into MongoDB, Express, React, and Node.js and how they work together.",
    date: "March 11, 2025",
    link: "#"
  },
  {
    title: "Optimizing React Performance",
    description: "Tips and tricks to make your React applications run faster and more efficiently.",
    date: "February 25, 2025",
    link: "#"
  },
  {
    title: "Building REST APIs with Node.js and Express",
    description: "A step-by-step guide to creating powerful and scalable RESTful APIs.",
    date: "January 15, 2025",
    link: "#"
  }
];

const Blog = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 text-center min-h-screen" id="blog">
      <h2 className="text-4xl font-bold mb-10">Blog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-12">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform flex flex-col">
            <h3 className="text-2xl font-semibold mb-3">{blog.title}</h3>
            <p className="text-gray-400 mb-2">{blog.description}</p>
            <p className="text-sm text-gray-500 mb-4">Published on: {blog.date}</p>
            <div className="mt-auto">
              <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition flex items-center justify-center">
                Read More <FaExternalLinkAlt className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
