import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface FeaturedProject {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  year: string;
  client: string;
  role: string;
  technologies: string[];
  gallery: string[];
}

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const scaleX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), springConfig);

  const brands = [
    'VOGUE', 'NIKE', 'GUCCI', 'PRADA', 'DIOR', 'CHANEL', 'VERSACE', 'BALENCIAGA',
    'VOGUE', 'NIKE', 'GUCCI', 'PRADA', 'DIOR', 'CHANEL', 'VERSACE', 'BALENCIAGA'
  ];

  const featuredProjects: FeaturedProject[] = [
    {
      title: "VOGUE COLLECTION",
      description: "A groundbreaking fashion collection that redefines luxury streetwear.",
      fullDescription: "The Vogue Collection represents a paradigm shift in luxury fashion, seamlessly blending haute couture with street sensibilities. Each piece is meticulously crafted to challenge conventional fashion boundaries while maintaining the highest standards of craftsmanship. The collection features sustainable materials, innovative textile technologies, and bold silhouettes that speak to both traditional luxury consumers and contemporary fashion enthusiasts.",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80",
      year: "2024",
      client: "Vogue Magazine",
      role: "Creative Director & Lead Designer",
      technologies: ["Sustainable Fabrics", "Digital Printing", "3D Modeling", "Smart Textiles"],
      gallery: [
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80"
      ]
    },
    {
      title: "NIKE CAMPAIGN",
      description: "Revolutionary campaign bridging athletic performance and high fashion.",
      fullDescription: "The Nike Campaign represents a revolutionary approach to sports fashion, merging elite athletic performance with high-end fashion sensibilities. This groundbreaking project challenged traditional boundaries between sportswear and luxury fashion, creating a new category of performance-focused yet stylistically sophisticated apparel. The campaign featured innovative photography techniques and cutting-edge digital elements to showcase the fusion of technology and style.",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80",
      year: "2023",
      client: "Nike",
      role: "Campaign Director & Photographer",
      technologies: ["Motion Capture", "AR Integration", "Performance Fabrics", "Digital Marketing"],
      gallery: [
        "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80"
      ]
    },
    {
      title: "PARIS FASHION WEEK",
      description: "Showcasing avant-garde designs at the pinnacle of fashion.",
      fullDescription: "Our Paris Fashion Week presentation marked a defining moment in contemporary fashion, showcasing a collection that pushed the boundaries of conventional design while paying homage to classical haute couture. The show featured an innovative runway concept that integrated interactive digital elements with physical fashion pieces, creating an immersive experience that captivated both in-person and virtual audiences worldwide.",
      image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?auto=format&fit=crop&q=80",
      year: "2023",
      client: "Paris Fashion Week",
      role: "Show Director & Lead Designer",
      technologies: ["Holographic Displays", "Live Streaming", "Smart Fabrics", "LED Integration"],
      gallery: [
        "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1504703395950-b89145a5425b?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80"
      ]
    }
  ];

  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      );
    }
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <div ref={containerRef} className="relative">
      <div className="noise" />
      
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{ y: backgroundY }}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img 
            src="/EddieColeNikeCampaign.jpeg"
            alt="Abstract Fashion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        </motion.div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-syncopate font-bold mb-6 gradient-text"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              EDDIE COLE
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl font-bodoni tracking-wider glitch"
              data-text="CREATIVE DIRECTOR • PHOTOGRAPHER • DESIGNER"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              CREATIVE DIRECTOR • PHOTOGRAPHER • DESIGNER
            </motion.p>
          </motion.div>
        </div>

        <motion.div 
          className="scroll-indicator"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Text Mask Section */}
      <div className="py-32 px-4 md:px-8 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-mask-container relative aspect-[16/9] overflow-hidden">
            <div 
              className="absolute inset-0 text-mask"
              style={{
                maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1000 200\'%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'.35em\' font-family=\'Arial Black\' font-size=\'150\' font-weight=\'bold\'%3EEDDIE COLE%3C/text%3E%3C/svg%3E")',
                WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1000 200\'%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'.35em\' font-family=\'Arial Black\' font-size=\'150\' font-weight=\'bold\'%3EEDDIE COLE%3C/text%3E%3C/svg%3E")',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
              }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&fit=crop&q=80"
                alt="Creative Showcase"
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-32 px-4 md:px-8 bg-black relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at center, #ffffff22 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-syncopate font-bold mb-20 text-center neon-glow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            SERVICES
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                title: "CREATIVE DIRECTION",
                description: "Crafting visual narratives that transcend conventional boundaries. From concept to execution, we shape brand identities that leave lasting impressions.",
                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
              },
              {
                title: "PHOTOGRAPHY",
                description: "Capturing moments that tell stories. Our lens focuses on the extraordinary in every frame, creating visual poetry that speaks volumes.",
                image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80"
              },
              {
                title: "FASHION DESIGN",
                description: "Where innovation meets elegance. Our designs push boundaries while maintaining timeless appeal, setting trends rather than following them.",
                image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="aspect-[4/5] overflow-hidden mb-8 rainbow-border">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <h3 className="text-2xl font-syncopate font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 font-bodoni">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="py-32 px-4 md:px-8 relative bg-black/90">
        <motion.h2 
          className="text-4xl md:text-6xl font-syncopate font-bold mb-20 text-center neon-glow"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          FEATURED WORK
        </motion.h2>

        <div className="max-w-7xl mx-auto">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="mb-32 relative group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <motion.span 
                    className="text-sm font-syncopate text-gray-500"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    {project.year}
                  </motion.span>
                  <motion.h3 
                    className="text-3xl font-syncopate font-bold mb-4 mt-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-400 font-bodoni mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    {project.description}
                  </motion.p>
                  <motion.button
                    onClick={() => {
                      setCurrentImageIndex(0);
                      setSelectedProject(project);
                    }}
                    className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-colors font-syncopate"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    VIEW PROJECT
                  </motion.button>
                </div>
                <div className="order-1 md:order-2">
                  <motion.div 
                    className="aspect-[4/3] overflow-hidden rainbow-border"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
            onClick={() => setSelectedProject(null)}
          >
            <div className="h-full overflow-y-auto">
              <div className="min-h-full p-4 md:p-8 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-[#1a1a1a] w-[90%] md:w-[60%] rounded-lg overflow-hidden relative"
                >
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                  >
                    <X size={24} />
                  </button>

                  <div className="w-full">
                    <div className="relative group">
                      <div className="w-full h-[50vh] md:h-[60vh] flex items-center justify-center bg-black">
                        <motion.img
                          key={currentImageIndex}
                          src={selectedProject.gallery[currentImageIndex]}
                          alt={selectedProject.title}
                          className="h-full max-w-full object-contain"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      
                      {selectedProject.gallery.length > 1 && (
                        <>
                          <button
                            onClick={handlePrevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                          >
                            <motion.div
                              whileHover={{ x: -3 }}
                              className="flex items-center justify-center"
                            >
                              ←
                            </motion.div>
                          </button>
                          <button
                            onClick={handleNextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                          >
                            <motion.div
                              whileHover={{ x: 3 }}
                              className="flex items-center justify-center"
                            >
                              →
                            </motion.div>
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="p-8 bg-[#1a1a1a]">
                    <h2 className="text-3xl font-bold mb-6 font-syncopate gradient-text">
                      {selectedProject.title}
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                      <div>
                        <h3 className="text-sm font-syncopate text-gray-400 mb-2">CLIENT</h3>
                        <p className="font-bodoni">{selectedProject.client}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-syncopate text-gray-400 mb-2">ROLE</h3>
                        <p className="font-bodoni">{selectedProject.role}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-syncopate text-gray-400 mb-2">YEAR</h3>
                        <p className="font-bodoni">{selectedProject.year}</p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-sm font-syncopate text-gray-400 mb-2">ABOUT</h3>
                      <p className="font-bodoni text-gray-300">{selectedProject.fullDescription}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-syncopate text-gray-400 mb-2">TECHNOLOGIES</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-white/5 rounded-full text-sm font-bodoni"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Clients Section */}
      <div className="py-32 px-4 md:px-8 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-syncopate font-bold mb-20 text-center neon-glow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            TRUSTED BY
          </motion.h2>

          <div className="relative overflow-hidden">
            <motion.div 
              className="flex whitespace-nowrap"
              animate={{
                x: [0, '-50%']
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              {brands.map((brand, index) => (
                <div
                  key={`${brand}-${index}`}
                  className="inline-block mx-12 text-3xl md:text-4xl font-syncopate text-gray-500 hover:text-white transition-colors cursor-pointer"
                >
                  {brand}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-1 bg-white origin-left z-50"
        style={{ scaleX }}
      />
    </div>
  );
}

export default Home;