import React from 'react';
import { Users, Award, Lightbulb, Target } from 'lucide-react';
import Button from '../components/Button';

const values = [
  {
    icon: <Users className="h-8 w-8 text-blue-500" />,
    title: 'Client-First Approach',
    description: 'We prioritize understanding your unique business needs and goals, ensuring our solutions are perfectly tailored to your success.',
  },
  {
    icon: <Award className="h-8 w-8 text-blue-500" />,
    title: 'Excellence in AI',
    description: 'Our team stays at the forefront of AI technology, bringing cutting-edge solutions that are practical and effective for small businesses.',
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-blue-500" />,
    title: 'Innovation',
    description: 'We continuously evolve our strategies and tools to keep your business ahead in the digital marketing landscape.',
  },
  {
    icon: <Target className="h-8 w-8 text-blue-500" />,
    title: 'Results-Driven',
    description: 'Our focus is on delivering measurable results that directly impact your business growth and success.',
  },
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-16 bg-blue-600 overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              We Help Small Businesses Thrive
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
              Our mission is to empower small businesses with enterprise-level AI marketing tools and strategies that drive real growth.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Founded by digital marketing veterans who saw a gap in the market: small businesses needed access to powerful AI marketing tools but couldn't afford enterprise solutions. We bridged that gap.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Today, we've helped hundreds of small businesses transform their digital presence using our AI-powered approach, making enterprise-level marketing accessible to all.
              </p>
              <div className="mt-8">
                <Button variant="primary" size="lg">
                  Join Our Success Story
                </Button>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                className="rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Team collaboration"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Values</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              These core principles guide everything we do to ensure your success.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500 text-center">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Meet Our Team</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              Experts in digital marketing, AI, and small business growth.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            <div className="space-y-4">
              <img
                className="mx-auto h-40 w-40 rounded-full lg:w-48 lg:h-48"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80"
                alt="Team member"
              />
              <div className="text-center">
                <h3 className="text-xl font-medium text-gray-900">Sarah Wilson</h3>
                <p className="text-base text-blue-600">CEO & Founder</p>
                <p className="mt-2 text-base text-gray-500">
                  Digital marketing strategist with 15+ years of experience.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <img
                className="mx-auto h-40 w-40 rounded-full lg:w-48 lg:h-48"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80"
                alt="Team member"
              />
              <div className="text-center">
                <h3 className="text-xl font-medium text-gray-900">David Chen</h3>
                <p className="text-base text-blue-600">Head of AI Strategy</p>
                <p className="mt-2 text-base text-gray-500">
                  AI specialist focused on marketing automation and optimization.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <img
                className="mx-auto h-40 w-40 rounded-full lg:w-48 lg:h-48"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80"
                alt="Team member"
              />
              <div className="text-center">
                <h3 className="text-xl font-medium text-gray-900">Emily Rodriguez</h3>
                <p className="text-base text-blue-600">Client Success Manager</p>
                <p className="mt-2 text-base text-gray-500">
                  Dedicated to ensuring our clients achieve their marketing goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}