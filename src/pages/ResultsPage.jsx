import React from 'react';
import { usePepper } from '../context/PepperContext';
import { Link } from 'react-router-dom';
import PepperCard from '../components/PepperCard';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowLeft, FiUpload } = FiIcons;

const ResultsPage = () => {
  const { analysisResults, uploadedImage } = usePepper();

  if (!analysisResults || !uploadedImage) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 mb-4">No analysis results found.</p>
        <Link
          to="/"
          className="inline-flex items-center space-x-2 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
        >
          <SafeIcon icon={FiUpload} />
          <span>Upload New Image</span>
        </Link>
      </div>
    );
  }

  const { primaryMatch, alternatives } = analysisResults;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors"
        >
          <SafeIcon icon={FiArrowLeft} />
          <span>Upload Another Image</span>
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Analysis Results
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Your Uploaded Image</h3>
            <div className="bg-gray-100 rounded-lg p-4">
              <img
                src={uploadedImage}
                alt="Uploaded pepper"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Analysis Summary</h3>
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Confidence Level:</span>
                  <span className="font-semibold text-green-600">{primaryMatch.confidence}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Primary Match:</span>
                  <span className="font-semibold text-red-600">{primaryMatch.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Heat Level:</span>
                  <span className="font-semibold">{primaryMatch.heatLevel}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          🏆 Most Likely Match
        </h3>
        <PepperCard pepper={primaryMatch} isPrimary={true} />
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          🔍 Alternative Possibilities
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {alternatives.map((pepper, index) => (
            <PepperCard key={index} pepper={pepper} isPrimary={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;