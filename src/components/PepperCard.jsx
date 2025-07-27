import React, { useState } from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiThermometer, FiMapPin, FiInfo, FiExternalLink, FiImage } = FiIcons;

const PepperCard = ({ pepper, isPrimary }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = pepper.images || [pepper.image];

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
      isPrimary ? 'ring-4 ring-green-400 ring-opacity-50' : ''
    }`}>
      {isPrimary && (
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 text-center font-semibold">
          🏆 Best Match - {pepper.confidence}% Confidence
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{pepper.name}</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                {pepper.confidence}% Match
              </span>
              <a
                href={pepper.pepperScaleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-orange-600 hover:text-orange-700"
              >
                <span>PepperScale</span>
                <SafeIcon icon={FiExternalLink} className="text-xs" />
              </a>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="relative">
            <img
              src={images[currentImageIndex]}
              alt={`${pepper.name}`}
              className="w-full h-48 object-cover rounded-lg"
              onError={(e) => {
                // Fallback to a generic pepper image
                e.target.src = `https://pepperscale.com/wp-content/uploads/2019/09/Hot-pepper-400x267.jpg`;
              }}
            />
            {images.length > 1 && (
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white rounded-full px-2 py-1 text-xs flex items-center">
                <SafeIcon icon={FiImage} className="mr-1" />
                {currentImageIndex + 1}/{images.length}
              </div>
            )}
          </div>
          
          {images.length > 1 && (
            <div className="flex space-x-2 mt-2 overflow-x-auto pb-2">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${pepper.name} ${index + 1}`}
                  className={`w-16 h-16 object-cover rounded border-2 cursor-pointer transition-colors ${
                    currentImageIndex === index ? 'border-red-500' : 'border-gray-200 hover:border-red-300'
                  }`}
                  onClick={() => handleImageClick(index)}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex items-center space-x-3">
            <SafeIcon icon={FiThermometer} className="text-red-500" />
            <div>
              <span className="font-semibold text-gray-700">Heat Level:</span>
              <span className="ml-2 text-gray-600">{pepper.heatLevel}</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <SafeIcon icon={FiMapPin} className="text-blue-500" />
            <div>
              <span className="font-semibold text-gray-700">Origin:</span>
              <span className="ml-2 text-gray-600">{pepper.origin}</span>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <SafeIcon icon={FiInfo} className="text-green-500 mt-1" />
            <div>
              <span className="font-semibold text-gray-700">Description:</span>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                {pepper.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-semibold text-gray-700">Color:</span>
            <p className="text-gray-600">{pepper.color}</p>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Size:</span>
            <p className="text-gray-600">{pepper.size}</p>
          </div>
          <div className="col-span-2">
            <span className="font-semibold text-gray-700">Common Uses:</span>
            <p className="text-gray-600">{pepper.uses}</p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <a 
            href={pepper.pepperScaleLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center text-orange-600 hover:text-orange-700 font-medium"
          >
            <img 
              src="https://pepperscale.com/wp-content/uploads/2019/01/pepperscale-logo-2019.png" 
              alt="PepperScale" 
              className="h-5 mr-2"
            />
            <span>View full details on PepperScale</span>
            <SafeIcon icon={FiExternalLink} className="ml-1 text-sm" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PepperCard;