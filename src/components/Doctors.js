import React from 'react';
import { Star, Award, Calendar, Phone, Mail } from 'lucide-react';

const Doctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Vamsi Krishna",
      specialization: "Senior ENT Specialist & Hospital Director",
      experience: "20+ years",
      education: "MBBS, MS (ENT), Fellowship in Head & Neck Surgery",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      rating: 4.9,
      reviews: 1247,
      description: "Dr. Vamsi Krishna is a highly experienced ENT specialist with over two decades of practice. He specializes in complex head and neck surgeries, cochlear implants, and advanced endoscopic procedures. As the hospital director, he ensures the highest standards of patient care and medical excellence.",
      specializations: ["Head & Neck Surgery", "Cochlear Implants", "Endoscopic Surgery", "Cancer Treatment"],
      availability: "Mon-Sat: 9AM-6PM",
      phone: "+91 98765 43210",
      email: "dr.vamsi@vamsient.com"
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      specialization: "Pediatric ENT Specialist",
      experience: "12 years",
      education: "MBBS, MS (ENT), Fellowship in Pediatric ENT",
      image: "https://images.unsplash.com/photo-1594824475544-3c0b0c0c0c0c?w=400&h=400&fit=crop&crop=face",
      rating: 4.8,
      reviews: 892,
      description: "Dr. Priya specializes in treating children with ENT conditions. Her gentle approach and expertise in pediatric procedures make her a trusted choice for parents.",
      specializations: ["Pediatric ENT", "Adenoidectomy", "Ear Tubes", "Speech Therapy"],
      availability: "Mon-Fri: 10AM-4PM",
      phone: "+91 98765 43211",
      email: "dr.priya@vamsient.com"
    },
    {
      id: 3,
      name: "Dr. Rajesh Kumar",
      specialization: "Rhinology & Sinus Specialist",
      experience: "15 years",
      education: "MBBS, MS (ENT), Fellowship in Rhinology",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      rating: 4.7,
      reviews: 756,
      description: "Dr. Rajesh is an expert in nasal and sinus disorders. He performs advanced endoscopic sinus surgeries and specializes in allergy treatments.",
      specializations: ["Sinus Surgery", "Allergy Treatment", "Nasal Reconstruction", "Sleep Apnea"],
      availability: "Mon-Sat: 9AM-5PM",
      phone: "+91 98765 43212",
      email: "dr.rajesh@vamsient.com"
    },
    {
      id: 4,
      name: "Dr. Anjali Patel",
      specialization: "Voice & Swallowing Specialist",
      experience: "10 years",
      education: "MBBS, MS (ENT), Fellowship in Laryngology",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
      rating: 4.6,
      reviews: 634,
      description: "Dr. Anjali specializes in voice disorders and swallowing problems. She provides comprehensive care for professional voice users and patients with throat conditions.",
      specializations: ["Voice Disorders", "Swallowing Problems", "Laryngoscopy", "Voice Therapy"],
      availability: "Tue-Sat: 11AM-7PM",
      phone: "+91 98765 43213",
      email: "dr.anjali@vamsient.com"
    }
  ];

  return (
    <section id="doctors" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
            Our Team
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Doctors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our team of highly qualified ENT specialists brings years of experience and expertise 
            to provide you with the best possible care and treatment outcomes.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="card group hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Doctor Image */}
                <div className="lg:w-1/3">
                  <div className="relative">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="w-full h-64 lg:h-48 object-cover rounded-xl"
                    />
                    {doctor.id === 1 && (
                      <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Director
                      </div>
                    )}
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="lg:w-2/3">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {doctor.name}
                      </h3>
                      <p className="text-primary-600 font-medium mb-2">
                        {doctor.specialization}
                      </p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-900">{doctor.rating}</span>
                      <span className="text-sm text-gray-500">({doctor.reviews})</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {doctor.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="w-4 h-4 mr-2 text-primary-600" />
                      <span>{doctor.education}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-primary-600" />
                      <span>{doctor.experience} experience</span>
                    </div>
                  </div>

                  {/* Specializations */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Specializations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specializations.map((spec, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-primary-50 text-primary-700 text-xs rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact & Availability */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-primary-600" />
                      <span>{doctor.availability}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="w-4 h-4 mr-2 text-primary-600" />
                      <span>{doctor.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Mail className="w-4 h-4 mr-2 text-primary-600" />
                      <span>{doctor.email}</span>
                    </div>
                  </div>

                  {/* Book Appointment Button */}
                  <button className="btn-primary mt-4 w-full">
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Schedule Your Visit?
            </h3>
            <p className="text-gray-600 mb-6">
              Choose your preferred doctor and book an appointment at your convenience. 
              We offer flexible scheduling and online booking options.
            </p>
            <button className="btn-primary">
              Book Your Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors; 