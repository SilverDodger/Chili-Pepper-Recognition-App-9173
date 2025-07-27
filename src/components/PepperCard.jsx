import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiThermometer, FiMapPin, FiInfo, FiExternalLink } = FiIcons;

const PepperCard = ({ pepper, isPrimary }) => {
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
              {pepper.pepperScaleData && (
                <a
                  href={`https://www.pepperscale.com/search/?q=${encodeURIComponent(pepper.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-orange-600 hover:text-orange-700"
                >
                  <span>PepperScale</span>
                  <SafeIcon icon={FiExternalLink} className="text-xs" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mb-6">
          <img
            src={pepper.image}
            alt={pepper.name}
            className="w-full h-48 object-cover rounded-lg"
            onError={(e) => {
              // Fallback to a generic pepper image
              e.target.src = `https://via.placeholder.com/400x300/f87171/ffffff?text=${encodeURIComponent(pepper.name)}+Pepper`;
            }}
          />
          {pepper.images && pepper.images.length > 1 && (
            <div className="flex space-x-2 mt-2">
              {pepper.images.slice(1, 3).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${pepper.name} ${index + 2}`}
                  className="w-16 h-16 object-cover rounded border-2 border-gray-200 hover:border-red-300 cursor-pointer transition-colors"
                  onClick={() => {
                    document.querySelector('.main-pepper-image').src = img;
                  }}
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

        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            Data sourced from PepperScale.com and Google Images
          </p>
        </div>
      </div>
    </div>
  );
};

export default PepperCard;