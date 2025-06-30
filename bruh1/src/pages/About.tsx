import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Lightbulb, Users, Code, Cpu, Eye, Shield } from 'lucide-react';

const About = () => {
  const domains = [
    {
      icon: Brain,
      title: 'ML Research',
      description: 'Exploring cutting-edge machine learning algorithms and their real-world applications'
    },
    {
      icon: Cpu,
      title: 'Robotics',
      description: 'Building intelligent robots that can navigate and interact with complex environments'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Teaching machines to see and understand visual information from the world'
    },
    {
      icon: Shield,
      title: 'Ethical AI',
      description: 'Ensuring AI development follows ethical guidelines and serves humanity responsibly'
    }
  ];

  const affiliations = [
    { name: 'IEEE Student Branch', description: 'Technical excellence and innovation' },
    { name: 'Department of CSE', description: 'Academic support and mentorship' },
    { name: 'PESU Research Center', description: 'Advanced research opportunities' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Enhanced Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid">
          <div className="mesh-gradient absolute inset-0"></div>
          
          {/* Floating Elements */}
          <div className="floating-orb w-96 h-96 -top-48 -left-48 opacity-30"></div>
          <div className="floating-orb w-64 h-64 top-1/2 -right-32 opacity-40"></div>
          
          {/* Particle System */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 6 + 's'
              }}
            />
          ))}
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="holographic-card p-16 neon-border"
          >
            <Brain className="h-24 w-24 text-primary-accent mx-auto mb-8" />
            <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-8 gradient-text">
              About Neural Hive
            </h1>
            <p className="text-2xl text-primary-gray-200 font-inter leading-relaxed">
              The premier AI & Machine Learning club at PES University, Electronic City Campus
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Mission Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 texture-overlay bg-gradient-to-r from-primary-bg via-primary-card/10 to-primary-bg"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Target className="h-20 w-20 text-primary-accent mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-8 gradient-text">
              Our Mission
            </h2>
            <p className="text-xl text-primary-gray-200 font-inter max-w-4xl mx-auto leading-relaxed">
              To democratize AI literacy and foster project-driven learning among students, 
              creating a vibrant ecosystem where innovation thrives and future tech leaders are born.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="holographic-card enhanced-card p-10 neon-border"
            >
              <h3 className="text-3xl font-poppins font-semibold mb-6 gradient-text">
                Vision Statement
              </h3>
              <p className="text-primary-gray-200 font-inter leading-relaxed text-lg">
                To be the leading student organization that bridges the gap between theoretical AI knowledge 
                and practical implementation, producing graduates who are not just consumers but creators 
                of AI technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="holographic-card enhanced-card p-10 neon-border"
            >
              <h3 className="text-3xl font-poppins font-semibold mb-6 gradient-text">
                Core Values
              </h3>
              <ul className="text-primary-gray-200 font-inter space-y-3 text-lg">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-accent rounded-full mr-4"></div>
                  Innovation through collaboration
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-accent rounded-full mr-4"></div>
                  Ethical AI development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-accent rounded-full mr-4"></div>
                  Inclusive learning environment
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-accent rounded-full mr-4"></div>
                  Project-driven approach
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-accent rounded-full mr-4"></div>
                  Community impact focus
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Origin Story */}
      <section className="py-32 relative neuron-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Lightbulb className="h-20 w-20 text-primary-accent mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-8 gradient-text">
              Origin Story
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="holographic-card enhanced-card p-12 max-w-5xl mx-auto neon-border"
          >
            <div className="space-y-8 text-lg text-primary-gray-200 font-inter leading-relaxed">
              <p>
                Founded in 2023 by a group of passionate CSE students, Neural Hive emerged from a simple 
                observation: while AI was transforming industries globally, students lacked hands-on 
                experience with real-world AI applications.
              </p>
              <p>
                What started as informal study groups discussing neural network architectures has evolved 
                into PESU EC's most dynamic technical club, with over 30 active members working on 
                cutting-edge projects from disaster-response robots to ethical AI frameworks.
              </p>
              <p>
                Today, we're not just learning about AI – we're building it, questioning it, and ensuring 
                it serves humanity's best interests.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Domains */}
      <section className="py-32 relative">
        <div className="absolute inset-0 texture-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Code className="h-20 w-20 text-primary-accent mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-8 gradient-text">
              Our Domains
            </h2>
            <p className="text-xl text-primary-gray-400 font-inter">
              Exploring the frontiers of artificial intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {domains.map((domain, index) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="holographic-card enhanced-card p-8 text-center group neon-border"
              >
                <domain.icon className="h-16 w-16 text-primary-accent mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-poppins font-semibold mb-4 gradient-text">{domain.title}</h3>
                <p className="text-primary-gray-300 font-inter text-sm leading-relaxed">{domain.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Affiliations */}
      <section className="py-32 relative neuron-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Users className="h-20 w-20 text-primary-accent mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-8 gradient-text">
              Affiliations
            </h2>
            <p className="text-xl text-primary-gray-400 font-inter">
              Proud partnerships that strengthen our mission
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {affiliations.map((affiliation, index) => (
              <motion.div
                key={affiliation.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="holographic-card enhanced-card p-8 text-center neon-border"
              >
                <h3 className="text-xl font-poppins font-semibold mb-4 gradient-text">
                  {affiliation.name}
                </h3>
                <p className="text-primary-gray-300 font-inter">{affiliation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;