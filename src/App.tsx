import React from 'react';
import { Content, Hero, Navbar } from './components';

const App = () => {
  return (
    <main>
      <div className="heroBackground">
        <Navbar />
        <Hero />
      </div>
      <Content />
    </main>
  );
};

export default App;
