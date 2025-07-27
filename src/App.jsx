import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import UploadPage from './pages/UploadPage';
import ResultsPage from './pages/ResultsPage';
import { PepperProvider } from './context/PepperContext';
import './App.css';

function App() {
  return (
    <PepperProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<UploadPage />} />
              <Route path="/results" element={<ResultsPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </PepperProvider>
  );
}

export default App;