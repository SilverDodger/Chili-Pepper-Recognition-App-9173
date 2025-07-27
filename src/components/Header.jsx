import React from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiEye } = FiIcons;

const Header = () => {
  return (
    <header className="bg-white shadow-lg border-b-4 border-red-500">
      <div className="container mx-auto px-4 py-6">
        <Link to="/" className="flex items-center justify-between hover:opacity-80 transition-opacity">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 p-3 rounded-full">
              <SafeIcon icon={FiEye} className="text-2xl text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                🌶️ Pepper Vision
              </h1>
              <p className="text-gray-600 text-sm">AI-Powered Chili Pepper Identifier</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="text-right">
              <p className="text-xs text-gray-500">Powered by</p>
              <a 
                href="https://pepperscale.com/hot-pepper-list/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img 
                  src="https://pepperscale.com/wp-content/uploads/2019/01/pepperscale-logo-2019.png" 
                  alt="PepperScale" 
                  className="h-8"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="text-sm font-semibold text-orange-600 hidden">
                  PepperScale
                </span>
              </a>
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;