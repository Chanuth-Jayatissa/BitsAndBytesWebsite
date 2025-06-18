import React, { useState } from 'react';
import { 
  Calendar, 
  Video, 
  FolderOpen, 
  Code, 
  Play, 
  FileText, 
  ExternalLink,
  Clock,
  BookOpen,
  Send
} from 'lucide-react';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('schedule');

  const resourceCategories = [
    {
      id: 'schedule',
      title: 'Daily Schedule',
      icon: Calendar,
      color: 'primary',
      items: [
        { title: 'Week 1 Schedule', description: 'Daily activities and sessions', url: '#' },
        { title: 'Week 2 Schedule', description: 'Advanced projects and presentations', url: '#' },
        { title: 'Break Times & Snacks', description: 'Important timing information', url: '#' }
      ]
    },
    {
      id: 'meetings',
      title: 'Virtual Links',
      icon: Video,
      color: 'teal',
      items: [
        { title: 'Main Zoom Room', description: 'Daily morning sessions', url: '#' },
        { title: 'Breakout Room 1', description: 'Small group activities', url: '#' },
        { title: 'Office Hours', description: 'One-on-one help sessions', url: '#' }
      ]
    },
    {
      id: 'materials',
      title: 'Class Materials',
      icon: FolderOpen,
      color: 'pink',
      items: [
        { title: 'Google Drive Folder', description: 'All handouts and resources', url: '#' },
        { title: 'Project Templates', description: 'Starter files for activities', url: '#' },
        { title: 'Reference Guides', description: 'Quick coding references', url: '#' }
      ]
    },
    {
      id: 'coding',
      title: 'Coding Platforms',
      icon: Code,
      color: 'yellow',
      items: [
        { title: 'Scratch', description: 'Intro to programming, block-based coding', url: 'https://scratch.mit.edu/' },
        { title: 'Trinket', description: 'Web-based Python environment', url: 'https://trinket.io/python/0335427f719e' },
        { title: 'Ozoblockly', description: 'Block-based coding environment for Ozobots', url: 'https://ozoblockly.com/editor' },
        { title: 'BitsBox', description: 'JavaScript app builder', url: 'https://bitsbox.com/' },
        { title: 'Micro:bit', description: 'Micro:bit - hardware, embedded systems, IoT', url: 'https://microbit.org/' },
        { title: 'NeoCities', description: 'Website builder, HTML, CSS, JS', url: 'https://neocities.org/' }
      ]
    },
    {
      id: 'videos',
      title: 'Helpful Videos',
      icon: Play,
      color: 'primary',
      items: [
        { title: 'Getting Started Guide', description: 'Camp orientation video', url: '#' },
        { title: 'Coding Basics', description: 'Fundamental concepts explained', url: '#' },
        { title: 'Project Showcases', description: 'Examples from previous camps', url: '#' }
      ]
    },
    {
      id: 'forms',
      title: 'Forms & Surveys',
      icon: FileText,
      color: 'teal',
      items: [
        { title: 'Daily Check-in', description: 'How are you feeling today?', url: '#' },
        { title: 'Project Submission', description: 'Share your amazing work!', url: '#' },
        { title: 'Feedback Form', description: 'Help us improve the camp', url: '#' }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: 'bg-primary-500 text-primary-500 bg-primary-50 border-primary-200',
      teal: 'bg-teal-500 text-teal-500 bg-teal-50 border-teal-200',
      pink: 'bg-pink-500 text-pink-500 bg-pink-50 border-pink-200',
      yellow: 'bg-yellow-500 text-yellow-600 bg-yellow-50 border-yellow-200'
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  const activeCategory = resourceCategories.find(cat => cat.id === activeTab);

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-teal-600 bg-clip-text text-transparent">
            Camp Resources & Links
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for an amazing camp experience, organized and easy to find
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {resourceCategories.map((category) => {
            const colorClasses = getColorClasses(category.color);
            const Icon = category.icon;
            
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? `${colorClasses.split(' ')[0]} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="hidden sm:inline">{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Content */}
        {activeCategory && (
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className={`inline-flex p-4 rounded-full ${getColorClasses(activeCategory.color).split(' ')[0]} mb-4`}>
                <activeCategory.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{activeCategory.title}</h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeCategory.items.map((item, index) => {
                const colorClasses = getColorClasses(activeCategory.color);
                
                return (
                  <a
                    key={index}
                    href={item.url}
                    className={`block p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-2 ${colorClasses.split(' ')[3]}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-gray-800 text-lg">{item.title}</h4>
                      <ExternalLink className={`h-5 w-5 ${colorClasses.split(' ')[1]} flex-shrink-0 ml-2`} />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </a>
                );
              })}
            </div>
          </div>
        )}

        {/* Quick Access Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-teal-500 rounded-2xl p-6 sm:p-8 text-white shadow-lg">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <h3 className="text-xl font-bold mb-2">Need Help Finding Something?</h3>
              <p className="opacity-90">Don't hesitate to ask your mentors or check the main Google Drive folder!</p>
            </div>
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
              <BookOpen className="h-5 w-5" />
              <span className="font-medium">All Resources Available 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;