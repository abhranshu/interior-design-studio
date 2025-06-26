
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Office Complex",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      description: "Complete aluminum and wood interior transformation for a 50,000 sq ft office space.",
      location: "Downtown Business District",
      year: "2024",
      services: ["Ceiling Solutions", "Wall Panels", "Custom Millwork"]
    },
    {
      id: 2,
      title: "Luxury Residential Villa",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      description: "Elegant wood cladding and aluminum framing for a premium residential project.",
      location: "Hillside Estates",
      year: "2024",
      services: ["Wood Cladding", "Windows & Doors", "Aluminum Framing"]
    },
    {
      id: 3,
      title: "Retail Shopping Center",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
      description: "Contemporary design with sustainable materials for a modern shopping experience.",
      location: "City Center Mall",
      year: "2023",
      services: ["Ceiling Solutions", "Wall Panels", "Storefront Design"]
    },
    {
      id: 4,
      title: "Corporate Headquarters",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      description: "Award-winning interior design featuring innovative aluminum and wood combinations.",
      location: "Tech District",
      year: "2023",
      services: ["Custom Millwork", "Aluminum Framing", "Ceiling Solutions"]
    },
    {
      id: 5,
      title: "Boutique Hotel",
      category: "Hospitality",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
      description: "Sophisticated interiors that blend warmth and modern aesthetics.",
      location: "Historic Quarter",
      year: "2023",
      services: ["Wood Cladding", "Wall Panels", "Custom Millwork"]
    },
    {
      id: 6,
      title: "Family Home Renovation",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      description: "Complete interior makeover with emphasis on natural materials and clean lines.",
      location: "Suburban Heights",
      year: "2022",
      services: ["Windows & Doors", "Ceiling Solutions", "Wood Cladding"]
    }
  ];

  const categories = ["All", "Commercial", "Residential", "Hospitality"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Discover our exceptional collection of aluminum and wood interior projects, 
            showcasing innovative designs and superior craftsmanship.
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-amber-50 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white text-gray-900">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-amber-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="mr-4">{project.location}</span>
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{project.year}</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <Badge key={service} variant="outline" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
