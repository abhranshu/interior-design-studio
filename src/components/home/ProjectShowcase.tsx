
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Eye, Calendar, MapPin } from 'lucide-react';

const ProjectShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'office', label: 'Office Spaces' },
  ];

  const projects = [
    {
      id: 1,
      title: "Modern Office Ceiling Design",
      category: "commercial",
      location: "Downtown Business Center",
      completedDate: "March 2024",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      beforeImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      description: "Complete ceiling renovation with integrated LED lighting and acoustic panels for a 5,000 sq ft office space.",
      services: ["Ceiling Solutions", "LED Integration", "Acoustic Panels"],
      testimonial: "The transformation was incredible. Our office feels more professional and the acoustics are perfect for meetings."
    },
    {
      id: 2,
      title: "Luxury Home Wall Panels",
      category: "residential",
      location: "Hillcrest Estates",
      completedDate: "February 2024",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      beforeImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
      description: "Premium wood cladding with aluminum accents creating a sophisticated living room feature wall.",
      services: ["Wall Panels", "Wood Cladding", "Custom Design"],
      testimonial: "Absolutely stunning work. The attention to detail exceeded our expectations."
    },
    {
      id: 3,
      title: "Corporate Reception Area",
      category: "office",
      location: "Tech Hub Plaza",
      completedDate: "January 2024",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      beforeImage: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=800&q=80",
      description: "Modern reception area with custom millwork, aluminum framing, and integrated branding elements.",
      services: ["Custom Millwork", "Aluminum Framing", "Interior Design"],
      testimonial: "Our clients are always impressed when they walk into our reception area now."
    },
    {
      id: 4,
      title: "Restaurant Interior Renovation",
      category: "commercial",
      location: "Gourmet District",
      completedDate: "December 2023",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80",
      beforeImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
      description: "Complete interior transformation with wood panels, custom seating, and atmospheric lighting design.",
      services: ["Interior Design", "Custom Furniture", "Lighting Design"],
      testimonial: "The ambiance is perfect now. Our customers love the warm, sophisticated atmosphere."
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const [showBefore, setShowBefore] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Recent Project Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover how we've transformed spaces for our clients with our premium interior solutions.
            Each project showcases our commitment to quality and attention to detail.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-amber-600 hover:bg-amber-700" : ""}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={showBefore === project.id ? project.beforeImage : project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                {/* Before/After Toggle */}
                <div className="absolute top-4 right-4">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => setShowBefore(showBefore === project.id ? null : project.id)}
                    className="bg-white/90 hover:bg-white text-gray-900"
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    {showBefore === project.id ? 'After' : 'Before'}
                  </Button>
                </div>

                {/* Project Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.services.map((service, serviceIndex) => (
                      <Badge key={serviceIndex} variant="secondary" className="bg-amber-600 text-white">
                        {service}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-200">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.completedDate}
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <blockquote className="border-l-4 border-amber-600 pl-4 italic text-gray-700 mb-4">
                  "{project.testimonial}"
                </blockquote>
                <Button
                  variant="outline"
                  className="group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 transition-colors w-full"
                  asChild
                >
                  <Link to={`/portfolio/${project.id}`} className="flex items-center justify-center">
                    View Project Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700" asChild>
            <Link to="/portfolio" className="flex items-center">
              View Complete Portfolio
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
