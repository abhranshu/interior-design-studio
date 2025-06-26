import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Grid3X3, 
  Square, 
  DoorOpen, 
  Wrench, 
  CheckCircle, 
  Clock,
  IndianRupee,
  ArrowRight,
  Lightbulb,
  Shield,
  Palette,
  Settings,
  Phone
} from 'lucide-react';

const Services = () => {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');
  const [selectedService, setSelectedService] = useState('ceiling');

  useEffect(() => {
    if (serviceParam) {
      setSelectedService(serviceParam);
    }
    // Scroll to top when component mounts or service changes
    window.scrollTo(0, 0);
  }, [serviceParam]);

  const services = [
    {
      id: 'ceiling',
      icon: Grid3X3,
      title: 'Ceiling Solutions',
      subtitle: 'Transform your space from above',
      description: 'Premium drop ceilings, acoustic panels, and decorative designs that combine functionality with aesthetic appeal.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      ],
      features: [
        'Acoustic Enhancement & Sound Control',
        'Integrated LED Lighting Systems',
        'Fire-Rated & Safety Compliant',
        'Custom Designs & Patterns',
        'Easy Access Maintenance Panels',
        'Energy Efficient Solutions'
      ],
      materials: [
        { name: 'Aluminum Grid Systems', description: 'Durable, moisture-resistant frames' },
        { name: 'Acoustic Panels', description: 'Sound-absorbing ceiling tiles' },
        { name: 'LED Integration', description: 'Modern lighting solutions' },
        { name: 'Decorative Elements', description: 'Custom design features' }
      ],
      timeline: '1-3 weeks',
      priceRange: '₹15-35 per sq ft',
      applications: ['Offices', 'Retail Spaces', 'Healthcare', 'Educational', 'Residential']
    },
    {
      id: 'windows-doors',
      icon: Square,
      title: 'Windows & Doors',
      subtitle: 'Premium frames and custom designs',
      description: 'High-quality aluminum frames and wooden doors designed for durability, security, and style.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80',
      ],
      features: [
        'Energy Efficient Double Glazing',
        'Multi-Point Locking Systems',
        'Weather Resistant Sealing',
        'Custom Sizes & Configurations',
        'Powder Coated Finishes',
        '10-Year Warranty Coverage'
      ],
      materials: [
        { name: 'Aluminum Frames', description: 'Thermally broken, powder coated' },
        { name: 'Hardwood Doors', description: 'Solid wood construction' },
        { name: 'Glass Options', description: 'Double glazed, tinted, frosted' },
        { name: 'Hardware', description: 'Premium locks and handles' }
      ],
      timeline: '2-4 weeks',
      priceRange: '₹400-1,200 per unit',
      applications: ['Residential', 'Commercial', 'Industrial', 'Hospitality', 'Healthcare']
    },
    {
      id: 'wall-panels',
      icon: DoorOpen,
      title: 'Wall Panels',
      subtitle: 'Stunning textures and finishes',
      description: 'Wood cladding and aluminum composite panels that create striking visual impact and lasting beauty.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      ],
      features: [
        'Moisture & Humidity Resistant',
        'Easy Maintenance & Cleaning',
        'Various Textures & Patterns',
        'Eco-Friendly Material Options',
        'Fire Retardant Properties',
        'Quick Installation System'
      ],
      materials: [
        { name: 'Wood Cladding', description: 'Natural and engineered wood' },
        { name: 'Aluminum Composite', description: 'Lightweight, durable panels' },
        { name: 'Acoustic Panels', description: 'Sound dampening options' },
        { name: 'Decorative Finishes', description: 'Custom colors and textures' }
      ],
      timeline: '1-2 weeks',
      priceRange: '₹25-60 per sq ft',
      applications: ['Lobbies', 'Restaurants', 'Retail', 'Offices', 'Homes']
    },
    {
      id: 'custom-millwork',
      icon: Wrench,
      title: 'Custom Millwork',
      subtitle: 'Bespoke furniture and storage',
      description: 'Built-in storage solutions, decorative elements, and custom furniture crafted to your exact specifications.',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      ],
      features: [
        'Tailored Design Process',
        'Premium Quality Materials',
        'Expert Craftsmanship',
        'Perfect Fit Guarantee',
        'Comprehensive Installation',
        'Lifetime Craftsmanship Warranty'
      ],
      materials: [
        { name: 'Hardwood Selection', description: 'Oak, maple, cherry, walnut' },
        { name: 'Engineered Wood', description: 'Stable, eco-friendly options' },
        { name: 'Hardware', description: 'Soft-close hinges, quality slides' },
        { name: 'Finishes', description: 'Stains, paints, protective coatings' }
      ],
      timeline: '3-6 weeks',
      priceRange: '₹100-300 per linear ft',
      applications: ['Built-ins', 'Closets', 'Entertainment Centers', 'Offices', 'Kitchens']
    }
  ];

  const currentService = services.find(s => s.id === selectedService) || services[0];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Premium Services</h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Comprehensive aluminum and wood interior solutions designed to transform your space 
            with exceptional craftsmanship and attention to detail.
          </p>
        </div>
      </section>

      {/* Service Navigation */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedService === service.id
                    ? 'border-amber-600 bg-amber-50 shadow-lg'
                    : 'border-gray-200 hover:border-amber-300 hover:bg-gray-50'
                }`}
              >
                <service.icon className={`w-8 h-8 mx-auto mb-2 ${
                  selectedService === service.id ? 'text-amber-600' : 'text-gray-600'
                }`} />
                <div className={`font-semibold text-sm ${
                  selectedService === service.id ? 'text-amber-900' : 'text-gray-700'
                }`}>
                  {service.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service View */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Service Details */}
            <div>
              <div className="flex items-center mb-4">
                <currentService.icon className="w-10 h-10 text-amber-600 mr-4" />
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{currentService.title}</h2>
                  <p className="text-lg text-amber-600">{currentService.subtitle}</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {currentService.description}
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-6 h-6 text-amber-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Timeline</div>
                    <div className="text-gray-600">{currentService.timeline}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <IndianRupee className="w-6 h-6 text-amber-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Price Range</div>
                    <div className="text-gray-600">{currentService.priceRange}</div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentService.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {currentService.applications.map((app, index) => (
                    <Badge key={index} variant="secondary" className="bg-amber-100 text-amber-800">
                      {app}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 flex-1">
                  Get Quote for {currentService.title}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  View Portfolio
                </Button>
              </div>
            </div>

            {/* Visual Content */}
            <div>
              {/* Main Image */}
              <div className="relative mb-6 rounded-xl overflow-hidden shadow-xl">
                <img
                  src={currentService.image}
                  alt={currentService.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium mb-1">Featured Project</div>
                  <div className="text-xs text-gray-200">Premium {currentService.title}</div>
                </div>
              </div>

              {/* Gallery */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {currentService.gallery.map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <img
                      src={image}
                      alt={`${currentService.title} ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>

              {/* Materials */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Palette className="w-5 h-5 mr-2 text-amber-600" />
                    Material Options
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {currentService.materials.map((material, index) => (
                      <div key={index} className="border-l-4 border-amber-200 pl-4">
                        <div className="font-semibold text-gray-900">{material.name}</div>
                        <div className="text-sm text-gray-600">{material.description}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compare Our Services</h2>
            <p className="text-lg text-gray-600">Choose the right solution for your project</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <service.icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.subtitle}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Timeline:</span>
                      <span className="font-medium">{service.timeline}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">From:</span>
                      <span className="font-medium text-amber-600">{service.priceRange.split('-')[0]}</span>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setSelectedService(service.id)}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-amber-100 mb-8">
            Contact us today for a free consultation and personalized quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Call (555) 123-4567
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
