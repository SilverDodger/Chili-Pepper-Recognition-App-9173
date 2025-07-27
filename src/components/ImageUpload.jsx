import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePepper } from '../context/PepperContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUpload, FiImage, FiLoader } = FiIcons;

const ImageUpload = () => {
  const [dragActive, setDragActive] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { setUploadedImage, setAnalysisResults } = usePepper();
  const navigate = useNavigate();

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = async (file) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (JPG, PNG, etc.)');
      return;
    }

    setIsAnalyzing(true);
    
    // Create preview URL
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);

    // Simulate AI analysis
    await simulateAnalysis();
    
    setIsAnalyzing(false);
    navigate('/results');
  };

  const simulateAnalysis = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mock analysis results
        const mockResults = {
          primaryMatch: {
            name: "Jalapeño",
            confidence: 87,
            heatLevel: "2,500-8,000 SHU",
            description: "A medium-sized chili pepper pod type cultivar of the species Capsicum annuum. Jalapeños are widely used in Mexican cuisine and are known for their moderate heat and distinctive flavor.",
            image: "https://images.unsplash.com/photo-1583032015870-403e9c5e8a6c?w=400&h=300&fit=crop",
            origin: "Mexico",
            uses: "Fresh eating, pickling, cooking, salsas",
            color: "Green when unripe, red when ripe",
            size: "2-4 inches long"
          },
          alternatives: [
            {
              name: "Serrano",
              confidence: 73,
              heatLevel: "10,000-25,000 SHU",
              description: "A type of chili pepper that originated in the mountainous regions of the Mexican states of Puebla and Hidalgo. Serranos are typically eaten raw and have a bright, crisp flavor.",
              image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
              origin: "Mexico",
              uses: "Salsas, hot sauces, fresh eating",
              color: "Green, red, brown, orange, or yellow",
              size: "1-2 inches long"
            },
            {
              name: "Fresno",
              confidence: 65,
              heatLevel: "2,500-10,000 SHU",
              description: "Often confused with jalapeños, Fresno peppers are typically red and have a fruitier flavor. They're named after Fresno, California, where they were first cultivated.",
              image: "https://images.unsplash.com/photo-1580910051821-6aff9e45b4cc?w=400&h=300&fit=crop",
              origin: "California, USA",
              uses: "Cooking, hot sauces, canning",
              color: "Red when ripe",
              size: "2-3 inches long"
            }
          ]
        };
        
        setAnalysisResults(mockResults);
        resolve();
      }, 3000); // 3 second delay to simulate processing
    });
  };

  if (isAnalyzing) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-12 mb-12">
        <div className="text-center">
          <div className="mb-6">
            <SafeIcon icon={FiLoader} className="text-6xl text-red-500 mx-auto animate-spin" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Analyzing Your Pepper...
          </h3>
          <p className="text-gray-600 mb-6">
            Our AI is examining the color, shape, size, and texture to identify your chili pepper.
          </p>
          <div className="bg-gray-200 rounded-full h-3 w-64 mx-auto">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full animate-pulse" style={{width: '60%'}}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
      <div
        className={`border-3 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
          dragActive 
            ? 'border-red-500 bg-red-50' 
            : 'border-gray-300 hover:border-red-400 hover:bg-gray-50'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="mb-6">
          <SafeIcon icon={FiImage} className="text-6xl text-gray-400 mx-auto mb-4" />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Upload Your Chili Pepper Photo
        </h3>
        
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Drag and drop your image here, or click to browse. 
          For best results, use a clear, well-lit photo of a single pepper.
        </p>
        
        <label className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-lg cursor-pointer hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl">
          <SafeIcon icon={FiUpload} className="text-xl" />
          <span className="font-semibold">Choose Image</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileInput}
            className="hidden"
          />
        </label>
        
        <div className="mt-6 text-sm text-gray-500">
          Supported formats: JPG, PNG, WebP (Max 10MB)
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;