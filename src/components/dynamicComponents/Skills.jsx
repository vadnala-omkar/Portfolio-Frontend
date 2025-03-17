import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiDocker, SiPostman, SiMysql } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skills = [
  { name: "React.js", icon: <FaReact size={50} className="text-blue-400 group-hover:brightness-150 transition" /> },
  { name: "Node.js", icon: <FaNodeJs size={50} className="text-green-500 group-hover:brightness-150 transition" /> },
  { name: "Express.js", icon: <SiExpress size={50} className="text-gray-400 group-hover:brightness-150 transition" /> },
  { name: "MongoDB", icon: <SiMongodb size={50} className="text-green-400 group-hover:brightness-150 transition" /> },
  { name: "MySQL", icon: <SiMysql size={50} className="text-blue-600 group-hover:brightness-150 transition" /> },
  { name: "JavaScript", icon: <FaJs size={50} className="text-yellow-400 group-hover:brightness-150 transition" /> },
  { name: "HTML5", icon: <FaHtml5 size={50} className="text-orange-500 group-hover:brightness-150 transition" /> },
  { name: "CSS3", icon: <FaCss3Alt size={50} className="text-blue-500 group-hover:brightness-150 transition" /> },
  { name: "REST API", icon: <TbApi size={50} className="text-yellow-500 group-hover:brightness-150 transition" /> },
  { name: "Docker", icon: <SiDocker size={50} className="text-blue-300 group-hover:brightness-150 transition" /> },
  { name: "Postman", icon: <SiPostman size={50} className="text-orange-400 group-hover:brightness-150 transition" /> },
  { name: "Git", icon: <FaGitAlt size={50} className="text-red-400 group-hover:brightness-150 transition" /> },
];

const Skills = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 text-center lg-h-screen min-h-screen" >
      <h2 className="text-4xl font-bold mb-10">Skills & Technologies</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center">
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center hover:scale-105 transition-transform group"
          >
            {skill.icon}
            <p className="mt-4 text-lg font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
