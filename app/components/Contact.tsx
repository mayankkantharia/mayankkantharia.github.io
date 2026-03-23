'use client';

const Contact = () => {
    return (
        <section id="contact" className="py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl font-bold mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-linear-to-r from-primary to-secondary mx-auto"></div>
                </div>

                {/* Card */}
                <div className="glass-card p-8 md:p-12 rounded-3xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* Left Section */}
                        <div className="flex flex-col space-y-10">

                            {/* Intro */}
                            <div className="space-y-3">
                                <h3 className="text-2xl font-semibold text-white">Let&apos;s Connect</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Data Science graduate with a focus on ML, NLP, and data engineering. Let’s connect and build something meaningful.
                                </p>
                            </div>

                            {/* Email */}
                            <div className="flex items-start space-x-4">
                                <a
                                    href="mailto:mayankkantharia01@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 shrink-0 rounded-full bg-dark-light hover:bg-primary/10 border border-gray-700 flex items-center justify-center transition"
                                >
                                    <i className="mdi mdi-email-outline text-2xl"></i>
                                </a>

                                <div className="flex flex-col justify-center">
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

                        </div>

                        {/* Right Section */}
                        <div className="flex flex-col space-y-8">

                            {/* Socials */}
                            <div>
                                <h3 className="text-xl font-semibold mb-4 text-white">Follow Me</h3>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://github.com/mayankkantharia"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-dark-light hover:bg-primary/10 border border-gray-700 flex items-center justify-center transition"
                                    >
                                        <i className="mdi mdi-github text-2xl"></i>
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/mayankkantharia/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-dark-light hover:bg-primary/10 border border-gray-700 flex items-center justify-center transition"
                                    >
                                        <i className="mdi mdi-linkedin text-2xl"></i>
                                    </a>

                                    <a
                                        href="https://www.instagram.com/mayankkantharia"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-dark-light hover:bg-primary/10 border border-gray-700 flex items-center justify-center transition"
                                    >
                                        <i className="mdi mdi-instagram text-2xl"></i>
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
