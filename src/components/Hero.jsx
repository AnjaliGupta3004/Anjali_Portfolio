import { motion } from "framer-motion";
import { personalInfo } from "../constants";

const Hero = () => {
  const floatingTech = ["Kotlin", "Android", "React Native", "Java", "Firebase", "Tailwind"];

  return (
    <section id="about" className="relative w-full h-screen mx-auto flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      
      {/* 1. UNIQUE BACKGROUND: Floating Tech Stack */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {floatingTech.map((tech, i) => (
          <motion.span
            key={i}
            initial={{ x: Math.random() * 1000, y: Math.random() * 800 }}
            animate={{ 
              y: [0, -40, 0],
              x: [0, 20, 0],
              rotate: [0, 10, -10, 0] 
            }}
            transition={{ 
              duration: 5 + i, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute text-white font-black text-4xl md:text-6xl select-none"
            style={{ 
              left: `${1 + i * 15}%`, 
              top: `${20 + i * 10}%` 
            }}
          >
            {tech}
          </motion.span>
        ))}
      </div>

      {/* 2. UNIQUE GLOW: Purple Aura behind the text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#915eff] opacity-20 blur-[120px] rounded-full z-0" />

      {/* 3. MAIN CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center z-10"
      >
        {/* ADDED: Freelance Availability Badge */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-0 flex items-center gap-2 px-4 py-2 bg-[#915eff]/10 border border-[#915eff]/30 rounded-full backdrop-blur-md"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <p className="text-[#dfd9ff] text-xs md:text-sm font-medium tracking-wider uppercase">
            Available for Freelance: Apps & Websites
          </p>
        </motion.div>

        <h1 className="text-white font-black lg:text-[80px] sm:text-[60px] text-[45px] leading-tight">
          Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
        </h1>
        
        <p className="text-[#dfd9ff] font-bold lg:text-[26px] text-[18px] mt-4 tracking-wide">
          {personalInfo.year} Student @ {personalInfo.college}
        </p>

        <p className="text-secondary mt-8 max-w-3xl text-[16px] md:text-[19px] leading-relaxed text-center mx-auto px-4">
          {personalInfo.summary}
        </p>

        {/* 4. CALL TO ACTION BUTTON */}
        <motion.div 
          className="mt-14"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a 
            href="#experience" 
            className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 bg-[#915eff] rounded-2xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50"
          >
            <span className="relative">Explore My Experience</span>
            {/* Subtle arrow that appears on hover */}
            <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
          </a>
        </motion.div>
      </motion.div>
   
    </section>
  );
};

export default Hero;