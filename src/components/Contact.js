import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+91 98765 43210 (Emergency)",
        "+91 98765 43211 (Appointments)",
        "+91 98765 43212 (General)"
      ]
    },
    {
      icon: Mail,
      title: "Email Address",
      details: [
        "info@vamsient.com",
        "appointments@vamsient.com",
        "emergency@vamsient.com"
      ]
    },
    {
      icon: MapPin,
      title: "Hospital Address",
      details: [
        "VAMSI ENT Hospital",
        "123 Medical Center Road",
        "Hyderabad, Telangana 500001",
        "India"
      ]
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Monday - Saturday: 9:00 AM - 7:00 PM",
        "Sunday: 10:00 AM - 2:00 PM",
        "Emergency: 24/7"
      ]
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-primary-600 rounded-full mr-2" aria-hidden="true"></span>
            Get In Touch
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-accessible mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-accessible-secondary max-w-2xl mx-auto">
            Have questions or need to schedule an appointment? We're here to help. 
            Reach out to us through any of the following channels.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-accessible mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <info.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-accessible mb-2">
                      {info.title}
                    </h4>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-accessible-secondary">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-accessible mb-4">Location</h4>
              <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" aria-hidden="true" />
                  <p className="text-accessible-secondary">Interactive Map</p>
                  <p className="text-sm text-gray-500">Google Maps integration</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-accessible mb-8">
              Send us a Message
            </h3>
            
            {isSubmitted ? (
              <div className="card text-center">
                <CheckCircle className="w-16 h-16 text-accent-600 mx-auto mb-4" aria-hidden="true" />
                <h4 className="text-xl font-semibold text-accessible mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-accessible-secondary">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-accessible mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Enter your full name"
                      aria-describedby="name-help"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-accessible mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Enter your email"
                      aria-describedby="email-help"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-accessible mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-accessible mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    >
                      <option value="">Select a subject</option>
                      <option value="appointment">Book Appointment</option>
                      <option value="consultation">General Consultation</option>
                      <option value="emergency">Emergency Care</option>
                      <option value="billing">Billing & Insurance</option>
                      <option value="feedback">Feedback & Complaints</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-accessible mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="form-input resize-none"
                    placeholder="Please describe your inquiry or concern..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center group transition-smooth"
                >
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 max-w-4xl mx-auto border border-red-100">
            <h3 className="text-2xl font-bold text-accessible mb-4">
              Emergency Contact
            </h3>
            <p className="text-accessible-secondary mb-6">
              For medical emergencies, please call our 24/7 emergency hotline immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-red-600" aria-hidden="true" />
                <span className="text-lg font-semibold text-red-600">+91 98765 43210</span>
              </div>
              <span className="text-gray-500">|</span>
              <span className="text-sm text-accessible-secondary">Available 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 