import Image from "next/image";
import { projects } from "@/app/data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Resume-aligned project portfolio across cloud engineering, NLP,
            network analytics, and deep learning research.
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-primary to-secondary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition duration-300 hover:shadow-2xl hover:shadow-primary/20 flex flex-col h-full"
            >
              <div className="relative h-52 flex items-center justify-center overflow-hidden bg-linear-to-r from-primary/20 to-secondary/20">
                {project.mediaImage ? (
                  <Image
                    src={project.mediaImage.src}
                    alt={project.mediaImage.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <i className={`mdi ${project.mediaIcon} text-7xl text-primary`}></i>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-300">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10">
                      <i className="mdi mdi-shape-outline text-primary-light"></i>
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10">
                      <i className="mdi mdi-school-outline text-primary-light"></i>
                      {project.organization}
                    </span>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <p className="text-gray-400 text-sm text-justify">{project.description}</p>

                  <ul className="list-disc ml-5 text-sm text-gray-300 space-y-1">
                    {project.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-dark-light px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap justify-between items-center border-t border-white/10 pt-4 mt-6 gap-3">
                  {project.codeUrl ? (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-light text-sm flex items-center"
                    >
                      <i className="mdi mdi-github mr-1"></i> View Code
                    </a>
                  ) : (
                    <span className="text-gray-500 text-sm flex items-center">
                      <i className="mdi mdi-github mr-1"></i> Private Repo
                    </span>
                  )}

                  {project.presentationUrl ? (
                    <a
                      href={project.presentationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-light text-sm flex items-center"
                    >
                      <i className="mdi mdi-presentation mr-1"></i> Presentation
                    </a>
                  ) : (
                    <span className="text-gray-500 text-sm flex items-center">
                      <i className="mdi mdi-file-document-outline mr-1"></i> Resume Project
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
