import React from 'react';
import { UserGroupIcon, CalendarDaysIcon, ShieldCheckIcon, ClockIcon, StarIcon, BoltIcon } from '@heroicons/react/24/outline';

const FeatureCard = ({ Icon, title, children, colorClass = 'bg-blue-100', iconColor = 'text-blue-600' }) => (
  <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 hover:shadow-xl transition-shadow">
    <div className={`w-12 h-12 ${colorClass} rounded-xl flex items-center justify-center mb-4`}>
      <Icon className={`w-6 h-6 ${iconColor}`} />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Features</h2>
        <p className="mt-2 text-gray-600">Core capabilities that make LifeCare effective and easy to use</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <FeatureCard Icon={UserGroupIcon} title="Find Doctors Nearby" colorClass="bg-blue-100" iconColor="text-blue-600">
          Search and connect with qualified doctors in your area based on specialization and location
        </FeatureCard>

        <FeatureCard Icon={CalendarDaysIcon} title="Easy Scheduling" colorClass="bg-cyan-100" iconColor="text-cyan-600">
          Book online consultations or physical appointments at your convenience
        </FeatureCard>

        <FeatureCard Icon={ShieldCheckIcon} title="Secure & Private" colorClass="bg-green-100" iconColor="text-green-600">
          Your health information is protected with enterprise-grade security
        </FeatureCard>

        <FeatureCard Icon={ClockIcon} title="Flexible Hours" colorClass="bg-purple-100" iconColor="text-purple-600">
          Doctors set their own schedules with options for emergency updates
        </FeatureCard>

        <FeatureCard Icon={StarIcon} title="Feedback System" colorClass="bg-yellow-100" iconColor="text-yellow-600">
          Share feedback and ask questions for up to 7 days after your consultation
        </FeatureCard>

        <FeatureCard Icon={BoltIcon} title="Digital Prescriptions" colorClass="bg-red-100" iconColor="text-red-600">
          Receive and access your prescriptions online anytime, anywhere
        </FeatureCard>
      </div>
    </div>
  );
};

export default Features;
