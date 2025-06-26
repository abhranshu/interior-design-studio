
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Shield, 
  Users, 
  Clock, 
  Wrench, 
  Palette, 
  CheckCircle, 
  Star,
  Truck,
  Phone
} from 'lucide-react';

const WhyChooseUs = () => {
  const uniqueSellingPoints = [
    {
      icon: Award,
      title: "15+ Years of Excellence",
      description: "Over a decade and a half of proven expertise in aluminum and wood interior solutions.",
      highlight: "Licensed & Insured",
      color: "amber"
    },
    {
      icon: Palette,
      title: "Design to Installation",
      description: "Complete end-to-end service from initial consultation to final installation and beyond.",
      highlight: "Full Service",
      color: "blue"
    },
    {
      icon: Wrench,
      title: "Master Craftsmen Team",
      description: "Skilled professionals with specialized expertise in both aluminum and wood working.",
      highlight: "Certified Experts",
      color: "green"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "We stand behind our work with comprehensive warranties and ongoing support.",
      highlight: "Lifetime Support",
      color: "purple"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Respect for your schedule with realistic timelines and punctual project completion.",
      highlight: "98% On-Time Rate",
      color: "red"
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Dedicated project managers and custom solutions tailored to your specific needs.",
      highlight: "1-on-1 Support",
      color: "indigo"
    }
  ];

  const certifications = [
    "Licensed General Contractor",
    "Insured & Bonded",
    "OSHA Safety Certified",
    "Green Building Certified",
    "Better Business Bureau A+",
    "Manufacturer Authorized"
  ];

  const processSteps = [
    {
      step: 1,
      title: "Free Consultation",
      description: "We visit your space to understand your vision and requirements",
      icon: Phone
    },
    {
      step: 2,
      title: "Custom Design",
      description: "Our team creates detailed plans and 3D visualizations",
      icon: Palette
    },
    {
      step: 3,
      title: "Material Selection",
      description: "Choose from premium aluminum and wood options",
      icon: CheckCircle
    },
    {
      step: 4,
      title: "Expert Installation",
      description: "Professional installation with minimal disruption",
      icon: Wrench
    },
    {
      step: 5,
      title: "Quality Assurance",
      description: "Final inspection and client walkthrough",
      icon: Star
    },
    {
      step: 6,
      title: "Ongoing Support",
      description: "Maintenance tips and warranty service",
      icon: Truck
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Premium Interiors?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just contractors – we're your partners in creating extraordinary spaces. 
            Here's what sets us apart from the competition.
          </p>
        </div>

        {/* Unique Selling Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {uniqueSellingPoints.map((point, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${point.color}-100 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <point.icon className={`w-8 h-8 text-${point.color}-600`} />
                </div>
                <Badge variant="secondary" className="mb-3 bg-amber-100 text-amber-800">
                  {point.highlight}
                </Badge>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Credentials */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Certified & Trusted Professionals
            </h3>
            <p className="text-gray-600">
              Our credentials and certifications ensure you're working with qualified experts.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Our Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h3>
            <p className="text-xl text-gray-600">
              From initial consultation to final walkthrough, we ensure every step is executed flawlessly.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-amber-200 h-full"></div>
            
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                              <step.icon className="w-6 h-6 text-amber-600" />
                            </div>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                              {step.title}
                            </h4>
                            <p className="text-gray-600">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Step Number */}
                  <div className="flex-shrink-0 mx-4 md:mx-0">
                    <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} hidden md:block`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-800 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Space?
          </h3>
          <p className="text-xl mb-6 text-amber-100">
            Join hundreds of satisfied customers who chose Premium Interiors for their projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Free Quote
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
