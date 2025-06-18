import React from 'react';
import { Camera, Users, Award, Code, Heart, Star } from 'lucide-react';

const Gallery = () => {
  const galleryItems = [
    {
      title: 'Day 1: Coding Our First Project!',
      description: 'The excitement of writing your first lines of code',
      icon: Code,
      color: 'primary',
      gradient: 'from-primary-400 to-primary-600'
    },
    {
      title: 'STEM Scavenger Hunt',
      description: 'Team building through fun problem-solving activities',
      icon: Users,
      color: 'teal',
      gradient: 'from-teal-400 to-teal-600'
    },
    {
      title: 'Project Presentations',
      description: 'Showcasing amazing creations with confidence',
      icon: Award,
      color: 'pink',
      gradient: 'from-pink-400 to-pink-600'
    },
    {
      title: 'Guest Speaker Session',
      description: 'Learning from inspiring women in tech',
      icon: Star,
      color: 'yellow',
      gradient: 'from-yellow-400 to-yellow-600'
    },
    {
      title: 'Team Collaboration',
      description: 'Working together to solve coding challenges',
      icon: Heart,
      color: 'primary',
      gradient: 'from-primary-400 to-teal-500'
    },
    {
      title: 'Celebration Day',
      description: 'Celebrating achievements and new friendships',
      icon: Camera,
      color: 'pink',
      gradient: 'from-pink-400 to-yellow-500'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-primary-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-pink-600 bg-clip-text text-transparent">
            Camp Highlights & Memories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A glimpse into the fun, learning, and friendships that make our camp special
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  {/* Image Placeholder */}
                  <div className={`h-48 bg-gradient-to-br ${item.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <Icon className="h-16 w-16 text-white opacity-80 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <Camera className="h-12 w-12 text-primary-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Share Your Camp Memories!
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We love seeing the amazing projects and friendships that develop during camp. 
              Photos and videos will be shared with families throughout the program 
              (with proper permissions, of course!).
            </p>
            <div className="bg-gradient-to-r from-primary-50 to-teal-50 rounded-lg p-4">
              <p className="text-sm text-gray-700 font-medium">
                📸 All camp photos will be available in our shared Google Photos album
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;