// import { FaCertificate } from "react-icons/fa";
// import { motion } from "framer-motion";

// const certifications = [
//   {
//     title: "Full Stack Development - MERN Stack",
//     issuer: "Nxt Wave",
//     date: "March 2025",
//     credential: "https://www.nxtwave.com/sample-credential",
//   },
//   {
//     title: "JavaScript Algorithms and Data Structures",
//     issuer: "freeCodeCamp",
//     date: "January 2025",
//     credential: "https://www.freecodecamp.org/certification/sample-credential",
//   },
//   {
//     title: "React.js Advanced Concepts",
//     issuer: "Udemy",
//     date: "February 2025",
//     credential: "https://www.udemy.com/certificate/sample-credential",
//   },
//   {
//     title: "Node.js and Express.js Mastery",
//     issuer: "Coursera",
//     date: "April 2025",
//     credential: "https://www.coursera.org/certificates/sample-credential",
//   },
// ];

// const Certifications = () => {
//   return (
//     <section className="bg-gray-900 text-white py-16 px-6 text-center flex flex-col items-center h-[800px]" id="certifications">
//       <h2 className="text-4xl font-bold mb-10 flex items-center gap-2">
//         <FaCertificate className="text-orange-500" /> Certifications
//       </h2>
//       <div className="w-full max-w-2xl overflow-y-auto scrollbar-hide max-h-[600px] md:max-h-[700px]">
//         {certifications.map((cert, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//             className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 hover:scale-105 transition-transform"
//           >
//             <h3 className="text-2xl font-semibold">{cert.title}</h3>
//             <p className="text-gray-400">{cert.issuer}</p>
//             <p className="text-gray-500 text-sm">{cert.date}</p>
//             <a href={cert.credential} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition text-sm">
//               View Credential
//             </a>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Certifications;
import { FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Python Programming",
    issuer: "Nxt Wave",
    date: "March 2023",
    credential: "https://certificates.ccbp.in/intensive/programming-foundations?id=BEUHCHQNYE",
    image: "PROGRAMMING FOUNDATIONS WITH PYTHON BEUHCHQNYE_page-0001.jpg" // Replace with actual image URL
  },
  {
    title: "GIT Developer Foundations",
    issuer: "Nxt Wave",
    date: "July 2023",
    credential: "https://certificates.ccbp.in/intensive/developer-foundations?id=WQSXBAQDFN",
    image: "GitHub.jpg"
  },
  {
    title: "Web Developer",
    issuer: "Bharat Intern",
    date: "October 2023",
    credential: "",
    image: "Bharath InternShip.jpg"
  },
  {
    title: "National 2nd Level Hackathon 2024",
    issuer: "Conducted by Guru Nanak Institutions",
    date: "September 2024",
    credential: "",
    image: ""
  }
];

const Certifications = () => {
  return (
    <section 
      className="bg-gray-900 text-white py-16 px-6 text-center flex flex-col items-center lg-h-screen min-h-screen"
      id="certifications"
    >
      <h2 className="text-4xl font-bold mb-10 flex items-center gap-2">
        <FaCertificate className="text-orange-500" /> Certifications
      </h2>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform border border-gray-700"
          >
            <img src={cert.image} alt={cert.title} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">{cert.title}</h3>
            <p className="text-gray-400">{cert.issuer}</p>
            <p className="text-gray-500 text-sm">{cert.date}</p>
            <a
              href={cert.credential}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition text-sm block mt-2"
            >
              View Credential
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
