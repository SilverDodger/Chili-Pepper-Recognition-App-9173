import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiEye, FiZap, FiDatabase, FiShield } = FiIcons;

const FeatureGrid = () => {
  const features = [
    {
      icon: FiEye,
      title: "AI Vision Analysis",
      description: "Advanced computer vision algorithms analyze color, shape, size, and texture patterns"
    },
    {
      icon: FiZap,
      title: "Instant Results",
      description: "Get identification results in seconds with confidence scores and detailed information"
    },
    {
      icon: FiDatabase,
      title: "Comprehensive Database",
      description: "Access to extensive pepper variety database with images from trusted sources"
    },
    {
      icon: FiShield,
      title: "Privacy Protected",
      description: "Your images are processed securely and automatically deleted after analysis"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      {features.map((feature, index) => (
        <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <SafeIcon icon={feature.icon} className="text-xl text-white" />
          </div>
          <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;