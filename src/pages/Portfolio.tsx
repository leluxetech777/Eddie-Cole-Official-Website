import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, User, Tag, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  images: string[];
  currentImageIndex?: number;
  year: string;
  client: string;
  tags: string[];
  description: string;
  grade: string;
}

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const categories = ['ALL', 'FASHION', 'PHOTOGRAPHY', 'STYLING', 'DESIGN'];
  
  const projects: Project[] = [
    // FASHION COLLECTIONS (10)
    {
      id: 1,
      title: "VOGUE SUMMER COLLECTION",
      category: "FASHION",
      images: ["https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80"],
      year: "2024",
      client: "Vogue Magazine",
      tags: ["Editorial", "Fashion", "Summer"],
      description: "A groundbreaking summer collection that redefines luxury fashion with sustainable materials and innovative designs.",
      grade: "A+"
    },
    {
      id: 2,
      title: "PARIS RUNWAY SERIES",
      category: "FASHION",
      images: ["https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Paris Fashion Week",
      tags: ["Runway", "Haute Couture", "Fashion Week"],
      description: "An exclusive collection showcasing the pinnacle of haute couture at Paris Fashion Week.",
      grade: "A"
    },
    {
      id: 3,
      title: "MINIMALIST LUXE",
      category: "FASHION",
      images: ["https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Zara",
      tags: ["Minimalist", "Contemporary", "Ready-to-wear"],
      description: "A minimalist approach to luxury fashion, focusing on clean lines and timeless elegance.",
      grade: "A-"
    },
    {
      id: 4,
      title: "URBAN STREETWEAR",
      category: "FASHION",
      images: ["https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Supreme",
      tags: ["Streetwear", "Urban", "Contemporary"],
      description: "A bold streetwear collection that pushes the boundaries of urban fashion.",
      grade: "A"
    },
    {
      id: 5,
      title: "SUSTAINABLE FUTURE",
      category: "FASHION",
      images: ["https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Stella McCartney",
      tags: ["Sustainable", "Eco-friendly", "Innovation"],
      description: "An eco-conscious collection showcasing sustainable materials and ethical fashion.",
      grade: "A+"
    },
    {
      id: 6,
      title: "AVANT-GARDE EVENING",
      category: "FASHION",
      images: ["https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Met Gala",
      tags: ["Evening Wear", "Avant-garde", "Luxury"],
      description: "A stunning collection of avant-garde evening wear for the Met Gala.",
      grade: "A"
    },
    {
      id: 7,
      title: "RESORT COLLECTION",
      category: "FASHION",
      images: ["https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Versace",
      tags: ["Resort", "Summer", "Luxury"],
      description: "A vibrant resort collection capturing the essence of summer luxury.",
      grade: "A-"
    },
    {
      id: 8,
      title: "WINTER WONDERLAND",
      category: "FASHION",
      images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Burberry",
      tags: ["Winter", "Outerwear", "Classic"],
      description: "A sophisticated winter collection blending traditional craftsmanship with modern design.",
      grade: "A"
    },
    {
      id: 9,
      title: "DENIM REVOLUTION",
      category: "FASHION",
      images: ["https://images.unsplash.com/photo-1506634572416-48cdfe530110?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Diesel",
      tags: ["Denim", "Contemporary", "Streetwear"],
      description: "A revolutionary denim collection pushing the boundaries of casual wear.",
      grade: "A-"
    },
    {
      id: 10,
      title: "BRIDAL DREAMS",
      category: "FASHION",
      images: ["https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Vera Wang",
      tags: ["Bridal", "Luxury", "Couture"],
      description: "An ethereal bridal collection celebrating modern romance.",
      grade: "A+"
    },

    // PHOTOGRAPHY COLLECTIONS (10)
    {
      id: 11,
      title: "URBAN LANDSCAPES",
      category: "PHOTOGRAPHY",
      images: ["https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "National Geographic",
      tags: ["Urban", "Documentary", "Editorial"],
      description: "A photographic exploration of urban architecture and city life.",
      grade: "A"
    },
    {
      id: 12,
      title: "PORTRAIT SERIES",
      category: "PHOTOGRAPHY",
      images: ["https://images.unsplash.com/photo-1504703395950-b89145a5425b?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Vogue Italia",
      tags: ["Portrait", "Fashion", "Editorial"],
      description: "Intimate portraits capturing the essence of contemporary fashion.",
      grade: "A+"
    },
    {
      id: 13,
      title: "STREET STYLE CHRONICLES",
      category: "PHOTOGRAPHY",
      images: ["https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Elle Magazine",
      tags: ["Street Style", "Fashion", "Documentary"],
      description: "Documentary-style photography capturing authentic street fashion.",
      grade: "A"
    },
    {
      id: 14,
      title: "ABSTRACT BEAUTY",
      category: "PHOTOGRAPHY",
      images: ["https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Art Gallery of Ontario",
      tags: ["Abstract", "Fine Art", "Experimental"],
      description: "An experimental series exploring abstract forms in fashion.",
      grade: "A-"
    },
    {
      id: 15,
      title: "BACKSTAGE MOMENTS",
      category: "PHOTOGRAPHY",
      images: ["https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Fashion Week",
      tags: ["Documentary", "Fashion", "Behind-the-scenes"],
      description: "Candid moments captured behind the scenes at major fashion events.",
      grade: "A"
    },
    {
      id: 16,
      title: "ARCHITECTURAL FASHION",
      category: "PHOTOGRAPHY",
      images: ["https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Architectural Digest",
      tags: ["Architecture", "Fashion", "Editorial"],
      description: "A series exploring the intersection of architecture and fashion.",
      grade: "A+"
    },
    {
      id: 17,
      title: "LIGHT & SHADOW",
      category: "PHOTOGRAPHY",
      images: ["https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Harper's Bazaar",
      tags: ["Fine Art", "Black & White", "Editorial"],
      description: "A study of light and shadow in fashion photography.",
      grade: "A"
    },
    {
      id: 18,
      title: "CULTURAL FUSION",
      category: "PHOTOGRAPHY",
      images: ["https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "UNESCO",
      tags: ["Cultural", "Documentary", "Fashion"],
      description: "A photographic exploration of global fashion influences.",
      grade: "A-"
    },
    {
      id: 19,
      title: "MOTION IN STILLNESS",
      category: "PHOTOGRAPHY",
      images: ["https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Nike",
      tags: ["Sports", "Fashion", "Action"],
      description: "Capturing the dynamic intersection of sports and style.",
      grade: "A"
    },
    {
      id: 20,
      title: "EDITORIAL EXCELLENCE",
      category: "PHOTOGRAPHY",
      images: ["https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "W Magazine",
      tags: ["Editorial", "Fashion", "Luxury"],
      description: "High-end editorial photography for leading fashion publications.",
      grade: "A+"
    },

    // STYLING COLLECTIONS (10)
    {
      id: 21,
      title: "CELEBRITY PORTFOLIO",
      category: "STYLING",
      images: ["https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Various Celebrities",
      tags: ["Celebrity", "Red Carpet", "Personal Styling"],
      description: "Personal styling portfolio for high-profile celebrity clients.",
      grade: "A+"
    },
    {
      id: 22,
      title: "EDITORIAL STYLING",
      category: "STYLING",
      images: ["https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Vogue",
      tags: ["Editorial", "Fashion", "Magazine"],
      description: "Creative styling for major fashion magazine editorials.",
      grade: "A"
    },
    {
      id: 23,
      title: "CAMPAIGN CONCEPTS",
      category: "STYLING",
      images: ["https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Gucci",
      tags: ["Campaign", "Commercial", "Brand"],
      description: "Innovative styling concepts for major brand campaigns.",
      grade: "A-"
    },
    {
      id: 24,
      title: "RUNWAY DIRECTION",
      category: "STYLING",
      images: ["https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Fashion Week",
      tags: ["Runway", "Fashion Week", "Show Direction"],
      description: "Runway styling and show direction for fashion week presentations.",
      grade: "A"
    },
    {
      id: 25,
      title: "STREET STYLE GUIDE",
      category: "STYLING",
      images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Urban Outfitters",
      tags: ["Street Style", "Casual", "Trend"],
      description: "Contemporary street style guidance and trend forecasting.",
      grade: "A+"
    },
    {
      id: 26,
      title: "SEASONAL LOOKBOOKS",
      category: "STYLING",
      images: ["https://images.unsplash.com/photo-1506634572416-48cdfe530110?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Zara",
      tags: ["Lookbook", "Commercial", "Seasonal"],
      description: "Seasonal lookbook styling for retail brands.",
      grade: "A"
    },
    {
      id: 27,
      title: "LUXURY CONSULTING",
      category: "STYLING",
      images: ["https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Private Clients",
      tags: ["Luxury", "Personal Shopping", "Consulting"],
      description: "Personal styling and luxury fashion consulting services.",
      grade: "A-"
    },
    {
      id: 28,
      title: "BRAND IDENTITY",
      category: "STYLING",
      images: ["https://images.unsplash.com/photo-1504703395950-b89145a5425b?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Emerging Designers",
      tags: ["Brand Development", "Identity", "Strategy"],
      description: "Styling strategy for brand identity development.",
      grade: "A"
    },
    {
      id: 29,
      title: "SUSTAINABLE STYLE",
      category: "STYLING",
      images: ["https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Eco Brands",
      tags: ["Sustainable", "Eco-friendly", "Conscious"],
      description: "Sustainable styling solutions for eco-conscious brands.",
      grade: "A+"
    },
    {
      id: 30,
      title: "DIGITAL CONTENT",
      category: "STYLING",
      images: ["https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Social Media",
      tags: ["Digital", "Social Media", "Content"],
      description: "Creative styling for digital content and social media.",
      grade: "A"
    },

    // DESIGN COLLECTIONS (10)
    {
      id: 31,
      title: "PRINT INNOVATION",
      category: "DESIGN",
      images: ["https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Design Studio",
      tags: ["Print", "Pattern", "Textile"],
      description: "Innovative print and pattern design for textiles.",
      grade: "A+"
    },
    {
      id: 32,
      title: "SUSTAINABLE MATERIALS",
      category: "DESIGN",
      images: ["https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Eco Fashion",
      tags: ["Sustainable", "Materials", "Innovation"],
      description: "Sustainable material development and design innovation.",
      grade: "A"
    },
    {
      id: 33,
      title: "ACCESSORY LINE",
      category: "DESIGN",
      images: ["https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Luxury Brand",
      tags: ["Accessories", "Luxury", "Design"],
      description: "Luxury accessory design and development.",
      grade: "A-"
    },
    {
      id: 34,
      title: "TECHNICAL WEAR",
      category: "DESIGN",
      images: ["https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Sportswear Brand",
      tags: ["Technical", "Performance", "Innovation"],
      description: "Technical sportswear design and development.",
      grade: "A"
    },
    {
      id: 35,
      title: "DIGITAL FASHION",
      category: "DESIGN",
      images: ["https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Tech Company",
      tags: ["Digital", "Virtual", "Innovation"],
      description: "Digital fashion design for virtual environments.",
      grade: "A+"
    },
    {
      id: 36,
      title: "COSTUME DESIGN",
      category: "DESIGN",
      images: ["https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Theater Production",
      tags: ["Costume", "Theater", "Creative"],
      description: "Creative costume design for theatrical productions.",
      grade: "A"
    },
    {
      id: 37,
      title: "JEWELRY COLLECTION",
      category: "DESIGN",
      images: ["https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Jewelry Brand",
      tags: ["Jewelry", "Luxury", "Accessories"],
      description: "Contemporary jewelry design and development.",
      grade: "A-"
    },
    {
      id: 38,
      title: "FOOTWEAR INNOVATION",
      category: "DESIGN",
      images: ["https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Shoe Brand",
      tags: ["Footwear", "Innovation", "Design"],
      description: "Innovative footwear design and development.",
      grade: "A"
    },
    {
      id: 39,
      title: "BRAND IDENTITY",
      category: "DESIGN",
      images: ["https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Fashion Brand",
      tags: ["Branding", "Identity", "Design"],
      description: "Comprehensive brand identity design and development.",
      grade: "A+"
    },
    {
      id: 40,
      title: "PACKAGING DESIGN",
      category: "DESIGN",
      images: ["https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80"],
      year: "2023",
      client: "Beauty Brand",
      tags: ["Packaging", "Branding", "Sustainable"],
      description: "Sustainable packaging design for beauty products.",
      grade: "A"
    }
  ];

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handleProjectClick = (project: Project) => {
    setCurrentImageIndex(0);
    setSelectedProject(project);
  };

  const filteredProjects = selectedCategory === 'ALL' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-32 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-syncopate neon-glow">PORTFOLIO</h1>
          <p className="text-xl text-gray-400 font-bodoni">Explore the very best of our creative works across the board</p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 border ${
                selectedCategory === category 
                  ? 'bg-white text-black' 
                  : 'border-white/30 hover:border-white'
              } transition-all duration-300 font-syncopate`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[4/5] group cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="absolute inset-0 rainbow-border rounded-lg overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold mb-2 font-syncopate">{project.title}</h3>
                      <p className="text-sm text-gray-300 font-bodoni">{project.description}</p>
                      <div className="flex gap-2 mt-4">
                        {project.tags.map((tag, index) => (
                          <span 
                            key={index}
                            className="text-xs px-2 py-1 bg-white/10 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1a1a1a] max-w-4xl w-full rounded-lg overflow-hidden relative"
            >
              <div className="aspect-video relative group">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
                
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    
                    <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  </>
                )}
              </div>
              
              <div className="p-8 -mt-20 relative">
                <h2 className="text-3xl font-bold mb-4 font-syncopate gradient-text">
                  {selectedProject.title}
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-400">Year</p>
                      <p className="font-bodoni">{selectedProject.year}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-400">Client</p>
                      <p className="font-bodoni">{selectedProject.client}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Tag className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-400">Category</p>
                      <p className="font-bodoni">{selectedProject.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-400">Grade</p>
                      <p className="font-bodoni">{selectedProject.grade}</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 font-bodoni">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/5 rounded-full text-sm font-bodoni"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Portfolio;