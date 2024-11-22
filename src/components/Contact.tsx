import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-primary mb-8">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            I'm currently open to new opportunities and would love to hear from you.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-6">
              <a
                href="mailto:thasanee.dev@gmail.com"
                className="flex items-center text-secondary hover:text-primary transition-colors"
              >
                <span className="material-icons mr-2">email</span>
                thasanee.dev@gmail.com
              </a>
              <a
                href="tel:+19726644779"
                className="flex items-center text-secondary hover:text-primary transition-colors"
              >
                <span className="material-icons mr-2">phone</span>
                (972) 664-4779
              </a>
            </div>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
