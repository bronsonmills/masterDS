import React from 'react';
import Hero from '../components/Hero';
import { Zap, Target, TrendingUp, Download } from 'lucide-react';
import Button from '../components/Button';

const features = [
  {
    icon: <Zap className="h-6 w-6 text-white" />,
    title: 'AI-Powered Solutions',
    description: 'Leverage cutting-edge AI tools to automate and optimize your marketing efforts.',
  },
  {
    icon: <Target className="h-6 w-6 text-white" />,
    title: 'Targeted Strategies',
    description: 'Custom marketing plans designed specifically for your business goals.',
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-white" />,
    title: 'Measurable Results',
    description: 'Track your success with detailed analytics and performance metrics.',
  },
];

const testimonials = [
  {
    content: "The AI-powered tools have completely transformed how we handle our social media presence. We're seeing incredible results with half the effort.",
    author: "Sarah Johnson",
    role: "Founder",
    company: "Craft & Co",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    content: "Working with Decalogic Solutions has been a game-changer for our small business. Their expertise in AI marketing tools has helped us compete with much larger companies.",
    author: "Michael Chen",
    role: "CEO",
    company: "TechStart Solutions",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      
      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to succeed online
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-md shadow-lg">
                        {feature.icon}
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lead Magnet Section */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to boost your marketing?</span>
            <span className="block text-blue-200">Get your free marketing toolkit today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Button variant="secondary" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download Free Toolkit
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Trusted by Businesses Like Yours
            </h2>
          </div>
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="px-6 py-8">
                    <div className="relative text-lg font-medium text-gray-700">
                      <svg
                        className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="relative ml-4">{testimonial.content}</p>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-12 w-12 rounded-full"
                          src={testimonial.image}
                          alt={testimonial.author}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-base font-medium text-gray-900">
                          {testimonial.author}
                        </div>
                        <div className="text-base text-gray-500">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}