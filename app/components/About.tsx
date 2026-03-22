const About = () => {
  return (
    <section id="about" className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-3xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A quick look at my journey and what I love building.
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-primary to-secondary mx-auto mt-4"></div>
        </div>

        <div className="glass-card px-6 py-4 md:p-12 rounded-3xl">
          <div className="space-y-6">
            
            <p className="text-gray-300 leading-relaxed text-justify">
              I’m a <strong>Data Scientist & ML Engineer</strong> based in Melbourne, focused on building intelligent, end to end data and machine learning solutions. I recently completed my <strong>Master of Data Science</strong> at <strong>RMIT University</strong>, where I specialised in machine learning, NLP, cloud systems, and applied analytics.
            </p>

            <p className="text-gray-300 leading-relaxed text-justify">
              My background in <strong>Computer Engineering</strong> gives me a strong foundation in programming, backend development, and database systems. This helps me approach problems with both analytical depth and engineering discipline.
            </p>

            <p className="text-gray-300 leading-relaxed text-justify">
              I’ve worked on projects involving RAG systems, NLP pipelines, cloud deployed applications, deep learning models, and large scale data analysis. I enjoy designing solutions that move beyond experimentation into real world impact, whether it’s deploying ML services, analysing complex datasets, or building scalable cloud architectures.
            </p>

            <p className="text-gray-300 leading-relaxed text-justify">
              I’m driven by curiosity, continuous learning, and the challenge of turning raw data into meaningful intelligence. My goal is to build systems that are accurate, reliable, scalable, and genuinely useful.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
