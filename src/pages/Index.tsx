
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import ProjectShowcase from '@/components/home/ProjectShowcase';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import WhyChooseUs from '@/components/home/WhyChooseUs';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesOverview />
        <ProjectShowcase />
        <TestimonialsCarousel />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
