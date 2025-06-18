import React, { useState } from 'react';
import { Mail, Phone, MapPin, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What if I've never coded before?",
      answer: "Perfect! Our camp is designed specifically for beginners. We start with the basics and build up your skills step by step. No prior experience is needed – just curiosity and enthusiasm!"
    },
    {
      question: "Do I need to bring a laptop?",
      answer: "We'll provide all necessary equipment during in-person sessions. For virtual sessions, you'll need access to a computer with internet connection. We'll send detailed technical requirements before camp starts."
    },
    {
      question: "What will I learn during the camp?",
      answer: "You'll learn programming fundamentals using visual tools like Scratch, basic web development with HTML/CSS, problem-solving skills, teamwork, and get inspired by women leaders in technology."
    },
    {
      question: "Is there homework between sessions?",
      answer: "There are optional fun activities and projects you can work on, but nothing required! We encourage exploration and creativity at your own pace."
    },
    {
      question: "Can I continue learning after camp ends?",
      answer: "Absolutely! We provide resources for continued learning and can connect you with local coding clubs, online courses, and future EMU CS events."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-teal-600 bg-clip-text text-transparent">
            Contact & Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We're here to help make your camp experience amazing!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary-50 to-teal-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-500 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email Us</h4>
                    <p className="text-gray-600">bitsandbytes@emich.edu</p>
                    <p className="text-sm text-gray-500 mt-1">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-teal-500 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Call Us</h4>
                    <p className="text-gray-600">(734) 487-1063</p>
                    <p className="text-sm text-gray-500 mt-1">Monday-Friday, 9AM-5PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-pink-500 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Visit Us</h4>
                    <p className="text-gray-600">Computer Science Department</p>
                    <p className="text-gray-600">Eastern Michigan University</p>
                    <p className="text-gray-600">Ypsilanti, MI 48197</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Encouraging Message */}
            <div className="bg-gradient-to-r from-primary-500 to-teal-500 rounded-2xl p-8 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-center">We Can't Wait to Code with You! 💻✨</h3>
              <p className="text-center leading-relaxed opacity-95">
                Whether you're excited, nervous, or have a million questions – we're here for you every step of the way. 
                This camp is going to be an incredible journey of discovery, creativity, and friendship!
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
                <HelpCircle className="h-7 w-7 text-primary-500 mr-2" />
                Frequently Asked Questions
              </h3>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <span className="font-semibold text-gray-800">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-primary-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-primary-500 flex-shrink-0" />
                      )}
                    </button>
                    
                    {openFaq === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;