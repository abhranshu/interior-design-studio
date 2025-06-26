
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Users, Award, Clock, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We use only premium materials and maintain the highest standards in every project we undertake."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We respect your time and ensure all projects are completed within the agreed timeline."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our priority. We work closely with you to bring your vision to life."
    },
    {
      icon: Target,
      title: "Precision Work",
      description: "Every detail matters. Our skilled craftsmen ensure perfect installation and finishing."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Akash Interiors
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With over 20 years of expertise in aluminum and wood interiors, we transform spaces into stunning environments that reflect your style and needs.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                 Akash Interiors was founded in 2002 by our respected founder, Satyendra Kumar, who started with a vision to create beautiful, functional spaces. The company began its journey as a modest family-run aluminum workshop and has since transformed into a full-service interior design company.
                </p>
                <p className="text-gray-600 mb-4">
                  Over the years, we've expanded our expertise to include premium wood work, ceiling designs, custom millwork, and complete interior transformations. Our commitment to quality and customer satisfaction has earned us the trust of hundreds of satisfied clients.
                </p>
                <p className="text-gray-600">
                  Today, we continue to innovate and deliver exceptional results, combining traditional craftsmanship with modern techniques and materials.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="dsat.jpg" 
                  alt="Our workshop" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These core values guide everything we do and shape our approach to every project.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-amber-600 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
