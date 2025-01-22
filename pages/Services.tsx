import React from 'react';
import { Bot, Calendar, LineChart, Megaphone, PenTool, Search } from 'lucide-react';
import Button from '../components/Button';

const services = [
  {
    icon: <Bot className="h-8 w-8 text-blue-500" />,
    title: 'AI-Powered Content Generation',
    description: 'Create engaging, SEO-optimized content for your website, blog, and social media using advanced AI technology.',
    features: [
      'Custom content tailored to your brand voice',
      'SEO optimization built-in',
      'Multi-platform content adaptation',
      'Rapid content generation',
    ],
  },
  {
    icon: <Calendar className="h-8 w-8 text-blue-500" />,
    title: '30-Day Content Calendar',
    description: 'Get a strategic content plan that keeps your audience engaged and your brand consistent across all channels.',
    features: [
      'Customized posting schedule',
      'Content theme planning',
      'Hashtag strategy',
      'Engagement optimization',
    ],
  },
  {
    icon: <LineChart className="h-8 w-8 text-blue-500" />,
    title: 'Digital Marketing Analytics',
    description: 'Track and analyze your marketing performance with comprehensive analytics and actionable insights.',
    features: [
      'Real-time performance tracking',
      'Competitor analysis',
      'ROI measurement',
      'Custom reporting',
    ],
  },
  {
    icon: <Search className="h-8 w-8 text-blue-500" />,
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings with our AI-driven SEO strategies and tools.',
    features: [
      'Keyword research and analysis',
      'On-page optimization',
      'Technical SEO audit',
      'Local SEO optimization',
    ],
  },
  {
    icon: <Megaphone className="h-8 w-8 text-blue-500" />,
    title: 'Social Media Management',
    description: 'Manage and grow your social media presence with our AI-powered tools and expert strategies.',
    features: [
      'Content scheduling',
      'Engagement monitoring',
      'Community management',
      'Performance analytics',
    ],
  },
  {
    icon: <PenTool className="h-8 w-8 text-blue-500" />,
    title: 'Brand Strategy',
    description: 'Develop a strong, consistent brand presence across all digital channels.',
    features: [
      'Brand voice development',
      'Visual identity guidelines',
      'Content style guide',
      'Brand messaging framework',
    ],
  },
];

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl">
              AI-Powered Marketing Services
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-blue-200 sm:mt-4">
              Transform your digital presence with our comprehensive suite of AI-driven marketing services
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-50 rounded-md p-3">
                    {service.icon}
                  </div>
                  <h3 className="ml-4 text-xl font-medium text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-4 text-base text-gray-500">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <svg
                        className="h-5 w-5 text-blue-500 mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button variant="primary" size="lg" className="w-full">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-blue-200">Let's discuss your marketing goals.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Button variant="secondary" size="lg">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}