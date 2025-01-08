import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-indigo-500">
          <img 
            src="https://api.dicebear.com/7.x/personas/svg?seed=caleb&backgroundColor=b6e3f4"
            alt="Caleb Mutonyi"
            className="w-full h-full object-cover"
          />
        </div>
        <TypeAnimation
          sequence={[
            'BSc. Procurement & Supply Chain Mgt.',
            1000,
            'Creative Director',
            1000,
            'Digital Marketing Specialist',
            1000,
          ]}
          wrapper="h2"
          className="text-xl text-indigo-300 mb-4"
          repeat={Infinity}
        />
        
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          A dedicated and enthusiastic professional with over seven years of combined experience 
          across various fields, including sales, creative production, branding, bookkeeping, 
          and procurement.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a href="mailto:cmutonyi7@gmail.com" className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
            <Mail className="w-5 h-5" />
            <span>cmutonyi7@gmail.com</span>
          </a>
          <a href="tel:0723004726" className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
            <Phone className="w-5 h-5" />
            <span>0723004726</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-indigo-400" />
            <span>Nairobi, Kenya</span>
          </div>
        </div>

        <div className="flex justify-center gap-6">
          <a href="https://github.com/yourusername" className="hover:text-indigo-400 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/caleb-mukuna-08b134221/" className="hover:text-indigo-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/40seven_ke/" className="hover:text-indigo-400 transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm hover:bg-white/20 transition-colors">
          <h3 className="text-xl font-bold mb-4">Personal Philosophy</h3>
          <p className="text-gray-300">
            "I believe in doing what I can, with what I have, where I am, while ensuring 
            a great experience for my clients."
          </p>
        </div>

        <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm hover:bg-white/20 transition-colors">
          <h3 className="text-xl font-bold mb-4">Latest Certifications</h3>
          <ul className="space-y-2">
            <li className="text-gray-300">Lean Six Sigma (White Belt) - Minitab</li>
            <li className="text-gray-300">Technical Support Basics - IBM Skills Network</li>
            <li className="text-gray-300">Amazon Cybersecurity Awareness - AWS</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default HomePage;