import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <div className="pt-24 pb-32 relative">
      {/* Main content container with specific height */}
      <div className="min-h-[calc(100vh-24rem)] relative mb-16">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute top-0 right-0 w-1/2 h-full hidden md:block overflow-hidden"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/70 to-black z-10" />
          <img
            src="https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&q=80"
            alt="Luxury Interior"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8 font-syncopate">GET IN TOUCH</h1>
            <p className="text-xl mb-12 font-bodoni text-gray-300">Let's create something extraordinary together.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-syncopate mb-2">NAME</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border-b border-white/30 py-3 px-4 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-syncopate mb-2">PHONE NUMBER</label>
                  <input
                    type="tel"
                    className="w-full bg-white/5 border-b border-white/30 py-3 px-4 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-syncopate mb-2">EMAIL</label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border-b border-white/30 py-3 px-4 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-syncopate mb-2">MESSAGE</label>
                  <textarea
                    rows={6}
                    className="w-full bg-white/5 border-b border-white/30 py-3 px-4 focus:outline-none focus:border-white transition-colors resize-none"
                  ></textarea>
                </div>
                <motion.button 
                  className="px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors font-syncopate"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  SEND MESSAGE
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 md:pl-12"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-syncopate mb-8">CONTACT DETAILS</h3>
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center group-hover:border-white transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-syncopate">PHONE</p>
                    <p className="font-bodoni">+1 (612) 850-9007</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center group-hover:border-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-syncopate">EMAIL</p>
                    <p className="font-bodoni">ecmgmnt@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center group-hover:border-white transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-syncopate">LOCATION</p>
                    <p className="font-bodoni">Minneapolis, MN</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center group-hover:border-white transition-colors">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-syncopate">HOURS</p>
                    <p className="font-bodoni">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-white/10">
                <h3 className="text-2xl font-syncopate mb-6">STUDIO LOCATION</h3>
                <p className="text-gray-400 font-bodoni">
                  Although our creative studio is headquartered in Minneapolis, MN, we bring the Eddie Cole experience wherever you are—from New York City's Fashion District to the Hollywood scene in Los Angeles. We've recently expanded to international markets, making your dream wedding in Greece, family vacation in the Maldives, or fashion show in Milan, Italy a reality. We've already packed our bags and are ready to meet you anywhere in the world. Contact us today to schedule an appointment and let's explore the possibilities together.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;