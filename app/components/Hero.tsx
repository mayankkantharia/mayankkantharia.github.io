'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const taglines = [
  "Building intelligent systems with machine learning, NLP, and cloud engineering.",
  "Transforming data into scalable, real-world ML solutions.",
  "Designing end-to-end machine learning pipelines that deliver impact.",
  "Where data science meets engineering — from analytics to deployment.",
  "Turning complex datasets into production-ready intelligence.",
  "Crafting ML-powered applications that solve real problems.",
  "Bridging data, machine learning, and cloud systems to build smarter solutions.",
  "Engineering data-driven systems with precision, scalability, and impact.",
  "From raw data to deployed intelligence — built with ML and cloud technologies.",
  "Delivering insights and automation through modern machine learning.",
  "Building robust ML services that scale from prototype to production.",
  "Applying machine learning and NLP to create meaningful, real-world outcomes."
];
const Hero = () => {
    const [currentTagline, setCurrentTagline] = useState(taglines[0]);

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            index = (index + 1) % taglines.length;
            setCurrentTagline(taglines[index]);
        }, 4500); // Total cycle time: 1s fade + 3.5s display

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold">
                            <span className="gradient-text">Mayank Kantharia</span>
                        </h1>
                        <h2 className="text-xl md:text-2xl text-gray-300">
                            Data Scientist & ML Engineer
                        </h2>
                        <p className="text-lg text-gray-400 max-w-lg transition-opacity duration-500 ease-in-out">
                            {currentTagline}
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <a href="#contact" className="px-6 py-3 bg-primary hover:bg-primary-dark rounded-lg font-medium transition duration-300 flex items-center justify-center space-x-2">
                                <span>Get In Touch</span>
                                <i className="mdi mdi-email-outline"></i>
                            </a>
                            <a href="/Resume Mayank Kantharia.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-primary text-primary hover:bg-primary/10 rounded-lg font-medium transition duration-300 flex items-center justify-center space-x-2">
                                <span>Download Resume</span>
                                <i className="mdi mdi-download-outline"></i>
                            </a>
                        </div>
                    </div>
                    <div className="relative hidden md:block">
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
                        <div className="relative w-full h-96 flex items-center justify-center">
                            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 rounded-2xl transform rotate-6"></div>
                            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 rounded-2xl transform -rotate-6"></div>
                            <div className="relative w-80 h-80 bg-dark rounded-2xl overflow-hidden border border-gray-700 shadow-2xl flex items-center justify-center">
                                <Image src="/1.jpeg" alt="Abstract representation" width={320} height={320} className="brightness-120 opacity-60" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;