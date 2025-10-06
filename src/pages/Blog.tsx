import React from 'react';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

export const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Strategies for Successful Digital Transformation',
      author: 'Sarah Johnson',
      date: '2025-09-20',
      readTime: '8 min read',
      category: 'Digital Strategy',
      excerpt: 'Digital transformation is no longer optional for businesses looking to stay competitive. Discover the key strategies that successful organizations use to navigate their digital journey.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Building a Resilient Business in Uncertain Times',
      author: 'Michael Chen',
      date: '2025-09-12',
      readTime: '6 min read',
      category: 'Business Strategy',
      excerpt: 'Learn how to build organizational resilience and adapt to changing market conditions while maintaining growth and profitability.',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'The Future of Work: Hybrid Models and Remote Teams',
      author: 'Emma Williams',
      date: '2025-09-05',
      readTime: '7 min read',
      category: 'Organizational Development',
      excerpt: 'Explore the evolving landscape of work and how companies are successfully implementing hybrid and remote work models.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'Data-Driven Decision Making: A Practical Guide',
      author: 'David Martinez',
      date: '2025-08-28',
      readTime: '9 min read',
      category: 'Analytics',
      excerpt: 'Harness the power of data to make informed decisions that drive business growth. A comprehensive guide to implementing data-driven strategies.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'Sustainability in Business: More Than a Trend',
      author: 'Lisa Anderson',
      date: '2025-08-20',
      readTime: '5 min read',
      category: 'Sustainability',
      excerpt: 'Why sustainability should be at the core of your business strategy and how to implement meaningful environmental and social initiatives.',
      image: 'https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'Customer Experience: The New Competitive Advantage',
      author: 'James Taylor',
      date: '2025-08-15',
      readTime: '6 min read',
      category: 'Customer Strategy',
      excerpt: 'In today\'s market, customer experience is the ultimate differentiator. Learn how to create memorable experiences that drive loyalty and growth.',
      image: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 7,
      title: 'Leadership in the Age of Change',
      author: 'Rachel Brown',
      date: '2025-08-08',
      readTime: '7 min read',
      category: 'Leadership',
      excerpt: 'What does effective leadership look like in today\'s rapidly changing business environment? Insights from industry leaders.',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 8,
      title: 'Optimizing Operations for Maximum Efficiency',
      author: 'Thomas Wilson',
      date: '2025-08-01',
      readTime: '8 min read',
      category: 'Operations',
      excerpt: 'Discover proven methodologies and best practices for streamlining operations and eliminating waste in your organization.',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 9,
      title: 'Innovation Culture: How to Foster Creativity',
      author: 'Jennifer Davis',
      date: '2025-07-25',
      readTime: '6 min read',
      category: 'Innovation',
      excerpt: 'Building a culture where innovation thrives requires intentional effort. Learn how to create an environment that encourages creative thinking.',
      image: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const categories = ['All', 'Digital Strategy', 'Business Strategy', 'Leadership', 'Innovation'];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Our Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights, practical tips, and thought leadership on business consulting, strategy, and transformation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {blogPosts.slice(0, 2).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 mt-4 mb-3 group-hover:text-blue-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <button className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors">
                      Read
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(2).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3 group-hover:text-blue-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex flex-col gap-2 pt-4 border-t border-gray-100 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  <button className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors mt-4">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to Our Blog</h2>
          <p className="text-gray-600 mb-6">
            Get the latest articles and insights delivered straight to your inbox. No spam, just valuable content.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
