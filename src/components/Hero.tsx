import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background pt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Thasanee Puttamadilok
          </h1>
          <h2 className="text-2xl md:text-3xl text-secondary mb-6">
            Software Engineer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            A highly skilled Software Engineer with over 5 years of experience in developing 
            high-performance web applications using React, TypeScript, and Next.js.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:thasanee.dev@gmail.com"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#experience"
              className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              View Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
