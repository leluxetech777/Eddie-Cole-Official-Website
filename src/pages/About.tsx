import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { ChevronRight, ChevronLeft, Award, Users, Briefcase, Heart, Globe, Repeat } from 'lucide-react';

const About = () => {
  const carouselRef = useRef(null);
  const isInView = useInView(carouselRef);

  const carouselData = [
    { year: "2015", image: "/EddieCole2015a.jpg" },
    { year: "2015", image: "/EddieCole2015b.jpg" },
    { year: "2016", image: "/EddieCole2016a.jpg" },
    { year: "2016", image: "/EddieCole2016b.jpg" },
    { year: "2017", image: "/EddieCole2017a.jpg" },
    { year: "2017", image: "/EddieCole2017b.jpg" },
    { year: "2018", image: "/EddieCole2018a.jpg" },
    { year: "2018", image: "/EddieCole2018b.jpg" },
    { year: "2019", image: "/EddieCole2019a.jpg" },
    { year: "2019", image: "/EddieCole2019b.jpg" },
    { year: "2020", image: "/EddieCole2020a.jpg" },
    { year: "2020", image: "/EddieCole2020b.jpg" },
    { year: "2021", image: "/EddieCole2021a.jpg" },
    { year: "2021", image: "/EddieCole2021b.jpg" },
    { year: "2022", image: "/EddieCole2022a.jpg" },
    { year: "2022", image: "/EddieCole2022b.jpg" },
    { year: "2023", image: "/EddieCole2023a.jpg" },
    { year: "2023", image: "/EddieCole2023b.jpg" },
    { year: "2024", image: "/EddieCole2024a.jpg" },
    { year: "2024", image: "/EddieCole2024b.jpg" },
    { year: "2025", image: "/EddieCole2025a.jpg" },
    { year: "2025", image: "/EddieCole2025b.jpg" }
  ];

  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8 font-syncopate">ABOUT EDDIE</h1>
            <p className="text-lg mb-6 font-bodoni">
              Eddie Cole is more than a creative force in the fashion and art world—he's a testament 
              to the power of resilience and authenticity. Born in Liberia, Eddie's journey began 
              amidst humble beginnings that would later shape his unique perspective and unwavering 
              work ethic. His Liberian heritage infuses his work with a rich tapestry of cultural 
              influences, blending traditional African aesthetics with contemporary fashion and art.
            </p>
            <p className="text-lg mb-6 font-bodoni">
              With over a decade in the industry, Eddie has transformed challenges into stepping stones. 
              Early in his career, faced with closed doors and reluctant peers who often downplayed his 
              vision, he made a pivotal decision: instead of letting rejection define his path, he would 
              master every aspect of his craft. This adversity sparked a remarkable journey of 
              self-teaching—from photography and styling to creative direction and design.
            </p>
            <p className="text-lg mb-6 font-bodoni">
              His work is characterized by a bold, avant-garde approach that seamlessly blends different 
              mediums and styles. The resilience learned from his early life experiences manifests in his 
              fearless creative decisions, pushing boundaries while maintaining an authentic connection to 
              who he is. Eddie's unique combination of street and high fashion and innovative vision has earned him 
              recognition alongside industry icons, and in his words, he's "...Just getting started".
            </p>
            <p className="text-lg mb-6 font-bodoni">
              Today, Eddie's story serves as an inspiration for aspiring creatives worldwide. His journey 
              from self-taught artist to industry leader proves that with unwavering determination and 
              authenticity, one can transform adversity into artistry. Through his lens, every project 
              becomes a narrative of empowerment, encouraging others to embrace their unique perspectives 
              and turn their challenges into creative fuel.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/4] rainbow-border"
          >
            <img
              src="/EddieColeBioPic.jpeg"
              alt="Eddie Cole"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-colors"
          >
            <Award className="w-8 h-8 mx-auto mb-4 text-yellow-500" />
            <h3 className="text-4xl font-bold mb-2 gradient-text">10+</h3>
            <p className="font-syncopate">YEARS OF EXPERIENCE</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-colors"
          >
            <Briefcase className="w-8 h-8 mx-auto mb-4 text-blue-500" />
            <h3 className="text-4xl font-bold mb-2 gradient-text">150+</h3>
            <p className="font-syncopate">PROJECTS COMPLETED</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-colors"
          >
            <Users className="w-8 h-8 mx-auto mb-4 text-green-500" />
            <h3 className="text-4xl font-bold mb-2 gradient-text">50+</h3>
            <p className="font-syncopate">BRAND COLLABORATIONS</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-colors"
          >
            <Heart className="w-8 h-8 mx-auto mb-4 text-red-500" />
            <h3 className="text-4xl font-bold mb-2 gradient-text">100%</h3>
            <p className="font-syncopate">CUSTOMER SATISFACTION</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-colors"
          >
            <Globe className="w-8 h-8 mx-auto mb-4 text-purple-500" />
            <h3 className="text-4xl font-bold mb-2 gradient-text">10+</h3>
            <p className="font-syncopate">COUNTRIES GLOBAL</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-6 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-colors"
          >
            <Repeat className="w-8 h-8 mx-auto mb-4 text-pink-500" />
            <h3 className="text-4xl font-bold mb-2 gradient-text">200%</h3>
            <p className="font-syncopate">CUSTOMER RETENTION</p>
          </motion.div>
        </div>

        {/* Interactive Carousel Section */}
        <div ref={carouselRef} className="mt-32 relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-syncopate neon-glow">OUR JOURNEY</h2>
            <p className="text-xl text-gray-400 font-bodoni">A visual story of our creative evolution</p>
          </motion.div>

          <div className="relative group">
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              modules={[EffectCoverflow, Autoplay, Navigation]}
              className="w-full py-12"
            >
              {carouselData.map((item, index) => (
                <SwiperSlide key={index} className="transition-transform duration-500">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative aspect-video overflow-hidden rounded-lg rainbow-border"
                  >
                    <img
                      src={item.image}
                      alt={`Journey ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-xl font-syncopate">{item.year}</p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            <button className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-32 mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 font-syncopate neon-glow">OUR VISION</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-bold mb-4 font-syncopate gradient-text">INNOVATION</h3>
              <p className="text-gray-400 font-bodoni">Pushing boundaries and redefining industry standards through creative excellence.</p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-bold mb-4 font-syncopate gradient-text">AUTHENTICITY</h3>
              <p className="text-gray-400 font-bodoni">Creating genuine connections through honest and meaningful creative expression.</p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-bold mb-4 font-syncopate gradient-text">IMPACT</h3>
              <p className="text-gray-400 font-bodoni">Making lasting impressions through powerful visual storytelling and design.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;