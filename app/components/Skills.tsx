import Image from 'next/image';

const skillsData = {
  "Machine Learning & AI": [
    { src: "https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white", alt: "Python" },
    { src: "https://img.shields.io/badge/TensorFlow-FF6F00?logo=tensorflow&logoColor=white", alt: "TensorFlow" },
    { src: "https://img.shields.io/badge/PyTorch-EE4C2C?logo=pytorch&logoColor=white", alt: "PyTorch" },
    { src: "https://img.shields.io/badge/Scikit--learn-F7931E?logo=scikit-learn&logoColor=white", alt: "Scikit-learn" },
    { src: "https://img.shields.io/badge/Pandas-150458?logo=pandas&logoColor=white", alt: "Pandas" },
    { src: "https://img.shields.io/badge/NumPy-013243?logo=numpy&logoColor=white", alt: "NumPy" },
    { src: "https://img.shields.io/badge/Matplotlib-11557c?logo=matplotlib&logoColor=white", alt: "Matplotlib" },
    { src: "https://img.shields.io/badge/Seaborn-30B7F5?logo=seaborn&logoColor=white", alt: "Seaborn" },
  ],

  "NLP & Information Retrieval": [
    { src: "https://img.shields.io/badge/Transformers-FF9A00?logo=huggingface&logoColor=white", alt: "Transformers" },
    { src: "https://img.shields.io/badge/FastText-0054A6?logo=facebook&logoColor=white", alt: "FastText" },
    { src: "https://img.shields.io/badge/OpenAI_API-412991?logo=openai&logoColor=white", alt: "OpenAI API" },
    { src: "https://img.shields.io/badge/pgvector-4169E1?logo=postgresql&logoColor=white", alt: "pgvector" },
  ],

  "Data Engineering & Cloud": [
    { src: "https://img.shields.io/badge/AWS-232F3E?logo=amazon-aws&logoColor=white", alt: "AWS" },
    { src: "https://img.shields.io/badge/EC2-FF9900?logo=amazon-aws&logoColor=white", alt: "EC2" },
    { src: "https://img.shields.io/badge/S3-569A31?logo=amazon-s3&logoColor=white", alt: "S3" },
    { src: "https://img.shields.io/badge/Lambda-FF9900?logo=aws-lambda&logoColor=white", alt: "Lambda" },
    { src: "https://img.shields.io/badge/API_Gateway-FF4F00?logo=amazon-api-gateway&logoColor=white", alt: "API Gateway" },
    { src: "https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white", alt: "Docker" },
    { src: "https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white", alt: "Supabase" },
  ],

  "Databases": [
    { src: "https://img.shields.io/badge/PostgreSQL-316192?logo=postgresql&logoColor=white", alt: "PostgreSQL" },
    { src: "https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white", alt: "MySQL" },
    { src: "https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white", alt: "MongoDB" },
  ],

  "Backend & APIs": [
    { src: "https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=white", alt: "FastAPI" },
    { src: "https://img.shields.io/badge/Flask-000000?logo=flask&logoColor=white", alt: "Flask" },
    { src: "https://img.shields.io/badge/Django-092E20?logo=django&logoColor=white", alt: "Django" },
    { src: "https://img.shields.io/badge/REST_APIs-005571?logo=api&logoColor=white", alt: "REST APIs" },
  ],

  "Tools & Platforms": [
    { src: "https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white", alt: "Git" },
    { src: "https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white", alt: "GitHub" },
    { src: "https://img.shields.io/badge/Jupyter-F37626?logo=jupyter&logoColor=white", alt: "Jupyter" },
    { src: "https://img.shields.io/badge/VS_Code-007ACC?logo=visual-studio-code&logoColor=white", alt: "VS Code" },
  ],
};


const iconMap = {
  "Machine Learning & AI": "mdi-brain",
  "NLP & Information Retrieval": "mdi-text-recognition",
  "Data Engineering & Cloud": "mdi-cloud-outline",
  "Databases": "mdi-database",
  "Backend & APIs": "mdi-api",
  "Tools & Platforms": "mdi-tools",
};

const Skills = () => {
    return (
        <section id="skills" className="py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-3xl font-bold mb-4">My Technical <span className="gradient-text">Arsenal</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">A collection of tools and technologies I use to bring ideas to life.</p>
                    <div className="w-24 h-1 bg-linear-to-r from-primary to-secondary mx-auto mt-4"></div>
                </div>
                <div className="glass-card px-6 py-4 md:p-12 rounded-3xl">
                    <div className="grid grid-cols-1 text-sm">
                        {Object.entries(skillsData).map(([category, skills], index) => (
                            <div key={category} className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 ${index < Object.keys(skillsData).length -1 ? 'border-b border-gray-700' : ''}`}>
                                <div className="flex items-center">
                                    <div className="bg-primary/10 p-2 rounded-lg mr-3">
                                        <i className={`mdi ${iconMap[category as keyof typeof iconMap]} text-3xl text-primary`}></i>
                                    </div>
                                    <h3 className="text-lg font-semibold">{category}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map(skill => (
                                        <Image key={skill.alt} src={skill.src} alt={skill.alt} width={100} height={20} className="h-5 w-auto" unoptimized />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;