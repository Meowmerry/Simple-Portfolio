import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Rice University",
    location: "Houston, TX",
    period: "May 2023 - July 2024",
    achievements: [
      "Lead architect of the Historical Mapping Initiative, migrating from Vue to React/TypeScript, increasing efficiency by 20%",
      "Increased user retention by 30% through user-centric UI dashboards using React, Plotly, and AgGrid",
      "Improved performance by 25% through React, D3.js, and Leaflet optimizations",
      "Simplified application architecture by migrating state management to Redux",
      "Increased Jest test coverage by 30%, enhancing code robustness for 600K+ users"
    ]
  },
  {
    title: "Software Engineer",
    company: "Gigamon- Cloud Security",
    location: "Santa Clara, CA",
    period: "Aug 2022 - Dec 2022",
    achievements: [
      "Migrated legacy Threat Insights tool to React hooks within two weeks",
      "Improved performance by 12% through Redux Toolkit optimizations",
      "Developed column profile feature with Material UI, CSS, React, and TypeScript",
      "Enhanced GraphQL layer for PostgreSQL user interactions",
      "Streamlined CI/CD using GitHub Actions"
    ]
  },
  {
    title: "Software Engineer",
    company: "Level11- Consulting",
    location: "Remote",
    period: "Dec 2020 - Aug 2022",
    achievements: [
      "Built hedge fund platform from scratch within three months",
      "Reduced processing time by 30% with React-based forms",
      "Achieved SEO optimization with Next.js and code splitting",
      "Modularized backend requests with Golang middleware functions"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-primary mb-12 text-center"
        >
          Work Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-6 rounded-lg shadow-md"
            >
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                  <p className="text-secondary">{exp.company}</p>
                </div>
                <div className="text-gray-600">
                  <p>{exp.location}</p>
                  <p>{exp.period}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
