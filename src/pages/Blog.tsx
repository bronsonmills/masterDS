import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag } from 'lucide-react';

const posts = [
  {
    title: 'How AI is Revolutionizing Small Business Marketing',
    excerpt: 'Discover how artificial intelligence is making enterprise-level marketing accessible to small businesses...',
    category: 'AI Marketing',
    date: 'Mar 16, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    slug: 'ai-revolutionizing-small-business-marketing',
  },
  {
    title: '10 Essential Social Media Strategies for 2024',
    excerpt: 'Stay ahead of the curve with these proven social media marketing strategies that drive engagement...',
    category: 'Social Media',
    date: 'Mar 14, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    slug: 'essential-social-media-strategies-2024',
  },
  {
    title: 'The Complete Guide to Content Marketing with AI',
    excerpt: 'Learn how to leverage AI tools to create engaging, SEO-optimized content that converts...',
    category: 'Content Marketing',
    date: 'Mar 12, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    slug: 'complete-guide-content-marketing-ai',
  },
  {
    title: 'SEO Best Practices for Small Businesses',
    excerpt: 'A comprehensive guide to improving your search engine rankings and driving organic traffic...',
    category: 'SEO',
    date: 'Mar 10, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    slug: 'seo-best-practices-small-businesses',
  },
];

const categories = [
  'All',
  'AI Marketing',
  'Social Media',
  'Content Marketing',
  'SEO',
  'Email Marketing',
  'Analytics',
];

export default function Blog() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative bg-blue-600 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl">
              Marketing Insights & Resources
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-blue-200 sm:mt-4">
              Expert tips, guides, and strategies to help you succeed in digital marketing
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full text-sm font-medium transition-colors
                       hover:bg-blue-100 hover:text-blue-800
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                       ${category === 'All' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Link to={`/blog/${post.slug}`}>
                <div className="relative h-48">
                  <img
                    className="w-full h-full object-cover"
                    src={post.image}
                    alt={post.title}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Stay Updated
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              Get the latest marketing tips and strategies delivered to your inbox.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <input
                  type="email"
                  className="px-5 py-3 border border-transparent text-base font-medium rounded-l-md text-gray-900 bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
                <button className="px-5 py-3 border border-transparent text-base font-medium rounded-r-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}