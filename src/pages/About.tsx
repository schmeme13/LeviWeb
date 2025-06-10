import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Our Practice</h1>
          <p className="text-xl text-gray-600">
            Dedicated to helping you achieve optimal physical health and wellness
          </p>
        </div>

        {/* Background Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-4">
                Founded with a passion for helping people recover and thrive, our practice 
                has been serving the community for over [X] years. We believe in providing 
                personalized care that addresses the root cause of your condition, not just 
                the symptoms.
              </p>
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="mb-16 bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6">Credentials & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Doctor of Physical Therapy (DPT)</li>
                  <li>Bachelor of Science in Kinesiology</li>
                  <li>Additional specialized training in [specialties]</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Board Certified Clinical Specialist</li>
                  <li>Certified Manual Therapist</li>
                  <li>Sports Physical Therapy Certification</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <h3 className="text-xl font-semibold mb-4">Patient-Centered Care</h3>
                <p className="text-gray-600">
                  We believe in treating the whole person, not just the injury or condition.
                </p>
              </div>
              <div className="text-center p-6">
                <h3 className="text-xl font-semibold mb-4">Evidence-Based Practice</h3>
                <p className="text-gray-600">
                  Our treatments are based on the latest research and proven techniques.
                </p>
              </div>
              <div className="text-center p-6">
                <h3 className="text-xl font-semibold mb-4">Long-Term Wellness</h3>
                <p className="text-gray-600">
                  We focus on preventing future injuries and maintaining optimal health.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Schedule your first consultation and take the first step towards better health.
            </p>
            <a
              href="/booking"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold 
                       hover:bg-blue-700 transition duration-300"
            >
              Schedule Consultation
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 