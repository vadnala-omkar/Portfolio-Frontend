import { useState } from "react";
import { Menu, X, Code } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // ✅ Correctly use useNavigate

  return (
    <nav className="bg-gray-900 text-gray-200 p-4 shadow-lg h-[10vh] flex items-center transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center md:justify-center w-full">
        
        {/* Logo / Name */}
        <div className="flex items-center space-x-2 md:absolute md:left-1/2 md:-translate-x-1/2">
          <Code size={28} className="text-blue-400" />
          <h1 className="text-xl font-bold tracking-wide">OMKAR VADNALA</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:absolute md:right-4">
          <button
            onClick={() => {
              setIsOpen(false); // Close mobile menu (if open)
              navigate("/MySpace"); // Navigate directly
            }}
            className="hover:text-blue-400 transition duration-200"
          >
            MySpace
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="focus:outline-none text-gray-300 hover:text-blue-400 transition duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[10vh] left-0 w-full bg-gray-800 text-gray-200 shadow-md transition-all">
          <button
            onClick={() => {
              setIsOpen(false); // Close menu before navigating
              navigate("/MySpace"); // Direct navigation
            }}
            className="block w-full py-3 hover:bg-gray-700 hover:text-blue-400 transition duration-200"
          >
            MySpace
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
