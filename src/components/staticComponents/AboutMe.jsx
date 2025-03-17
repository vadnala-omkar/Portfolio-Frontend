import { Code, ArrowDownCircle } from "lucide-react";

const AboutMe = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-6 flex flex-col md:flex-row items-center justify-center text-center md:text-left min-h-screen relative">
      {/* Developer Icon */}
      <div className="md:mr-8">
        <Code size={100} className="text-blue-500" />
      </div>

      {/* About Me Text */}
      <div className="max-w-3xl relative">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
          Hi, I'm <span className="text-blue-500 font-semibold">Vadnala Omkar</span>,  
          a passionate <span className="text-blue-500">MERN Full Stack Developer</span> eager to start my career in web development.  
          As a **fresher**, I'm actively searching for job opportunities where I can apply my skills  
          in <span className="text-blue-500">MongoDB, Express.js, React.js, and Node.js</span> to build scalable and efficient web applications.  
          I have experience working on **various web applications**, implementing authentication, API integrations, and responsive UI designs.  
          I'm excited to learn, collaborate, and contribute to dynamic teams working on innovative solutions.  
          If you're hiring, let's connect! 🚀  
        </p>

        {/* Scroll Icon (Moved Up) */}
        <div 
          className="mt-4 flex justify-center md:justify-center cursor-pointer animate-bounce"
          onClick={scrollToContact}
        >
          <ArrowDownCircle size={40} className="text-blue-500 hover:text-blue-400 transition" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
