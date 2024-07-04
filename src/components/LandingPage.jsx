// HomePage.jsx

import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Serices';
import ValueProposition from './ValueProposition';
import Footer from './Footer';
import "../CSS/Landingpage.css"
import OurSolutions from './OurSolutions';
import FeaturesPage from './Features';


const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <OurSolutions/>
      <FeaturesPage/>
      {/* <Services /> */}
      <ValueProposition />
      <About />
      <Footer />
    </div>
  );
};

export default HomePage;
