import React, { createContext, useContext, useState } from 'react';

const PepperContext = createContext();

export const usePepper = () => {
  const context = useContext(PepperContext);
  if (!context) {
    throw new Error('usePepper must be used within a PepperProvider');
  }
  return context;
};

export const PepperProvider = ({ children }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [analysisResults, setAnalysisResults] = useState(null);

  const value = {
    uploadedImage,
    setUploadedImage,
    analysisResults,
    setAnalysisResults
  };

  return (
    <PepperContext.Provider value={value}>
      {children}
    </PepperContext.Provider>
  );
};