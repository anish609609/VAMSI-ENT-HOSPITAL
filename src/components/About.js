import React from 'react';
import { Award, Users, Clock, Heart, Shield, Target } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "15,000+",
      label: "Patients Treated",
      description: "Successfully treated patients with various ENT conditions"
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      description: "Decades of medical excellence and patient care"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Emergency Care",
      description: "Round-the-clock emergency services available"
    },
    {
      icon: Heart,
      number: "98%",
      label: "Patient Satisfaction",
      description: "High satisfaction rate from our patients"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every decision we make is focused on providing the best possible care for our patients."
    },
    {
      icon: Shield,
      title: "Medical Excellence",
      description: "We maintain the highest standards of medical practice and patient safety."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We embrace the latest medical technologies and treatment methods."
    },
    {
      icon: Users,
      title: "Compassion",
      description: "We treat every patient with empathy, respect, and understanding."
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
              About Us
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Trusted ENT Care Since 2010
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              VAMSI ENT Hospital was established with a vision to provide world-class ear, nose, and throat care 
              to the community. Founded by Dr. Vamsi Krishna, our hospital has grown from a small clinic to a 
              comprehensive ENT care center serving thousands of patients.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Over the years, we have invested in state-of-the-art medical equipment and assembled a team of 
              highly qualified specialists. Our commitment to medical excellence, patient safety, and compassionate 
              care has made us a trusted name in ENT healthcare.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.slice(0, 2).map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg mb-6 leading-relaxed">
                To provide exceptional ENT care through advanced medical technology, experienced specialists, 
                and compassionate patient-centered approach, ensuring the best possible outcomes for every patient.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                To be the leading ENT care provider, recognized for medical excellence, innovation, and 
                unwavering commitment to patient well-being and community health.
              </p>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-300 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="card text-center group hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl mx-auto mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These fundamental principles guide everything we do and ensure we provide the highest quality care to our patients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="card text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                <value.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {value.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Experience the Difference
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of satisfied patients who have trusted us with their ENT care. 
              Schedule your appointment today and experience our commitment to excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Book Your Visit
              </button>
              <button className="btn-secondary">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 