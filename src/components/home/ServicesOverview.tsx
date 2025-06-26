import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Grid3X3, Square, DoorOpen, Wrench } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: Grid3X3,
      title: "Ceiling Solutions",
      description: "Drop ceilings, acoustic panels, decorative designs, and suspended ceiling systems for modern spaces.",
      features: ["Acoustic Enhancement", "LED Integration", "Custom Designs", "Fire-Rated Options"],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      link: "/services#ceiling"
    },
    {
      icon: Square,
      title: "Windows & Doors",
      description: "Premium aluminum frames, wooden doors, and custom window solutions with superior craftsmanship.",
      features: ["Energy Efficient", "Security Features", "Custom Sizes", "Weather Resistant"],
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
      link: "/services#windows-doors"
    },
    {
      icon: DoorOpen,
      title: "Wall Panels",
      description: "Wood cladding, aluminum composite panels, and decorative wall treatments for stunning interiors.",
      features: ["Moisture Resistant", "Easy Maintenance", "Various Textures", "Eco-Friendly Options"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
      link: "/services#wall-panels"
    },
    {
      icon: Wrench,
      title: "Custom Millwork",
      description: "Built-in storage, decorative elements, and bespoke furniture crafted to your specifications.",
      features: ["Tailored Designs", "Quality Materials", "Expert Installation", "Lifetime Warranty"],
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80",
      link: "/services#custom-millwork"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Premium Interior Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we deliver exceptional aluminum and wood interior solutions 
            that transform your space into something extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-amber-600 p-3 rounded-lg">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 transition-colors"
                  asChild
                >
                  <Link to={service.link} className="flex items-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700" asChild>
            <Link to="/services" className="flex items-center">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
