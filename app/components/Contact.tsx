"use client";

const Contact = () => {
    return (
        <section
            id="contact"
            className="py-14 relative overflow-hidden"
            style={{
                "--contact-accent": "#22d3ee",
                "--contact-accent-2": "#f59e0b",
            } as React.CSSProperties}
        >
            <div className="absolute inset-0 bg-grid-dark opacity-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl font-bold mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-linear-to-r from-primary to-secondary mx-auto"></div>
                </div>

                {/* Card */}
                <div className="glass-card p-6 md:p-8 rounded-3xl relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                            <div className="space-y-2 animate-rise">
                                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Contact</p>
                                <h3 className="text-2xl sm:text-3xl font-semibold text-white contact-title">
                                    Let&apos;s build something useful
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Data science graduate focused on ML, NLP, and data engineering.
                                </p>
                            </div>
                            <div className="px-3 py-1 rounded-full border border-white/10 bg-dark-light/40 text-xs text-gray-300 animate-rise" style={{ animationDelay: "120ms" }}>
                                Open to roles and collaborations
                            </div>
                        </div>

                        <div className="mt-6 rounded-2xl border border-white/10 bg-dark-light/40 p-4 animate-rise" style={{ animationDelay: "180ms" }}>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-dark-light border border-gray-700 flex items-center justify-center">
                                        <i className="mdi mdi-email-outline text-2xl"></i>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-wide text-gray-400">Primary</p>
                                        <h4 className="font-medium text-white">Email</h4>
                                        <a
                                            href="mailto:mayankkantharia01@gmail.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-primary transition break-all"
                                        >
                                            mayankkantharia01@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="text-xs text-gray-400">
                                    Fastest way to reach me
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 animate-rise" style={{ animationDelay: "240ms" }}>
                            <h3 className="text-lg font-semibold mb-3 text-white">Profiles</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <a
                                    href="https://github.com/mayankkantharia"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-dark-light/40 p-3 hover:border-primary/40 transition"
                                >
                                    <span className="w-9 h-9 rounded-full bg-dark-light border border-gray-700 flex items-center justify-center">
                                        <i className="mdi mdi-github text-lg"></i>
                                    </span>
                                    <div>
                                        <p className="text-sm text-white">GitHub</p>
                                        <p className="text-xs text-gray-400">Projects</p>
                                    </div>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/mayankkantharia/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-dark-light/40 p-3 hover:border-primary/40 transition"
                                >
                                    <span className="w-9 h-9 rounded-full bg-dark-light border border-gray-700 flex items-center justify-center">
                                        <i className="mdi mdi-linkedin text-lg"></i>
                                    </span>
                                    <div>
                                        <p className="text-sm text-white">LinkedIn</p>
                                        <p className="text-xs text-gray-400">Experience</p>
                                    </div>
                                </a>

                                <a
                                    href="https://www.instagram.com/mayankkantharia"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-dark-light/40 p-3 hover:border-primary/40 transition"
                                >
                                    <span className="w-9 h-9 rounded-full bg-dark-light border border-gray-700 flex items-center justify-center">
                                        <i className="mdi mdi-instagram text-lg"></i>
                                    </span>
                                    <div>
                                        <p className="text-sm text-white">Instagram</p>
                                        <p className="text-xs text-gray-400">Personal</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
