import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export const News: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      title: 'AI Revolution: ChatGPT-5 Launches with Groundbreaking Features',
      date: '2025-09-15',
      category: 'AI & ML',
      excerpt: 'OpenAI unveils ChatGPT-5, bringing revolutionary advances in natural language understanding and multimodal capabilities that set new standards for AI assistants.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Apple Unveils iPhone 16 with Revolutionary Battery Technology',
      date: '2025-08-28',
      category: 'Mobile Tech',
      excerpt: 'Apple announces the iPhone 16 featuring solid-state battery technology that provides 48-hour battery life and charges to 80% in just 15 minutes.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Quantum Computing Breakthrough: IBM Achieves 1000-Qubit Processor',
      date: '2025-08-10',
      category: 'Quantum Computing',
      excerpt: 'IBM announces a major quantum computing breakthrough with their new 1000-qubit processor, opening doors to practical applications in drug discovery and cryptography.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'Tesla Robotaxi Network Goes Live in Major Cities',
      date: '2025-07-22',
      category: 'Autonomous Vehicles',
      excerpt: 'Tesla launches its fully autonomous robotaxi service in 15 major cities, marking a historic milestone in self-driving technology and urban transportation.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'Meta Introduces Next-Gen VR Headset with Brain-Computer Interface',
      date: '2025-07-05',
      category: 'Virtual Reality',
      excerpt: 'Meta reveals Quest Pro 2 featuring revolutionary brain-computer interface technology that allows users to control virtual environments with thought alone.',
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'SpaceX Starship Successfully Completes First Mars Landing',
      date: '2025-06-18',
      category: 'Space Tech',
      excerpt: 'SpaceX makes history as Starship successfully lands on Mars, marking the first step toward establishing a permanent human presence on the Red Planet.',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Latest News</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with breaking technology news, innovations, and insights from around the world.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(item.date)}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{item.excerpt}</p>
                  <button className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors">
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Informed</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter to receive the latest news, insights, and updates directly to your inbox.
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
