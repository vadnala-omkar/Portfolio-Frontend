import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-16 px-6 text-center overflow-hidden h-screen">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
        className="text-4xl font-bold mb-10"
      >
        Contact Me
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"
      >
        <p className="text-gray-400 mb-6">Feel free to reach out to me through any of the platforms below.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.a 
            whileHover={{ scale: 1.1 }} 
            transition={{ type: "spring", stiffness: 200 }}
            href="mailto:omkarrajak83@gmail.com" 
            className="flex items-center gap-4 bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition"
          >
            <FaEnvelope size={24} className="text-red-400" />
            <span>Email</span>
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.1 }} 
            transition={{ type: "spring", stiffness: 200 }}
            href="tel:+919347640227" 
            className="flex items-center gap-4 bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition"
          >
            <FaPhone size={24} className="text-green-400" />
            <span>phone</span>
          </motion.a>
          
          <motion.div 
            whileHover={{ scale: 1.1 }} 
            transition={{ type: "spring", stiffness: 200 }}
            className="flex items-center gap-4 bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition"
          >
            <FaMapMarkerAlt size={24} className="text-blue-400" />
            <span>Hyderabad</span>
          </motion.div>
          
          <motion.a 
            whileHover={{ scale: 1.1 }} 
            transition={{ type: "spring", stiffness: 200 }}
            href="https://wa.me/9347640227" 
            className="flex items-center gap-4 bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition"
          >
            <FaWhatsapp size={24} className="text-green-500" />
            <span>WhatsApp Me</span>
          </motion.a>
        </div>

        <div className="flex justify-center gap-6 mt-6">
          <motion.a 
            whileHover={{ scale: 1.2 }} 
            transition={{ type: "spring", stiffness: 200 }}
            href="https://www.linkedin.com/in/vadnala-omkar" 
            className="text-gray-300 hover:text-blue-500 transition"
          >
            <FaLinkedin size={30} />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.2 }} 
            transition={{ type: "spring", stiffness: 200 }}
            href="https://github.com/vadnala-omkar" 
            className="text-gray-300 hover:text-white transition"
          >
            <FaGithub size={30} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
