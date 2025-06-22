import React from 'react';
import { Phone, Clock, MapPin, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary-600 rounded-full mr-2" aria-hidden="true"></span>
              Trusted ENT Care Since 2010
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Expert ENT Care for
              <span className="text-primary-600 block">Better Health</span>
            </h1>
            
            <p className="text-lg text-accessible-secondary mb-8 max-w-lg mx-auto lg:mx-0">
              Experience world-class ear, nose, and throat care with our team of experienced specialists. 
              We provide comprehensive diagnosis and treatment for all ENT conditions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary flex items-center justify-center group transition-smooth">
                Book Appointment
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
              <button className="btn-secondary transition-smooth">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Stats & Info */}
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card text-center transition-smooth">
                <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-sm text-accessible-secondary">Years Experience</div>
              </div>
              <div className="card text-center transition-smooth">
                <div className="text-3xl font-bold text-primary-600 mb-2">10K+</div>
                <div className="text-sm text-accessible-secondary">Patients Treated</div>
              </div>
              <div className="card text-center transition-smooth">
                <div className="text-3xl font-bold text-primary-600 mb-2">5</div>
                <div className="text-sm text-accessible-secondary">Expert Doctors</div>
              </div>
              <div className="card text-center transition-smooth">
                <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-sm text-accessible-secondary">Emergency Care</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="card">
              <h3 className="text-lg font-semibold text-accessible mb-4">Quick Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center" aria-hidden="true">
                    <Phone className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-sm text-accessible-secondary">Emergency</div>
                    <div className="font-medium text-accessible">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center" aria-hidden="true">
                    <Clock className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-sm text-accessible-secondary">Working Hours</div>
                    <div className="font-medium text-accessible">Mon-Sat: 9AM-7PM</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center" aria-hidden="true">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-sm text-accessible-secondary">Location</div>
                    <div className="font-medium text-accessible">Hyderabad, Telangana</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 