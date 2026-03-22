"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { internship_summaries } from "@/app/data/internship_summaries";

type InternshipMedia =
    | { type: "icon"; name: string }
    | { type: "image"; src: string; alt: string };

type Internship = {
    title: string;
    timeline: string;
    organization: string;
    focus?: string;
    description: string;
    tags: string[];
    media: InternshipMedia;
    summarySlug: keyof typeof internship_summaries;
    codeUrl?: string;
    siteUrl?: string;
};

const internships: Internship[] = [
    {
        title: "Data Scientist Intern",
        timeline: "Jul-Nov 2025",
        organization: "TryPath",
        focus: "AI Development", // ← replaced “Capstone Project”
        description:
            "Designed and deployed a RAG-based AI career guidance system using OpenAI GPT, Supabase pgvector, and FastAPI. Built retrieval pipelines, ranking logic, and calendar‑aware scheduling workflows to deliver personalised role recommendations and timeline‑driven roadmaps.",
        tags: [
            "RAG",
            "FastAPI",
            "OpenAI",
            "Supabase",
            "pgvector",
            "Adzuna API",
            "Next.js",
        ],
        media: {
            type: "image",
            src: "/Path.png",
            alt: "TryPath internship deliverables",
        },
        summarySlug: "trypath",
        siteUrl: "https://trypath.co/",
    },

    {
        title: "Backend Developer Intern",
        timeline: "Jun-Nov 2022",
        organization: "Pratishtha",
        focus: "Festival Tech",
        description:
            "Developed a responsive website and mobile app for a college fest using Flutter and Firebase. Implemented backend logic, real‑time updates, and cross‑device compatibility to enhance event engagement and user experience.",
        tags: [
            "Flutter",
            "Firebase",
            "HTML",
            "CSS",
            "JavaScript",
            "PHP",
            "Bootstrap",
        ],
        media: {
            type: "image",
            src: "/Pratishtha.png",
            alt: "Pratishtha internship deliverables"
        },
        summarySlug: "pratishtha",
        siteUrl: "https://pratishtha.sakec.ac.in",
    },

    {
        title: "Flutter Developer Intern",
        timeline: "Nov 2021 - Apr 2022",
        organization: "HireBus",
        focus: "Product Launch",
        description:
            "Led UI/UX development and API integration for a mobile application built with Flutter and Firebase. Delivered smooth navigation, clean UI components, and scalable backend connectivity to support early‑stage product rollout.",
        tags: ["Flutter", "Firebase", "UI/UX", "GitHub"],
        media: {
            type: "image",
            src: "/HireBus.png",
            alt: "HireBus internship deliverables"
        },
        summarySlug: "hirebus",
        siteUrl: "https://www.hirebus.in",
    },
];



const Internships = () => {
    const [selectedSummary, setSelectedSummary] = useState<keyof typeof internship_summaries | null>(null);

    const currentSummary = selectedSummary ? internship_summaries[selectedSummary] : null;

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
        <section id="internships" className="py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <h2 className="text-3xl font-bold mb-4">Featured <span className="gradient-text">Internships</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Industry experiences where I owned high-impact deliverables across data, ML, and analytics teams.</p>
                    <div className="w-24 h-1 bg-linear-to-r from-primary to-secondary mx-auto mt-4"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {internships.map((internship) => (
                        <div key={internship.title} className="glass-card rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition duration-300 hover:shadow-2xl hover:shadow-primary/20 flex flex-col h-full">
                            <div
                                className={`relative h-60 flex items-center justify-center overflow-hidden ${internship.media.type === "icon"
                                    ? "bg-linear-to-r from-primary/20 to-secondary/20"
                                    : "bg-dark"
                                    }`}
                            >
                                {internship.media.type === "image" ? (
                                    <Image
                                        src={internship.media.src}
                                        alt={internship.media.alt}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"

                                    />
                                ) : (
                                    <i className={`mdi ${internship.media.name} text-7xl text-primary`}></i>
                                )}
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold">{internship.title}</h3>
                                    <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-300">
                                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10">
                                            <i className="mdi mdi-calendar-month text-primary-light"></i>
                                            {internship.timeline}
                                        </span>
                                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10">
                                            <i className="mdi mdi-office-building text-primary-light"></i>
                                            {internship.organization}
                                        </span>
                                        {internship.focus && (
                                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-secondary border border-primary/20">
                                                <i className="mdi mdi-star-four-points"></i>
                                                {internship.focus}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="flex-1 space-y-4">
                                    <p className="text-gray-400 text-sm text-justify">
                                        {internship.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {internship.tags.map((tag) => (
                                            <span key={tag} className="text-xs bg-dark-light px-2 py-1 rounded-full">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-6 gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setSelectedSummary(internship.summarySlug)}
                                        className="text-primary hover:text-primary-light text-sm flex items-center"
                                    >
                                        <i className="mdi mdi-file-document-outline mr-1"></i> View Summary
                                    </button>
                                    {internship.siteUrl && (
                                        <a href={internship.siteUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light text-sm flex items-center">
                                            <i className="mdi mdi-open-in-new mr-1"></i> Live Website
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
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

export default Internships;
