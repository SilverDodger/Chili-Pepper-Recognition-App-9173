import React from 'react';
import ImageUpload from '../components/ImageUpload';
import FeatureGrid from '../components/FeatureGrid';

const UploadPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Identify Your Chili Pepper
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Upload a clear photo of your chili pepper and let our AI identify the variety with 
          detailed information and similar matches.
        </p>
      </div>
      
      <ImageUpload />
      <FeatureGrid />
    </div>
  );
};

export default UploadPage;