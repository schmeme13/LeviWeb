import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Welcome to Our Physical Therapy Practice
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert physical therapy care tailored to your needs. We help you recover, 
              strengthen, and get back to doing what you love.
            </p>
            <Link
              to="/booking"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold 
                       hover:bg-blue-700 transition duration-300"
            >
              Schedule Your First Session
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Care</h3>
              <p className="text-gray-600">
                Licensed physical therapists with years of experience in various specialties.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Personalized Treatment</h3>
              <p className="text-gray-600">
                Custom treatment plans designed specifically for your needs and goals.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Modern Facility</h3>
              <p className="text-gray-600">
                State-of-the-art equipment and comfortable treatment spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions? We're here to help. Contact us to learn more about our services 
              or to schedule your first appointment.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/contact"
                className="bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold 
                         hover:bg-gray-900 transition duration-300"
              >
                Contact Us
              </Link>
              <a
                href="tel:+1234567890"
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold 
                         hover:bg-green-700 transition duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 