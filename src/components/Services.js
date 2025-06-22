import React from 'react';
import { Ear, Eye, Heart, Brain, Activity, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Ear,
      title: "Ear Care & Treatment",
      description: "Comprehensive diagnosis and treatment for hearing loss, ear infections, tinnitus, and balance disorders.",
      features: ["Hearing Tests", "Ear Surgery", "Cochlear Implants", "Balance Therapy"]
    },
    {
      icon: Eye,
      title: "Nose & Sinus Care",
      description: "Expert treatment for sinusitis, nasal polyps, deviated septum, and allergic rhinitis.",
      features: ["Endoscopic Surgery", "Allergy Treatment", "Nasal Reconstruction", "Sleep Apnea"]
    },
    {
      icon: Heart,
      title: "Throat & Voice Care",
      description: "Specialized care for voice disorders, swallowing problems, and throat conditions.",
      features: ["Voice Therapy", "Laryngoscopy", "Tonsillectomy", "Speech Therapy"]
    },
    {
      icon: Brain,
      title: "Head & Neck Surgery",
      description: "Advanced surgical procedures for head and neck tumors, thyroid disorders, and facial reconstruction.",
      features: ["Tumor Removal", "Thyroid Surgery", "Facial Reconstruction", "Cancer Treatment"]
    },
    {
      icon: Activity,
      title: "Pediatric ENT",
      description: "Gentle and specialized care for children with ear, nose, and throat conditions.",
      features: ["Child-Friendly Care", "Adenoidectomy", "Ear Tubes", "Speech Development"]
    },
    {
      icon: Shield,
      title: "Emergency ENT Care",
      description: "24/7 emergency services for acute ENT conditions requiring immediate attention.",
      features: ["24/7 Availability", "Trauma Care", "Foreign Body Removal", "Emergency Surgery"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
            Our Services
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive ENT Care
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide a full range of ear, nose, and throat services using the latest medical technology 
            and evidence-based treatments to ensure the best outcomes for our patients.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Consultation?
            </h3>
            <p className="text-gray-600 mb-6">
              Schedule an appointment with our experienced ENT specialists for a comprehensive evaluation 
              and personalized treatment plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Book Consultation
              </button>
              <button className="btn-secondary">
                View All Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 