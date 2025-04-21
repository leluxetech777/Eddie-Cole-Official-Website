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
      title: "The Cole Method",
      description: "A bold fusion of luxury and streetwear, crafted by yours truly, —Eddie Cole",
      fullDescription: "The Cole Method Collection redefines the essence of luxury streetwear through the visionary lens of Eddie Cole. Merging classic urban aesthetics with high-fashion refinement, this collection introduces a bold new narrative in modern style. Each garment is a testament to individuality, confidence, and intentionality—designed to make a statement without saying a word. With an emphasis on premium craftsmanship, versatile silhouettes, and hand-selected materials, The Cole Method challenges traditional fashion norms while celebrating self-expression. It’s not just a look; it’s a lifestyle—curated by Eddie Cole, for those who lead, not follow.",
      image: "/TheColeMethodCover.jpg",
      year: "2025",
      client: "The World",
      role: "Creative Director, Lead Designer, Stylist & Photographer",
      technologies: ["Luxury", "Street", "Innovation", "Fun"],
      gallery: [
        "/TheColeMethod1.jpg",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80"
      ]
    },
    {
      title: "NIKE CAMPAIGN",
      description: "Eddie Cole’s creative tribute to the brand he loves; a visual celebration of timeless culture.",
      fullDescription: "The NIKE CAMPAIGN is a vibrant celebration of community, culture, and the iconic spirit of Nike—curated by Eddie Cole. In a heartfelt tribute to his favorite brand, Eddie brought together an eclectic mix of friends, models, creatives, and fellow Nike lovers to create something truly memorable. What unfolded was more than a campaign—it was a movement. Through powerful visuals and authentic moments, the campaign captures the essence of unity, style, and shared passion. From spontaneous street shots to intimate portraits, every frame tells a story of connection, legacy, and the joy of simply showing up in your own Nike way.",
      image: "/NikeCampaignCover.jpg",
      year: "2024",
      client: "Nike",
      role: "Campaign Director, Stylist & Photographer",
      technologies: ["Love", "Community", "Culture", "Photography", "Expression"],
      gallery: [
        "/EddieColeNikeCampaignCover.jpg",
        "/EddieColeNikeCampaign2.jpeg",
        "/EddieColeNikeCampaign3.jpeg"
      ]
    },
    {
      title: "COLE & FRIENDS",
      description: "Minneapolis-based showcase curated by Eddie Cole, featuring... friends",
      fullDescription: "COLE & FRIENDS is a creative showcase that brought together a community of talented photographers and visual artists under one roof in Minneapolis, curated by Eddie Cole. More than just an exhibition, it was a moment of shared brilliance—where friends became collaborators and each frame told a deeply personal story. From striking portraits to bold experimental visuals, the showcase captured the raw essence of creativity, camaraderie, and artistic freedom. Eddie documented every moment, turning the event itself into an immersive, living gallery. COLE & FRIENDS stands as a tribute to friendship, talent, and the power of collective expression.",
      image: "/ColeAndFriendsCover.jpg",
      year: "2023",
      client: "City of Minneapolis",
      role: "Show Director, Stylist, Photographer & Lead Designer",
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
      
      {/* Home Page Cover Section */}
      <div className="relative h-screen overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{ y: backgroundY }}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img 
            src="/EddieColeHomePageCover.jpeg"
            alt="Eddie Cole Header"
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
                src="/TextMaskCover.avif"
                alt="Creative Showcase"
                className="w-full h-full object-cover"
                initial={{ scale: 2.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 3.5 }}
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
                image: "/EddieColeServices1.jpg"
              },
              {
                title: "PHOTOGRAPHY",
                description: "Capturing moments that tell stories. Our lens focuses on the extraordinary in every frame, creating visual poetry that speaks volumes.",
                image: "/EddieColeServices2.jpg"
              },
              {
                title: "FASHION DESIGN",
                description: "Where innovation meets elegance. Our designs push boundaries while maintaining timeless appeal, setting trends rather than following them.",
                image: "/EddieColeServices3.jpg"
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