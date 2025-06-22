import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      age: 45,
      condition: "Chronic Sinusitis",
      rating: 5,
      review: "Dr. Vamsi Krishna and his team provided exceptional care for my chronic sinusitis. The treatment was thorough and the staff was incredibly professional. I've been symptom-free for over a year now. Highly recommend!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Priya Patel",
      age: 32,
      condition: "Hearing Loss",
      rating: 5,
      review: "After struggling with hearing loss for months, Dr. Vamsi's expertise helped me get the right diagnosis and treatment. The cochlear implant surgery was successful and the follow-up care has been excellent. My quality of life has improved dramatically.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Amit Kumar",
      age: 28,
      condition: "Sleep Apnea",
      rating: 5,
      review: "I was suffering from severe sleep apnea which was affecting my daily life. The team at VAMSI ENT Hospital diagnosed the issue and provided a comprehensive treatment plan. Now I sleep better and feel more energetic throughout the day.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      age: 35,
      condition: "Voice Disorder",
      rating: 5,
      review: "As a teacher, my voice is crucial for my profession. When I developed a voice disorder, Dr. Anjali Patel provided excellent care and therapy. The treatment was effective and I'm back to teaching with confidence. Thank you!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Rajesh Verma",
      age: 50,
      condition: "Thyroid Surgery",
      rating: 5,
      review: "The thyroid surgery performed by Dr. Vamsi was flawless. The pre-operative care, surgery, and post-operative follow-up were all excellent. The hospital facilities are world-class and the staff is very caring.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Meera Singh",
      age: 38,
      condition: "Pediatric ENT",
      rating: 5,
      review: "Dr. Priya Sharma treated my 8-year-old son for adenoid issues. Her gentle approach and expertise made the entire process comfortable for both my son and us. The surgery was successful and recovery was quick.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
            Patient Reviews
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read testimonials from our satisfied patients who have experienced exceptional care 
            and treatment at VAMSI ENT Hospital.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="card relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Testimonial Content */}
            <div className="pt-8">
              <div className="flex items-center mb-6">
                <img 
                  src={currentTestimonial.image} 
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-gray-600">
                    {currentTestimonial.age} years • {currentTestimonial.condition}
                  </p>
                </div>
                <div className="ml-auto flex items-center">
                  {[...Array(currentTestimonial.rating)].map((_, index) => (
                    <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                "{currentTestimonial.review}"
              </blockquote>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <div className="text-sm text-gray-500">
                {currentIndex + 1} of {testimonials.length}
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 bg-gray-100 hover:bg-primary-100 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 bg-gray-100 hover:bg-primary-100 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Overall Rating */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Overall Patient Satisfaction
            </h3>
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center mr-4">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">4.9/5</span>
            </div>
            <p className="text-gray-600 mb-4">
              Based on {testimonials.length * 200}+ verified patient reviews
            </p>
            <button className="btn-primary">
              Read All Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 