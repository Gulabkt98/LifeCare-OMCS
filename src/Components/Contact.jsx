import React from 'react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  return (
    <section id="contact" className="mt-24 mb-12 scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Have questions? We're here to help</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <EnvelopeIcon className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-3">We'll respond within 24 hours</p>
            <a href="mailto:support@healthconnect.com" className="text-blue-600 hover:text-blue-700 font-medium">
              support@healthconnect.com
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <PhoneIcon className="w-8 h-8 text-cyan-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-3">Mon-Fri, 9AM-6PM EST</p>
            <a href="tel:1-800-432-5841" className="text-blue-600 hover:text-blue-700 font-medium">
              1-800-HEALTH-1
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
