import React, { useState } from 'react';
import { Award, Users, Target, TrendingUp, Shield, Lightbulb, Mail, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';

export const About: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Integrity',
      description: 'We uphold the highest standards of honesty and ethical behavior in all our dealings.'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation',
      description: 'We constantly seek creative solutions and embrace new technologies to serve our clients better.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, fostering open communication and mutual respect.'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We are committed to delivering exceptional quality in every project we undertake.'
    }
  ];

  const milestones = [
    { year: '2015', event: 'Launched Gee-Connect as a technology news platform' },
    { year: '2017', event: 'Expanded coverage to global tech markets and innovations' },
    { year: '2019', event: 'Reached milestone of 1M monthly readers' },
    { year: '2022', event: 'Launched video content and podcast series' },
    { year: '2025', event: 'Became a leading voice in technology journalism with 5M+ monthly readers' }
  ];

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">About Gee-Connect</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your source for the latest technology news and insights.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Gee-Connect was founded with a clear mission: to keep you informed about the latest technology trends, innovations, and breakthroughs shaping our digital future.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                What started as a passion for technology has grown into a comprehensive platform for tech enthusiasts, professionals, and anyone curious about the digital world. Our team of tech journalists and industry experts delivers accurate, timely, and insightful coverage.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe technology should be accessible to everyone, which is why we present complex topics in clear, engaging ways that help you stay ahead in this rapidly evolving landscape.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-700 mb-2">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-700 mb-2">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-700 mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-700 mb-2">25+</div>
                  <div className="text-gray-600">Industries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-blue-700 mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">
              Key milestones that shaped our growth and success.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-bold text-blue-700">{milestone.year}</div>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-4 h-4 bg-blue-700 rounded-full"></div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-blue-200 my-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <p className="text-gray-700 text-lg">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Mail className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Subscribe to Latest News</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Stay updated with our latest insights, news, and industry trends. Join our community and never miss an update.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            {submitMessage && (
              <p className="mt-4 text-sm font-medium bg-white/20 rounded-lg py-2 px-4 inline-block">
                {submitMessage}
              </p>
            )}
          </form>

          <div className="flex justify-center items-center gap-4 mb-6">
            <a
              href="https://linkedin.com/company/gee-connect"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 group"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a
              href="https://facebook.com/geeconnect"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 group"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a
              href="https://twitter.com/geeconnect"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 group"
              aria-label="Follow us on Twitter"
            >
              <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a
              href="https://instagram.com/geeconnect"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 group"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
            </a>
          </div>

          <p className="text-sm opacity-75">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </>
  );
};
