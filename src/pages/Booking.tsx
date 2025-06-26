
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Calendar, Clock, User, Phone, Mail, Home, MessageSquare } from 'lucide-react';
import Header from '@/components/layout/Header';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submission:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you! Your consultation request has been submitted. We will contact you soon.');
  };

  const serviceTypes = [
    'Aluminum Ceiling Design',
    'Wood Interior Solutions',
    'Windows & Doors',
    'Wall Panels',
    'Custom Millwork',
    'Complete Interior Renovation',
    'Other'
  ];

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Book Your Free Consultation
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Schedule a personalized consultation with our interior design experts. 
            We'll discuss your vision and provide you with a detailed proposal.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900">
                  Consultation Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>Full Name *</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="flex items-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>Phone Number *</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>Email Address *</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="address" className="flex items-center space-x-2">
                      <Home className="w-4 h-4" />
                      <span>Project Address</span>
                    </Label>
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Street address, City, State"
                      className="mt-1"
                    />
                  </div>

                  {/* Service Selection */}
                  <div>
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      required
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="mt-1 w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select a service</option>
                      {serviceTypes.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Scheduling */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="preferredDate" className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>Preferred Date *</span>
                      </Label>
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="preferredTime" className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>Preferred Time *</span>
                      </Label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        required
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="mt-1 w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="flex items-center space-x-2">
                      <MessageSquare className="w-4 h-4" />
                      <span>Additional Details</span>
                    </Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, budget, timeline, or any specific requirements..."
                      className="mt-1 w-full px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg font-semibold"
                  >
                    Schedule Free Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">What to Expect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Site Visit</h4>
                    <p className="text-sm text-gray-600">We'll visit your space to assess the requirements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Design Discussion</h4>
                    <p className="text-sm text-gray-600">Share your vision and explore design options</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex-shrink-0 flex items-center justify-center">
                    <span className="text-amber-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Custom Proposal</h4>
                    <p className="text-sm text-gray-600">Receive a detailed quote within 48 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">+91 9334298088</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">info.@akashinteriors.com</span>
                </div>
                <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                  <p className="text-sm text-amber-800">
                    <strong>Free Consultation:</strong> No obligation, completely free assessment of your project needs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
