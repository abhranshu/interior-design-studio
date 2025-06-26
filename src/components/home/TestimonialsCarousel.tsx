
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      location: "Hillcrest Estates",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?auto=format&fit=crop&w=150&q=80",
      text: "Premium Interiors transformed our home completely. The attention to detail in their wood and aluminum work is exceptional. The team was professional, punctual, and the quality exceeded our expectations. Our friends can't stop complimenting the beautiful ceiling design!",
      project: "Residential Ceiling & Wall Panels"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Owner",
      location: "Downtown Business Center",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      text: "We hired Premium Interiors for our office renovation and they delivered beyond our imagination. The modern aluminum ceiling with integrated lighting created exactly the professional atmosphere we wanted. The project was completed on time and within budget.",
      project: "Commercial Office Renovation"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Interior Designer",
      location: "Design District",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      text: "As an interior designer, I've worked with many contractors, but Premium Interiors stands out for their craftsmanship and reliability. Their custom millwork is absolutely stunning, and they always deliver on their promises. I recommend them to all my clients.",
      project: "Custom Millwork & Panels"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Restaurant Owner",
      location: "Gourmet District",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      text: "The restaurant renovation by Premium Interiors has completely changed our business. The warm wood panels combined with modern aluminum accents created the perfect ambiance. Our customers love the new atmosphere, and bookings have increased significantly!",
      project: "Restaurant Interior Design"
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Property Manager",
      location: "Corporate Plaza",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
      text: "Managing multiple properties, I need contractors I can trust. Premium Interiors has consistently delivered excellent work across all our locations. Their expertise in both aluminum and wood solutions makes them our go-to choice for any interior project.",
      project: "Multi-Property Renovation"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Architect",
      location: "Design Studio",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
      text: "Premium Interiors brings my architectural visions to life with precision and artistry. Their technical expertise and creative problem-solving make them an invaluable partner. The quality of their work consistently impresses both me and my clients.",
      project: "Architectural Collaboration"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-amber-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Premium Interiors.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <Quote className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 font-medium">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="flex justify-center mb-4">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={testimonials[currentTestimonial].avatar} alt={testimonials[currentTestimonial].name} />
                  <AvatarFallback>
                    {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                  <p className="text-sm text-amber-600 font-medium">
                    {testimonials[currentTestimonial].project}
                  </p>
                  <p className="text-sm text-gray-500">{testimonials[currentTestimonial].location}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-amber-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-amber-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-amber-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <div className="text-4xl font-bold text-amber-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-amber-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-amber-600 mb-2">98%</div>
            <div className="text-gray-600">Project Completion Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
