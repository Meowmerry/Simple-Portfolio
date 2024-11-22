import { motion } from 'framer-motion';

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Redux",
      "Next.js",
      "Node.js",
      "Express",
      "Python",
      "Go",
      "Vite"
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      "HTML5",
      "CSS/SCSS",
      "Storybook",
      "Material UI",
      "TailwindCSS",
      "AntDesign",
      "Bootstrap",
      "D3.js"
    ]
  },
  {
    title: "Testing & APIs",
    skills: [
      "Jest",
      "CI/CD (GitHub Actions)",
      "Cypress",
      "RESTful APIs",
      "GraphQL",
      "SOAP"
    ]
  },
  {
    title: "DevOps & Databases",
    skills: [
      "Docker",
      "AWS S3",
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "GitHub/GitLab",
      "Webpack"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-primary mb-12 text-center"
        >
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-primary mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
