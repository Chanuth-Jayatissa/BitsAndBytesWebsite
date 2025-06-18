import React from 'react';
import { ChevronDown, Sparkles, Code, Heart, Star } from 'lucide-react';

const Hero = () => {
  const scrollToResources = () => {
    document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-primary-300 animate-float">
          <Code className="h-8 w-8" />
        </div>
        <div className="absolute top-32 right-20 text-teal-300 animate-bounce-slow">
          <Sparkles className="h-6 w-6" />
        </div>
        <div className="absolute bottom-40 left-20 text-pink-300 animate-pulse-slow">
          <Heart className="h-7 w-7" />
        </div>
        <div className="absolute top-40 right-10 text-yellow-400 animate-float" style={{ animationDelay: '2s' }}>
          <Star className="h-5 w-5" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-600 via-teal-600 to-pink-600 bg-clip-text text-transparent">
              Bits and Bytes
            </span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">
            Middle School Girls' Summer Coding Camp
          </h2>
          
          {/* Organization */}
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Organized by{' '}
            <span className="font-semibold text-primary-600">Eastern Michigan University's</span>{' '}
            Computer Science Department
          </p>

          {/* Mission Statement */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/20 mb-10 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Bits and Bytes is a one-of-a-kind summer camp introducing middle school girls to coding, 
              creativity, and problem-solving in a fun, inclusive, and supportive environment.
            </p>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={scrollToResources}
              className="bg-gradient-to-r from-primary-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Access Links</span>
              <ChevronDown className="h-5 w-5 animate-bounce" />
            </button>
            
            <div className="text-xl font-medium bg-gradient-to-r from-pink-600 to-yellow-600 bg-clip-text text-transparent">
              Explore. Code. Create.
            </div>
          </div>

          {/* Hero Illustration Placeholder */}
          <div className="bg-gradient-to-br from-primary-100 via-teal-50 to-pink-100 rounded-3xl p-8 sm:p-12 shadow-lg">
            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-600">
              <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
                <Code className="h-12 w-12 text-primary-500 mb-2" />
                <span className="font-medium">Learn to Code</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
                <Sparkles className="h-12 w-12 text-teal-500 mb-2" />
                <span className="font-medium">Be Creative</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
                <Heart className="h-12 w-12 text-pink-500 mb-2" />
                <span className="font-medium">Build Community</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;