import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, Cpu, Star } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';
import useTilt from '../hooks/useTilt';
import useScrollReveal from '../hooks/useScrollReveal';

const Home = () => {
  const heroTiltRef = useTilt({ max: 8, scale: 1.02 });
  const [statsRef, statsVisible] = useScrollReveal(0.2);
  const [missionRef, missionVisible] = useScrollReveal(0.2);
  const [eventsRef, eventsVisible] = useScrollReveal(0.2);
  const [ctaRef, ctaVisible] = useScrollReveal(0.2);

  const stats = [
    { number: '30+', label: 'Active Members', icon: Users },
    { number: '5', label: 'Events in 2024-25', icon: Calendar },
    { number: '12', label: 'Live Projects', icon: Cpu }
  ];

  const events = [
    {
      title: 'BrainHack Hackathon',
      date: 'Sep 15, 2024',
      type: '24h Hackathon',
      description: '40 teams competed with healthcare AI problem statements',
      image: 'https://images.pexels.com/photos/7664747/pexels-photo-7664747.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Visionary Talks: Dr. Ananya Rao',
      date: 'Nov 21, 2024',
      type: 'Speaker Session',
      description: 'AI in Medical Imaging - Industry insights and applications',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'ML 101 Workshop',
      date: 'Jan 12, 2025',
      type: 'Hands-on Workshop',
      description: 'From regression to CNN in 4 intensive hours',
      image: 'https://images.pexels.com/photos/7661980/pexels-photo-7661980.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section with Parallax */}
      <ParallaxSection className="h-screen flex items-center justify-center overflow-hidden" speed={0.3}>
        <div className="absolute inset-0 cyber-grid">
          <div className="mesh-gradient absolute inset-0"></div>
          
          {/* Enhanced Floating Orbs */}
          <div className="floating-orb w-64 h-64 top-1/4 left-1/4"></div>
          <div className="floating-orb w-48 h-48 top-3/4 right-1/4"></div>
          <div className="floating-orb w-32 h-32 top-1/2 right-1/3"></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-bg/30 to-primary-bg/80"></div>
        
        <motion.div
          ref={heroTiltRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-6xl mx-auto px-4 tilt-card"
        >
          <div className="tilt-card-content">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-8xl font-poppins font-bold mb-8"
            >
              <span className="gradient-text block mb-4 glitch" data-text="Swarm Intelligence">
                Swarm Intelligence
              </span>
              <span className="glow-text">in Action</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-primary-gray-300 mb-12 font-inter max-w-4xl mx-auto leading-relaxed"
            >
              The AI & Machine Learning hub of PES University EC, where innovation meets implementation
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link to="/join" className="btn-primary magnetic-btn group text-lg interactive-hover">
                Join the Hive
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/projects" className="btn-secondary magnetic-btn text-lg interactive-hover">
                Explore Projects
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </ParallaxSection>

      {/* Enhanced Stats Section with 3D Tilt */}
      <section className="py-32 relative">
        <div className="absolute inset-0 texture-overlay bg-gradient-to-r from-primary-bg via-primary-card/20 to-primary-bg"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div 
            ref={statsRef}
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 scroll-reveal ${statsVisible ? 'revealed' : ''}`}
          >
            {stats.map((stat, index) => {
              const tiltRef = useTilt({ max: 12, scale: 1.05 });
              return (
                <motion.div
                  key={stat.label}
                  ref={tiltRef}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center holographic-card enhanced-card p-12 neon-border tilt-card interactive-hover"
                >
                  <div className="tilt-card-content">
                    <stat.icon className="h-16 w-16 text-primary-accent mx-auto mb-6" />
                    <h3 className="text-5xl font-poppins font-bold gradient-text mb-4">{stat.number}</h3>
                    <p className="text-primary-gray-300 font-inter text-lg">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Mission Statement with Parallax */}
      <ParallaxSection className="py-32 relative neuron-bg" speed={0.4}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            ref={missionRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`holographic-card enhanced-card p-16 neon-border tilt-card scroll-reveal ${missionVisible ? 'revealed' : ''}`}
          >
            <div className="tilt-card-content">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-12">
                <span className="gradient-text">Our Mission</span>
              </h2>
              <p className="text-2xl text-primary-gray-200 leading-relaxed font-inter max-w-4xl mx-auto">
                At Neural Hive we believe in learning by doing. From snake-robots slithering through rubble 
                to AI models catching anomalies before they escalate, our hive buzzes with innovation. 
                We democratize AI literacy and foster project-driven learning across all domains.
              </p>
            </div>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Enhanced Featured Events with 3D Effects */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-card/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              <span className="gradient-text">Event Spotlight</span>
            </h2>
            <p className="text-xl text-primary-gray-400 font-inter">
              Recent highlights from our innovation journey
            </p>
          </motion.div>

          <div 
            ref={eventsRef}
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 scroll-reveal ${eventsVisible ? 'revealed' : ''}`}
          >
            {events.map((event, index) => {
              const tiltRef = useTilt({ max: 10, scale: 1.03 });
              return (
                <motion.div
                  key={event.title}
                  ref={tiltRef}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="holographic-card enhanced-card overflow-hidden group tilt-card interactive-hover"
                >
                  <div className="tilt-card-content">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/80 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-primary-accent to-primary-magenta text-primary-bg px-4 py-2 rounded-full text-sm font-semibold">
                        {event.type}
                      </div>
                    </div>
                    <div className="p-8">
                      <p className="text-primary-accent text-sm font-semibold mb-3">{event.date}</p>
                      <h3 className="text-xl font-poppins font-semibold mb-4 gradient-text">{event.title}</h3>
                      <p className="text-primary-gray-300 font-inter leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section with Magnetic Effect */}
      <ParallaxSection className="py-32 relative" speed={0.2}>
        <div className="absolute inset-0 neuron-bg"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`holographic-card enhanced-card p-16 neon-border tilt-card scroll-reveal ${ctaVisible ? 'revealed' : ''}`}
          >
            <div className="tilt-card-content">
              <Star className="h-20 w-20 text-primary-accent mx-auto mb-8" />
              <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-8 gradient-text">
                Ready to Join the Revolution?
              </h2>
              <p className="text-xl text-primary-gray-200 mb-12 font-inter max-w-3xl mx-auto leading-relaxed">
                Become a neuron in our hive and help shape the future of AI at PESU EC
              </p>
              <Link to="/join" className="btn-primary magnetic-btn text-xl px-12 py-6 interactive-hover">
                Start Your Journey
              </Link>
            </div>
          </motion.div>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default Home;