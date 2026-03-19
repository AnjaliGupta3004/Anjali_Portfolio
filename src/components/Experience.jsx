import { motion } from "framer-motion";
import { experiences } from "../constants";

const Experience = () => (
  <section id="experience" className="py-20 px-6 max-w-7xl mx-auto">
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <p className="text-[#915eff] font-medium text-[18px]">My Professional Journey</p>
      <h2 className="text-white font-black md:text-[50px] text-[35px] mb-12">Work Experience.</h2>
    </motion.div>

    <div className="flex flex-col gap-16">
      {experiences.map((exp, index) => (
        <div key={index} className="relative pl-8 border-l-2 border-[#915eff]/30">
          <div className="absolute w-5 h-5 bg-[#915eff] rounded-full -left-[11px] top-0 shadow-[0_0_10px_#915eff]" />
          
          <h3 className="text-white text-[26px] font-bold">{exp.title}</h3>
          <p className="text-secondary font-semibold mb-6">{exp.company} | {exp.date}</p>

          {/* Render React Native Projects with Images */}
          {exp.details && (
            <div className="grid md:grid-cols-2 gap-8 mt-4">
              {exp.details.map((proj, pIdx) => (
                <div key={pIdx} className="bg-[#1d1836] p-6 rounded-2xl border border-white/5">
                  <h4 className="text-[#915eff] text-[18px] font-bold mb-2">{proj.name}</h4>
                  <p className="text-secondary text-[14px] mb-4">{proj.desc}</p>
                  <div className="flex gap-2">
                    {proj.images.map((img, iIdx) => (
                      <img key={iIdx} src={img} alt="app" className="w-1/2 rounded-lg border border-white/10" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Render Native Android Project (GSM) without Images */}
          {exp.projectTitle && (
            <div className="bg-[#1d1836] p-8 rounded-2xl border border-white/5 mt-4">
              <h4 className="text-[#915eff] text-[22px] font-bold mb-3">{exp.projectTitle}</h4>
              <p className="text-secondary text-[16px] leading-relaxed mb-6">{exp.projectDesc}</p>
              <div className="flex flex-wrap gap-3">
                {exp.features.map((feat, fIdx) => (
                  <span key={fIdx} className="bg-white/5 border border-white/10 px-4 py-1 rounded-full text-xs text-gray-300">
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Experience;