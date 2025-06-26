
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Contact form submitted');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-4567",
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@akashinteriors.com",
      description: "Send us your queries anytime"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Interior Design Street, Design City, DC 12345",
      description: "Visit our showroom and workshop"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Sat: 9AM - 6PM",
      description: "Sunday by appointment only"
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
                Contact Us
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to transform your space? Get in touch with us today for a free consultation and quote.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info and Form */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                        <p className="text-gray-800 font-medium">{info.details}</p>
                        <p className="text-gray-600 text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="mt-8">
                  <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="w-8 h-8 mx-auto mb-2" />
                      <p>Interactive Map Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input 
                            id="firstName" 
                            type="text" 
                            required 
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input 
                            id="lastName" 
                            type="text" 
                            required 
                            className="mt-1"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          required 
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="service">Service Interested In</Label>
                        <select 
                          id="service" 
                          className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
                        >
                          <option value="">Select a service</option>
                          <option value="aluminum-ceiling">Aluminum Ceiling</option>
                          <option value="wood-ceiling">Wood Ceiling</option>
                          <option value="windows-doors">Windows & Doors</option>
                          <option value="wall-panels">Wall Panels</option>
                          <option value="custom-millwork">Custom Millwork</option>
                          <option value="complete-interior">Complete Interior</option>
                        </select>
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <textarea 
                          id="message"
                          rows={4}
                          className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
                          placeholder="Tell us about your project..."
                          required
                        />
                      </div>
                      
                      <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-amber-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and let's discuss how we can transform your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="bg-white text-amber-600 hover:bg-gray-50">
                <Phone className="w-4 h-4 mr-2" />
                Call Now: (555) 123-4567
              </Button>
              <Button variant="outline" className="bg-white text-amber-600 hover:bg-gray-50">
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
