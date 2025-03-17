import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Web Developer Intern",
    company: "Bharat Intern",
    duration: "Oct-2024 - Nov-2024",
    description:
      "Developed a Calculator and Quiz application using HTML, CSS, and JavaScript for interactive user experience.",
  },
  
];

const Experience = () => {
  return (
    <section
      className="bg-gray-900 text-white py-10 px-4 flex flex-col items-center lg-h-screen min-h-screen"
      id="experience"
    >
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <FaBriefcase className="text-blue-500" size={24} />
        Experience
      </h2>

      {/* Experience Cards */}
      <div className="w-full max-w-2xl space-y-4 h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 px-2">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-800/60 backdrop-blur-md border border-gray-700 p-4 rounded-lg shadow-md transform hover:scale-[1.02] transition-transform duration-200"
          >
            {/* Role & Company */}
            <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
            <p className="text-gray-400 text-sm font-medium">{exp.company}</p>

            {/* Duration */}
            <p className="text-gray-500 text-xs mt-1">{exp.duration}</p>

            {/* Description */}
            <p className="text-gray-300 mt-2 text-xs leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
