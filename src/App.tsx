import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigaion';
import Home from './pages/Home';
import Campaigns from './pages/Campaigns';
import Donate from './pages/Donate';
import Dashboard from './pages/Dashboard';
import "@coinbase/onchainkit/styles.css";
import OnchainProviders from './components/OnchainProviders';

const App: React.FC = () => {
  return (
    <OnchainProviders>      
      <Router>
          <Navigation />
          <main style={{paddingTop: '80px'}}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/campaigns" element={<Campaigns />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
        </Router>
      </OnchainProviders>
  );
};

export default App;