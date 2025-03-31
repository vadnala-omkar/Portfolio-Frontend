// import { useState } from "react";
// import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// const projects = [
//   {
//     title: "Personal Portfolio",
//     description:
//       "A Personal Portfolio Website is a digital resume and showcase of your work, skills, and achievements.",
//     fullDescription:
//       "This web-based platform serves as a central hub where you can highlight your projects, experience, certifications, and contact details in an interactive and visually appealing manner. Whether you're a developer, designer, or creative professional, a personal portfolio enhances your online presence and helps you stand out.",
//     tech: "React, Node.js, MongoDB",
//     status: "Completed",
//     github: "#",
//     demo: "#",
//   },
//   {
//     title: "Photography Portfolio",
//     description:
//       "Capture moments, tell stories, and showcase your vision with a stunning Photography Portfolio.",
//     fullDescription:
//       "This project is a web-based platform designed for photographers to display their best work, organize albums, and share their artistic journey with the world. Whether you're a professional photographer or an aspiring artist, this portfolio provides a sleek and interactive way to exhibit your talent.",
//     tech: "React.js",
//     status: "In Progress",
//     github: "#",
//     demo: "#",
//   },
//   {
//     title: "Online Course Registration System",
//     description:
//       "A web-based system that allows students to browse, register, and manage their courses efficiently.",
//     fullDescription:
//       "This system provides an intuitive interface for students to explore available courses, check schedules, and enroll with ease. Features include role-based authentication, real-time seat availability, and a student dashboard.",
//     tech: "HTML, CSS, JavaScript",
//     status: "Completed",
//     github: "https://github.com/vadnala-omkar/Online-Course-Registration-System-2025",
//     demo: "https://ocrs-2025.vercel.app/",
//   },
//   {
//     title: "Weather App",
//     description:
//       "A weather app providing real-time updates, forecasts, and conditions using an API.",
//     fullDescription:
//       "A web-based application that fetches live weather data from an API and displays current conditions, forecasts, and temperature trends. It includes a location search feature and responsive UI.",
//     tech: "HTML, CSS, Javascript",
//     status: "Completed",
//     github: "https://github.com/vadnala-omkar/Weather-App",
//     demo: "https://weather-app-delta-ruby-98.vercel.app/",
//   },
//   {
//     title: "Duke's Table",
//     description:
//       "Duke's Table is a full-stack food ordering platform designed as a Zomato Frontend clone",
//     fullDescription:
//       "The platform features a robust frontend and backend, enabling vendors to log in, register their businesses, and manage their restaurant listings. Vendors can add, update, and delete products, including menu items with images, pricing, and descriptions. ",
//     tech: "React, Node.js, Express, MongoDB",
//     status: "Completed",
//     github: "https://github.com/vadnala-omkar/Duke-s-Table-Frontend",
//     demo: "https://duke-s-table-frontend.vercel.app/",
//   },
// ];

// const Projects = () => {
//   const [expanded, setExpanded] = useState({});

//   const toggleReadMore = (index) => {
//     setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
//   };

//   return (
//     <section className="bg-gray-900 text-white py-16 px-6 text-center lg-h-screen min-h-screen" id="projects">
//       <h2 className="text-4xl font-bold mb-10">Projects</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center px-4 md:px-12">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center text-center"
//           >
//             <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
//             <p className="text-gray-400 mb-2">
//               {expanded[index] ? project.fullDescription : project.description}
//             </p>
//             <button
//               onClick={() => toggleReadMore(index)}
//               className="text-blue-400 hover:underline mb-2"
//             >
//               {expanded[index] ? "Read Less" : "Read More"}
//             </button>
//             <p className="text-sm text-gray-500 mb-2">{project.tech}</p>
//             <p className="text-sm font-bold text-green-400 mb-4">Status: {project.status}</p>
//             <div className="flex justify-center gap-4 mt-auto">
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-300 hover:text-white transition"
//               >
//                 <FaGithub size={24} />
//               </a>
//               <a
//                 href={project.demo}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-300 hover:text-white transition"
//               >
//                 <FaExternalLinkAlt size={24} />
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;




import { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://portfolio-backend-wf8n.onrender.com/project/getProjects");
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  if (loading) return <p className="text-center text-white">Loading projects...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <section className="bg-gray-900 text-white py-16 px-6 text-center lg-h-screen min-h-screen" id="projects">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center px-4 md:px-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center text-center"
          >
            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-2">
              {expanded[index] ? project.fullDescription : project.description}
            </p>
            <button
              onClick={() => toggleReadMore(index)}
              className="text-blue-400 hover:underline mb-2"
            >
              {expanded[index] ? "Read Less" : "Read More"}
            </button>
            <p className="text-sm text-gray-500 mb-2">{project.tech}</p>
            <p className="text-sm font-bold text-green-400 mb-4">Status: {project.status}</p>
            <div className="flex justify-center gap-4 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <FaExternalLinkAlt size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
