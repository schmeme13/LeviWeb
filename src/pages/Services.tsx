import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  duration: string;
  price: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, duration, price }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex justify-between items-center text-sm text-gray-500">
      <span>Duration: {duration}</span>
      <span>Price: {price}</span>
    </div>
  </div>
);

const Services: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      title: "Initial Evaluation",
      description: "Comprehensive assessment of your condition, medical history, and treatment goals.",
      duration: "60 minutes",
      price: "$150"
    },
    {
      title: "Follow-up Session",
      description: "One-on-one therapy session focusing on your personalized treatment plan.",
      duration: "45 minutes",
      price: "$100"
    },
    {
      title: "Sports Rehabilitation",
      description: "Specialized therapy for sports-related injuries and performance enhancement.",
      duration: "60 minutes",
      price: "$120"
    },
    {
      title: "Manual Therapy",
      description: "Hands-on techniques to reduce pain and improve mobility.",
      duration: "30 minutes",
      price: "$80"
    },
    {
      title: "Group Therapy",
      description: "Therapeutic exercises in a group setting for motivation and support.",
      duration: "45 minutes",
      price: "$60"
    },
    {
      title: "Home Exercise Program",
      description: "Customized exercise program for continued progress at home.",
      duration: "30 minutes",
      price: "$50"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600">
            Comprehensive physical therapy services tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Insurance Information */}
        <section className="bg-gray-50 py-12 rounded-lg mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Insurance & Payment</h2>
            <p className="text-gray-600 mb-8">
              We accept most major insurance plans. Please contact us to verify your coverage 
              and discuss payment options.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Accepted Insurance</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Blue Cross Blue Shield</li>
                  <li>Aetna</li>
                  <li>Cigna</li>
                  <li>United Healthcare</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Payment Options</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Credit Cards</li>
                  <li>Cash</li>
                  <li>Check</li>
                  <li>Flexible Spending Accounts (FSA)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Schedule your first appointment and begin your journey to recovery.
            </p>
            <a
              href="/booking"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold 
                       hover:bg-blue-700 transition duration-300"
            >
              Book Appointment
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services; 