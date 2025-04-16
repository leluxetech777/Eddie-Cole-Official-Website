import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, User, Tag, ChevronLeft, ChevronRight, X } from 'lucide-react';

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
      title: "Urban Streetwear Collection",
      category: "FASHION",
      images: [
        "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80"
      ],
      year: "2024",
      client: "StreetStyle Co.",
      tags: ["Urban", "Streetwear", "Fashion Week"],
      description: "A groundbreaking urban streetwear collection that redefines contemporary fashion. This collection merges street culture with high-end fashion sensibilities, featuring innovative designs and sustainable materials.",
      grade: "A+"
    },
    {
      id: 2,
      title: "Avant-Garde Collection",
      category: "FASHION",
      images: [
        "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1506634572416-48cdfe530110?auto=format&fit=crop&q=80"
      ],
      year: "2023",
      client: "Independent",
      tags: ["Avant-Garde", "Experimental", "Couture"],
      description: "A boundary-pushing avant-garde collection that challenges traditional fashion norms. This experimental series combines unconventional materials with innovative design techniques.",
      grade: "A"
    },
    {
      id: 3,
      title: "Summer Resort Collection",
      category: "FASHION",
      images: [
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80"
      ],
      year: "2024",
      client: "Coastal Luxury",
      tags: ["Resort Wear", "Summer", "Luxury"],
      description: "An elegant resort wear collection that captures the essence of summer luxury. Featuring lightweight fabrics and sophisticated cuts perfect for upscale vacation destinations.",
      grade: "A"
    },
    {
      id: 4,
      title: "Minimalist Essentials",
      category: "FASHION",
      images: [
        "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&q=80"
      ],
      year: "2023",
      client: "Essentials Co.",
      tags: ["Minimalist", "Basics", "Timeless"],
      description: "A carefully curated collection of minimalist wardrobe essentials. Each piece is designed with simplicity and versatility in mind, creating the perfect foundation for any wardrobe.",
      grade: "A+"
    },
    {
      id: 5,
      title: "Evening Wear Collection",
      category: "FASHION",
      images: [
        "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80"
      ],
      year: "2024",
      client: "Elegance",
      tags: ["Evening Wear", "Formal", "Luxury"],
      description: "A stunning collection of evening wear that combines classic elegance with modern sophistication. Perfect for red carpet events and formal occasions.",
      grade: "A"
    },
    {
      id: 6,
      title: "Sustainable Denim",
      category: "FASHION",
      images: [
        "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80"
      ],
      year: "2024",
      client: "EcoDenim",
      tags: ["Sustainable", "Denim", "Eco-friendly"],
      description: "An innovative denim collection focusing on sustainable production methods and recycled materials. Modern cuts meet environmental consciousness.",
      grade: "A+"
    },
    {
      id: 7,
      title: "Athletic Fusion",
      category: "FASHION",
      images: [
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80"
      ],
      year: "2023",
      client: "SportLuxe",
      tags: ["Athletic", "Streetwear", "Performance"],
      description: "A dynamic collection that bridges the gap between athletic wear and high fashion. Performance meets style in this innovative fusion line.",
      grade: "A"
    },
    {
      id: 8,
      title: "Winter Luxe",
      category: "FASHION",
      images: [
        "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80"
      ],
      year: "2024",
      client: "Nordic Style",
      tags: ["Winter", "Luxury", "Outerwear"],
      description: "A luxurious winter collection featuring premium materials and sophisticated designs. Combining warmth with high-end fashion sensibilities.",
      grade: "A+"
    },
    {
      id: 9,
      title: "Contemporary Workwear",
      category: "FASHION",
      images: [
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80"
      ],
      year: "2024",
      client: "Modern Professional",
      tags: ["Workwear", "Professional", "Modern"],
      description: "A modern take on professional attire, redefining workwear for the contemporary office environment. Comfort meets sophistication.",
      grade: "A"
    },
    {
      id: 10,
      title: "Bohemian Dreams",
      category: "FASHION",
      images: [
        "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80"
      ],
      year: "2023",
      client: "Free Spirit",
      tags: ["Bohemian", "Artisanal", "Free-spirited"],
      description: "A free-spirited collection inspired by global artisanal techniques and bohemian aesthetics. Each piece tells a story of cultural richness.",
      grade: "A+"
    },

    // PHOTOGRAPHY COLLECTIONS (10)
    {
      id: 11,
      title: "Minimalist Portrait Series",
      category: "PHOTOGRAPHY",
      images: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80"
      ],
      year: "2023",
      client: "Vogue Magazine",
      tags: ["Portrait", "Minimalism", "Editorial"],
      description: "A stunning series of minimalist portraits capturing the essence of modern beauty. This collection emphasizes clean lines and subtle emotions.",
      grade: "A"
    },
    {
      id: 12,
      title: "Fashion Week Coverage",
      category: "PHOTOGRAPHY",
      images: [
        "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80"
      ],
      year: "2024",
      client: "Paris Fashion Week",
      tags: ["Fashion Week", "Editorial", "Runway"],
      description: "Comprehensive coverage of Paris Fashion Week, capturing the essence of haute couture and ready-to-wear collections.",
      grade: "A+"
    },
    {
      id: 13,
      title: "Urban Landscapes",
      category: "PHOTOGRAPHY",
      images: [
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1444084316824-dc26d6657664?auto=format&fit=crop&q=80"
      ],
      year: "2024",
      client: "Architectural Digest",
      tags: ["Urban", "Architecture", "Editorial"],
      description: "A photographic exploration of urban landscapes and architectural beauty, capturing the essence of modern city life.",
      grade: "A"
    },
    {
      id: 14,
      title: "Street Style Documentary",
      category: "PHOTOGRAPHY",
      images: [
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?auto=format&fit=crop&q=80"
      ],
      year: "2023",
      client: "StreetStyle Magazine",
      tags: ["Street Style", "Documentary", "Urban"],
      description: "A documentary-style photography series capturing authentic street style across major fashion capitals.",
      grade: "A+"
    },
    {
      id: 15,
      title: "Studio Lighting Series",
      category: "PHOTOGRAPHY",
      images: [
        "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1492288991661-058aa541ff43?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80"
      ],
      year: "2024",
      client: "Photography Monthly",
      tags: ["Studio", "Lighting", "Technical"],
      description: "An experimental series exploring innovative studio lighting techniques in fashion photography.",
      grade: "A"
    },
    {
      id: 16,
      title: "Natural Light Portraits",
      category: "PHOTOGRAPHY",
      images: [
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80"
      ],
      year: "2023",
      client: "Elle Magazine",
      tags: ["Natural Light", "Portrait", "Fashion"],
      description: "A collection of portraits utilizing natural light to create stunning, authentic fashion imagery.",
      grade: "A+"
    },
    {
      id: 17,
      title: "Editorial Storytelling",
      category: "PHOTOGRAPHY",
      images: [
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80"
      ],
      year: "2024",
      client: "Harper's Bazaar",
      tags: ["Editorial", "Narrative", "Fashion"],
      description: "A series of editorial photographs that weave compelling visual narratives through fashion.",
      grade: "A"
    },
    {
      id: 18,
      title: "Behind the Scenes",
      category: "PHOTOGRAPHY",
      images: [
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80"
      ],
      year: "2024",
      client: "Fashion Industry Insider",
      tags: ["Documentary", "Fashion", "BTS"],
      description: "An intimate look behind the scenes of major fashion events and photo shoots.",
      grade: "A+"
    },
    {
      id: 19,
      title: "Abstract Fashion",
      category: "PHOTOGRAPHY",
      images: [
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80"
      ],
      year: "2023",
      client: "Art & Fashion Quarterly",
      tags: ["Abstract", "Artistic", "Experimental"],
      description: "An experimental series pushing the boundaries between fashion photography and abstract art.",
      grade: "A"
    },
    {
      id: 20,
      title: "Color Theory",
      category: "PHOTOGRAPHY",
      images: [
        "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80"
      ],
      year: "2024",
      client: "Color Magazine",
      tags: ["Color", "Experimental", "Technical"],
      description: "A vibrant exploration of color theory in fashion photography, pushing creative boundaries.",
      grade: "A+"
    },

    // STYLING COLLECTIONS (10)
    {
      id: 21,
      title: "Luxury Brand Campaign",
      category: "STYLING",
      images: [
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80"
      ],
      year: "2024",
      client: "Gucci",
      tags: ["Luxury", "Campaign", "High Fashion"],
      description: "An innovative styling campaign for a leading luxury brand, combining classical elegance with contemporary trends.",
      grade: "A+"
    },
    {
      id: 22,
      title: "Editorial Styling",
      category: "STYLING",
      images: [
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80"
      ],
      year: "2023",
      client: "Vogue Italia",
      tags: ["Editorial", "High Fashion", "Creative"],
      description: "Innovative editorial styling for a major fashion publication, pushing creative boundaries.",
      grade: "A"
    },
    {
      id: 23,
      title: "Celebrity Styling",
      category: "STYLING",
      images: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80"
      ],
      year: "2024",
      client: "Red Carpet Events",
      tags: ["Celebrity", "Red Carpet", "Luxury"],
      description: "Expert styling for celebrity appearances and red carpet events, creating iconic moments.",
      grade: "A+"
    },
    {
      id: 24,
      title: "Commercial Styling",
      category: "STYLING",
      images: [
        "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80"
      ],
      year: "2023",
      client: "Major Retailers",
      tags: ["Commercial", "Retail", "Accessible"],
      description: "Commercial styling projects for major retail brands, making fashion accessible and appealing.",
      grade: "A"
    },
    {
      id: 25,
      title: "Music Video Styling",
      category: "STYLING",
      images: [
        "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80"
      ],
      year: "2024",
      client: "Music Industry",
      tags: ["Music Video", "Creative", "Artistic"],
      description: "Creative styling for music videos, combining fashion with artistic expression.",
      grade: "A+"
    },
    {
      id: 26,
      title: "Runway Show Styling",
      category: "STYLING",
      images: [
        "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80"
      ],
      year: "2024",
      client: "Fashion Week",
      tags: ["Runway", "Fashion Week", "High Fashion"],
      description: "Complete styling direction for runway shows at major fashion weeks.",
      grade: "A"
    },
    {
      id: 27,
      title: "Magazine Cover Styling",
      category: "STYLING",
      images: [
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80"
      ],
      year: "2023",
      client: "Fashion Magazines",
      tags: ["Editorial", "Cover", "High Impact"],
      description: "Iconic styling for magazine covers that create lasting impressions.",
      grade: "A+"
    },
    {
      id: 28,
      title: "Campaign Styling",
      category: "STYLING",
      images: [
        "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80"
      ],
      year: "2024",
      client: "Various Brands",
      tags: ["Campaign", "Commercial", "Creative"],
      description: "Strategic styling for major advertising campaigns across different brands.",
      grade: "A"
    },
    {
      id: 29,
      title: "Personal Styling",
      category: "STYLING",
      images: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80"
      ],
      year: "2024",
      client: "Private Clients",
      tags: ["Personal", "Luxury", "Bespoke"],
      description: "Exclusive personal styling services for high-profile clients and executives.",
      grade: "A+"
    },
    {
      id: 30,
      title: "Event Styling",
      category: "STYLING",
      images: [
        "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1506634572416-48cdfe530110?auto=format&fit=crop&q=80"
      ],
      year: "2023",
      client: "Various Events",
      tags: ["Events", "Special Occasions", "Creative"],
      description: "Comprehensive styling for special events and themed occasions.",
      grade: "A"
    },

    // DESIGN COLLECTIONS (10)
    {
      id: 31,
      title: "Sustainable Fashion Line",
      category: "DESIGN",
      images: [
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80"
      ],
      year: "2023",
      client: "EcoStyle",
      tags: ["Sustainable", "Eco-friendly", "Innovation"],
      description: "A revolutionary sustainable fashion line using recycled materials and ethical production methods.",
      grade: "A"
    },
    {
      id: 32,
      title: "Minimalist Collection",
      category: "DESIGN",
      images: [
        "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80"
      ],
      year: "2024",
      client: "Pure Design",
      tags: ["Minimalist", "Contemporary", "Clean"],
      description: "A clean, minimalist collection focusing on essential pieces with perfect cuts.",
      grade: "A+"
    },
    {
      id: 33,
      title: "Avant-Garde Accessories",
      category: "DESIGN",
      images: [
        "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1506634572416-48cdfe530110?auto=format&fit=crop&q=80"
      ],
      year: "2023",
      client: "Artisan Collective",
      tags: ["Accessories", "Avant-Garde", "Artisanal"],
      description: "An innovative accessories collection pushing the boundaries of conventional design.",
      grade: "A"
    },
    {
      id: 34,
      title: "Technical Wear",
      category: "DESIGN",
      images: [
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80"
      ],
      year: "2024",
      client: "TechStyle",
      tags: ["Technical", "Performance", "Innovation"],
      description: "A technical collection combining advanced materials with contemporary design.",
      grade: "A+"
    },
    {
      id: 35,
      title: "Luxury Knitwear",
      category: "DESIGN",
      images: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80"
      ],
      year: "2024",
      client: "Luxury Knits",
      tags: ["Knitwear", "Luxury", "Craftsmanship"],
      description: "A luxurious knitwear collection showcasing exceptional craftsmanship and innovative techniques.",
      grade: "A"
    },
    {
      id: 36,
      title: "Sustainable Accessories",
      category: "DESIGN",
      images: [
        "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80"
      ],
      year: "2023",
      client: "EcoAccessories",
      tags: ["Sustainable", "Accessories", "Innovation"],
      description: "A collection of eco-friendly accessories made from innovative sustainable materials.",
      grade: "A+"
    },
    {
      id: 37,
      title: "Urban Footwear",
      category: "DESIGN",
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80"
      ],
      year: "2024",
      client: "Urban Kicks",
      tags: ["Footwear", "Urban", "Innovation"],
      description: "A revolutionary footwear collection combining urban style with cutting-edge design.",
      grade: "A"
    },
    {
      id: 38,
      title: "Jewelry Collection",
      category: "DESIGN",
      images: [
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80"
      ],
      year: "2024",
      client: "Luxury Jewels",
      tags: ["Jewelry", "Luxury", "Artisanal"],
      description: "An exquisite jewelry collection featuring innovative designs and precious materials.",
      grade: "A+"
    },
    {
      id: 39,
      title: "Smart Fashion",
      category: "DESIGN",
      images: [
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80"
      ],
      year: "2024",
      client: "TechWear",
      tags: ["Technology", "Innovation", "Fashion"],
      description: "A groundbreaking collection integrating smart technology with contemporary fashion.",
      grade: "A"
    },
    {
      id: 40,
      title: "Experimental Materials",
      category: "DESIGN",
      images: [
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80"
      ],
      year: "2023",
      client: "Material Innovation Lab",
      tags: ["Experimental", "Innovation", "Sustainable"],
      description: "An experimental collection exploring new materials and production techniques.",
      grade: "A+"
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
                          src={selectedProject.images[currentImageIndex]}
                          alt={selectedProject.title}
                          className="h-full max-w-full object-contain"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      
                      {selectedProject.images.length > 1 && (
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

                    <div className="grid md:grid-cols-4 gap-6 mb-8">
                      <div>
                        <h3 className="text-sm font-syncopate text-gray-400 mb-2">YEAR</h3>
                        <p className="font-bodoni">{selectedProject.year}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-syncopate text-gray-400 mb-2">CLIENT</h3>
                        <p className="font-bodoni">{selectedProject.client}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-syncopate text-gray-400 mb-2">CATEGORY</h3>
                        <p className="font-bodoni">{selectedProject.category}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-syncopate text-gray-400 mb-2">GRADE</h3>
                        <p className="font-bodoni">{selectedProject.grade}</p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-sm font-syncopate text-gray-400 mb-2">ABOUT</h3>
                      <p className="font-bodoni text-gray-300">{selectedProject.description}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-syncopate text-gray-400 mb-2">TAGS</h3>
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
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Portfolio;