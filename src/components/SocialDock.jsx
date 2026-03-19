import { motion } from "framer-motion";
import { socialLinks } from "../constants";

const SocialDock = () => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex items-center gap-4 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        {socialLinks.map((social, i) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ 
                scale: 1.4, 
                y: -10,
                color: social.color 
              }}
              className="text-secondary transition-colors duration-300 p-2"
              title={social.name}
            >
              <Icon size={24} strokeWidth={1.5} />
              
              {/* Optional: Tiny dot that appears on hover */}
              <motion.div 
                layoutId="dot"
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-current opacity-0 group-hover:opacity-100" 
              />
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SocialDock;