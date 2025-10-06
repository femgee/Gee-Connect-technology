import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Target, Users, Award, Star, Mail, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';
import { useServices } from '../hooks/useServices';

export const Home: React.FC = () => {
  const { services, loading: servicesLoading } = useServices();
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

  const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      Target: <Target className="h-8 w-8" />,
      Users: <Users className="h-8 w-8" />,
      Award: <Award className="h-8 w-8" />
    };
    return icons[iconName] || <Target className="h-8 w-8" />;
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Business with
              <span className="text-blue-700 block mt-2">Professional Excellence</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We deliver innovative solutions and strategic guidance to help your business thrive in today's competitive landscape. Partner with us for sustainable growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-medium rounded-lg border-2 border-blue-700 hover:bg-blue-50 transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive solutions designed to elevate your business and drive measurable results.
            </p>
          </div>

          {servicesLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-8 rounded-xl border border-gray-200 animate-pulse">
                  <div className="w-8 h-8 bg-gray-300 rounded mb-4"></div>
                  <div className="h-6 bg-gray-300 rounded mb-3"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="text-blue-700 mb-4 group-hover:scale-110 transition-transform duration-200">
                    {getIconComponent(service.icon)}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
              <p className="text-lg text-gray-600 mb-6">
                With over a decade of experience in business consulting and strategic development, we have helped hundreds of companies achieve their goals and exceed their expectations.
              </p>
              <div className="space-y-4">
                {[
                  "Expert team with proven track record",
                  "Customized solutions for your needs",
                  "24/7 support and consultation",
                  "Competitive pricing and flexible terms"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <Star className="h-5 w-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-2 gap-8">
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
                  <div className="text-4xl font-bold text-blue-700 mb-2">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
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
              href="https://linkedin.com/company/hrj-consulting"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 group"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a
              href="https://facebook.com/hrjconsulting"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 group"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a
              href="https://twitter.com/hrjconsulting"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 group"
              aria-label="Follow us on Twitter"
            >
              <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a
              href="https://instagram.com/hrjconsulting"
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
