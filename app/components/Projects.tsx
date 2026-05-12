"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { projects } from "@/app/data/projects";
import { project_summaries } from "@/app/data/project_summaries";

const Projects = () => {
  const [selectedSummary, setSelectedSummary] = useState<keyof typeof project_summaries | null>(null);

  const currentSummary = selectedSummary ? project_summaries[selectedSummary] : null;

  useEffect(() => {
    if (!selectedSummary) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedSummary(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedSummary]);

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-dark-light px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap justify-between items-center border-t border-white/10 pt-4 mt-6 gap-3">
                  {project.summarySlug && project_summaries[project.summarySlug as keyof typeof project_summaries] && (
                    <button
                      type="button"
                      onClick={() => setSelectedSummary(project.summarySlug as keyof typeof project_summaries)}
                      className="text-primary hover:text-primary-light text-sm flex items-center"
                    >
                      <i className="mdi mdi-file-document-outline mr-1"></i> View Summary
                    </button>
                  )}

                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-light text-sm flex items-center"
                    >
                      <i className="mdi mdi-github mr-1"></i> View Code
                    </a>
                  )}

                  {project.presentationUrl && (
                    <a
                      href={project.presentationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-light text-sm flex items-center"
                    >
                      <i className="mdi mdi-presentation mr-1"></i> Presentation
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {currentSummary && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:px-4 bg-black/70"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedSummary(null)}
        >
          <div
            className="bg-dark rounded-t-2xl sm:rounded-2xl w-full max-w-3xl h-[88vh] sm:h-auto sm:max-h-[85vh] overflow-y-auto border border-white/10 p-4 sm:p-8 relative"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedSummary(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-300 hover:text-white"
              aria-label="Close summary"
            >
              <i className="mdi mdi-close text-xl sm:text-2xl"></i>
            </button>

            <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 pr-10">{currentSummary.title}</h3>

            <div className="space-y-5 sm:space-y-6 text-gray-300 text-sm sm:text-base">
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-2 text-white">About the Project</h4>
                <p>{currentSummary.about}</p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-2 text-white">Problem</h4>
                <p>{currentSummary.problem}</p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-2 text-white">My Contribution</h4>
                <ul className="list-disc ml-5 sm:ml-6 space-y-2">
                  {currentSummary.contribution.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-2 text-white">Tech Stack</h4>
                <p>{currentSummary.tech}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
