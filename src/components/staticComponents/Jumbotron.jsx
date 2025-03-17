import { useState } from "react";

const Jumbotron = () => {
  const [bubbles, setBubbles] = useState([]);

  const handleClick = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const newBubble = {
      id: Date.now(),
      x,
      y,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`,
    };
    setBubbles([...bubbles, newBubble]);
    
    setTimeout(() => {
      setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
    }, 1000);
  };

  return (
    <section 
      className="relative bg-gray-900 text-white h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      onClick={handleClick}
    >
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute w-20 h-20 rounded-full blur-3xl opacity-50 animate-bubble"
          style={{
            backgroundColor: bubble.color,
            left: bubble.x - 40,
            top: bubble.y - 40,
          }}
        ></div>
      ))}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Developer Space</h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
        Passionate about building scalable web applications and exploring new technologies.
      </p>
      <div className="mt-6">
        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-lg"
        >
          View My Work
        </a>
      </div>
      <style jsx>{`
        @keyframes bubble {
          0% {
            transform: scale(0.5) translate(-50%, -50%);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.5) translate(-50%, -50%);
            opacity: 0;
          }
        }
        .animate-bubble {
          animation: bubble 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Jumbotron;
