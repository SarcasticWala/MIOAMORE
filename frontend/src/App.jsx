import React from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Main content */}
      </main>
      <Footer />
    </div>
  );
};

export default App;