import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Performance from './components/Performance';
import Holdings from './components/Holdings';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Performance />
        <Holdings />
      </main>
    </div>
  );
}

export default App;
