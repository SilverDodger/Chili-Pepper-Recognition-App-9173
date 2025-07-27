import React from 'react';
import { usePepper } from '../context/PepperContext';
import { Link } from 'react-router-dom';
import PepperCard from '../components/PepperCard';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowLeft, FiUpload, FiDatabase, FiExternalLink } = FiIcons;

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

  const { primaryMatch, alternatives, imageFeatures, totalPeppersAnalyzed } = analysisResults;

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
        
        <div className="flex items-center text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <SafeIcon icon={FiDatabase} />
            <span>{totalPeppersAnalyzed} peppers analyzed from </span>
            <a 
              href="https://pepperscale.com/hot-pepper-list/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-700 flex items-center"
            >
              PepperScale
              <SafeIcon icon={FiExternalLink} className="ml-1 text-xs" />
            </a>
          </div>
        </div>
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
                {imageFeatures && (
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-700 mb-2">Detected Features:</h4>
                    <div className="text-sm text-gray-600">
                      <p>Dominant colors detected in image</p>
                      <p>Shape analysis: {imageFeatures.shape?.aspectRatio > 2 ? 'Long/Thin' : imageFeatures.shape?.aspectRatio < 1.5 ? 'Round/Wide' : 'Medium'}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <a 
                href={primaryMatch.pepperScaleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium"
              >
                <img 
                  src="https://pepperscale.com/wp-content/uploads/2019/01/pepperscale-logo-2019.png" 
                  alt="PepperScale" 
                  className="h-5 mr-1"
                />
                <span>View detailed info on PepperScale.com</span>
                <SafeIcon icon={FiExternalLink} className="text-sm" />
              </a>
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

      <div className="mt-8 text-center">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-center mb-2">
            <a 
              href="https://pepperscale.com/hot-pepper-list/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img 
                src="https://pepperscale.com/wp-content/uploads/2019/01/pepperscale-logo-2019.png" 
                alt="PepperScale" 
                className="h-6 mr-2"
              />
              <h4 className="font-bold text-gray-800">About This Analysis</h4>
            </a>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            This identification uses computer vision to analyze your pepper's color, shape, and size, 
            then matches against PepperScale's database of {totalPeppersAnalyzed} pepper varieties. 
            Images and additional information are sourced exclusively from 
            <a 
              href="https://pepperscale.com/hot-pepper-list/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-700"
            > PepperScale.com's hot pepper list</a>.
            Results are estimates - for definitive identification, consult a pepper expert.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;