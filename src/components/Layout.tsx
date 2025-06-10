import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-blue-600">
                LeviPT
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Home
              </Link>
              <Link to="/booking" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Book Now
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Services
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Contact
              </Link>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="min-h-[calc(100vh-4rem)]">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">LeviPT</h3>
              <p className="text-gray-600">
                Professional physical therapy services to help you recover and thrive.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link to="/booking" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Book Appointment
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">123 Therapy St.</li>
                <li className="text-gray-600">City, State 12345</li>
                <li className="text-gray-600">contact@levipt.com</li>
                <li className="text-gray-600">(555) 123-4567</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Hours</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">Mon-Fri: 8am - 7pm</li>
                <li className="text-gray-600">Saturday: 9am - 5pm</li>
                <li className="text-gray-600">Sunday: Closed</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-center text-gray-500">
              © {new Date().getFullYear()} LeviPT. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 