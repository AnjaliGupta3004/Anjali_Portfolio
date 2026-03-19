import { personalProjects } from "../constants";

const Projects = () => (
  <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
    <h2 className="text-white font-black md:text-[50px] text-[35px] mb-10 text-center">Featured Website.</h2>
    {personalProjects.map((project, i) => (
      <div key={i} className="bg-tertiary flex flex-col lg:flex-row gap-10 p-8 rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-[#915eff] mb-4">{project.name}</h3>
          <p className="text-secondary text-lg mb-6 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="bg-white/5 px-3 py-1 rounded-md text-xs text-blue-300">#{tag}</span>
            ))}
          </div>
          <a href={project.link} target="_blank" className="w-fit border border-[#915eff] text-white px-6 py-2 rounded-xl font-bold hover:bg-[#915eff] transition-all">
            View Live Repository
          </a>
        </div>
        <div className="flex-1">
          <img src={project.image} alt="War Tracker" className="w-full h-auto rounded-xl shadow-2xl border border-white/10" />
        </div>
      </div>
    ))}
  </section>
);

export default Projects;