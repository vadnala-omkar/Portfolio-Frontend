import { useState } from "react";
import { FaProjectDiagram, FaBriefcase, FaCertificate, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";

const sections = [
  { name: "Projects", icon: <FaProjectDiagram />, key: "projects" },
  { name: "Experience", icon: <FaBriefcase />, key: "experience" },
  { name: "Certifications", icon: <FaCertificate />, key: "certifications" },
];

const MySpacePage = () => {
  const [activeSection, setActiveSection] = useState("projects");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hardcoded password (you can move this to backend later)
  const correctPassword = "1234";

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password. Try again!");
    }
  };

  const goToHome = () => {
    window.location.href = "/"; // Redirect to home page
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Password Verification */}
      {!isAuthenticated ? (
        <div className="m-auto bg-gray-800 p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Enter Password to Access</h2>
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full p-2 rounded bg-gray-700 text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="w-full p-2 bg-blue-500 rounded hover:bg-blue-400">
              Unlock
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
        </div>
      ) : (
        // Main MySpace Page
        <div className="flex h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-gray-800 p-6 flex flex-col space-y-6">
            {/* Home Button */}
            <button 
              className="flex items-center space-x-3 p-3 w-full rounded-lg bg-blue-500 hover:bg-blue-400 transition text-white font-bold"
              onClick={goToHome}
            >
              <FaHome size={20} />
              <span>Home</span>
            </button>

            <h2 className="text-2xl font-bold">MySpace</h2>
            <nav className="space-y-4">
              {sections.map((section) => (
                <button
                  key={section.key}
                  className={`flex items-center space-x-3 p-3 w-full rounded-lg transition ${
                    activeSection === section.key ? "bg-gray-700" : "hover:bg-gray-700"
                  }`}
                  onClick={() => setActiveSection(section.key)}
                >
                  {section.icon}
                  <span>{section.name}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-6">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">{activeSection}</h2>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                {activeSection === "projects" && (
                  <form className="space-y-4">
                    <input type="text" placeholder="Title" className="w-full p-2 rounded bg-gray-700 text-white" />
                    <textarea placeholder="Description" className="w-full p-2 rounded bg-gray-700 text-white"></textarea>
                    <input type="text" placeholder="Tech Stack" className="w-full p-2 rounded bg-gray-700 text-white" />
                    <input type="text" placeholder="Status" className="w-full p-2 rounded bg-gray-700 text-white" />
                    <input type="url" placeholder="GitHub Link" className="w-full p-2 rounded bg-gray-700 text-white" />
                    <input type="url" placeholder="Live Demo" className="w-full p-2 rounded bg-gray-700 text-white" />
                    <button className="w-full p-2 bg-blue-500 rounded hover:bg-blue-400">Submit</button>
                  </form>
                )}

                {activeSection === "experience" && (
                  <form className="space-y-4">
                    <input type="text" placeholder="Role" className="w-full p-2 rounded bg-gray-700 text-white" />
                    <input type="text" placeholder="Company Name" className="w-full p-2 rounded bg-gray-700 text-white" />
                    <input type="text" placeholder="Duration" className="w-full p-2 rounded bg-gray-700 text-white" />
                    <textarea placeholder="Description" className="w-full p-2 rounded bg-gray-700 text-white"></textarea>
                    <button className="w-full p-2 bg-blue-500 rounded hover:bg-blue-400">Submit</button>
                  </form>
                )}

                {activeSection === "certifications" && (
                  <form className="space-y-4">
                    <input type="text" placeholder="Title" className="w-full p-2 rounded bg-gray-700 text-white" />
                    <input type="text" placeholder="Issuer" className="w-full p-2 rounded bg-gray-700 text-white" />
                    <input type="date" placeholder="Date" className="w-full p-2 rounded bg-gray-700 text-white" />
                    <input type="url" placeholder="Credential Link" className="w-full p-2 rounded bg-gray-700 text-white" />
                    <input type="file" className="w-full p-2 rounded bg-gray-700 text-white" />
                    <button className="w-full p-2 bg-blue-500 rounded hover:bg-blue-400">Submit</button>
                  </form>
                )}
              </div>
            </motion.div>
          </main>
        </div>
      )}
    </div>
  );
};

export default MySpacePage;
