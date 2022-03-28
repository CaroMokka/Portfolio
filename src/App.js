import React, { useState, useEffect } from 'react';
import './App.css';
// components
import Cover from './components/Cover/Cover';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Slider from './components/Slider/Slider';
import Info from './components/Info/Info';
import Footer from './components/Footer/Footer';

function App() {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScroll(position);
  }

  useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	}, [scroll]);


    return (
      <div className="App">
        <Navbar isScrolling={scroll}/>
        <Cover />
        <About/>
        <Slider/>
        <Info/>
        <Footer/>

      </div>
    );
  }

  export default App;
