import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Creative Director',
    company: '40Seven Productions',
    period: '2019 - Present (Part-Time)',
    description: [
      'Provided branding, graphic design, photography, videography, and music production services',
      'Developed strategic communication and marketing plans',
      'Monitored industry trends to keep creative materials fresh and engaging',
    ],
  },
  {
    title: 'Sales Consultant',
    company: 'Jumia Kenya',
    period: '2018 - 2023',
    description: [
      'Made over KES 250,000 in direct and indirect sales',
      'Onboarded over 1,000 users to the e-commerce platform',
      'Managed orders and deliveries to meet customer timelines',
    ],
  },
  {
    title: 'Digital Marketing and Corporate Communications',
    company: 'Africa Nazarene University',
    period: '2018 - 2020',
    description: [
      'Created engaging audio-visual content for marketing and public relations',
      'Managed social media engagement with current and prospective students',
      'Handled photography, live production, and office supplies management',
    ],
  },
  {
    title: 'Bookkeeper',
    company: 'Mukama Investments',
    period: '2017 - 2020',
    description: [
      'Managed over KES 10 million in member contributions, expenses, and transactions',
      'Produced monthly financial reports using advanced MS Office functions',
      'Updated financial records in ledgers and journals',
    ],
  },
  {
    title: 'Attaché',
    company: 'National Hospital Insurance Fund (NHIF)',
    period: '2021',
    description: [
      'Gained experience in customer service and claims processing',
      'Provided ICT support across departments',
      'Assisted with accounting operations',
    ],
  },
];

const ExperiencePage: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 flex items-center gap-3"
      >
        <Briefcase className="text-indigo-400" />
        Professional Experience
      </motion.h2>

      <div className="space-y-6">
        {experiences.map((job, index) => (
          <motion.div
            key={job.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 rounded-lg p-6 backdrop-blur-sm"
          >
            <h3 className="text-xl font-bold text-indigo-300">{job.title}</h3>
            <p className="text-gray-400">{job.company} • {job.period}</p>
            <ul className="mt-4 space-y-2">
              {job.description.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperiencePage;