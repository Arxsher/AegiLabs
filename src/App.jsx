import React, { useState, useEffect } from 'react'
import Slide1 from './components/Slide1'
import Slide2 from './components/Slide2'
import Slide3 from './components/Slide3'
import Slide4 from './components/Slide4'
import Slide5 from './components/Slide5'
import Slide6 from './components/Slide6'
import Slide7 from './components/Slide7'
import Slide8 from './components/Slide8'
import Slide9 from './components/Slide9'
import Slide10 from './components/Slide10'
import Slide11 from './components/Slide11'
import Slide12 from './components/Slide12'
import Slide13 from './components/Slide13'
import Slide14 from './components/Slide14'
import Slide15 from './components/Slide15'
import SlideProjectCanvas from './components/SlideProjectCanvas'
import Slide16 from './components/Slide16'
import SlideChannels from './components/SlideChannels'
import SlidePricing from './components/SlidePricing'
import SlidePricingPolicy from './components/SlidePricingPolicy'
import Slide17 from './components/Slide17'
import Slide18 from './components/Slide18'
import Slide19 from './components/Slide19'
import Slide20 from './components/Slide20'
import Pagination from './components/Pagination'
import MobileGate from './components/MobileGate'
import './index.css'

const TOTAL_SLIDES = 24;

function App() {
  const [activeSlide, setActiveSlide] = useState(1); // Set to 1 as default or user preference

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        setActiveSlide(prev => Math.min(prev + 1, TOTAL_SLIDES));
      } else if (e.key === 'ArrowLeft') {
        setActiveSlide(prev => Math.max(prev - 1, 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="App">
      <MobileGate />
      <div className="presentation-shell">
        {activeSlide === 1 && <Slide1 />}
        {activeSlide === 2 && <Slide5 />}
        {activeSlide === 3 && <Slide3 />}
        {activeSlide === 4 && <Slide2 />}
        {activeSlide === 5 && <Slide6 />}
        {activeSlide === 6 && <Slide7 />}
        {activeSlide === 7 && <Slide8 />}
        {activeSlide === 8 && <Slide4 />}
        {activeSlide === 9 && <Slide9 />}
        {activeSlide === 10 && <Slide10 />}
        {activeSlide === 11 && <Slide11 />}
        {activeSlide === 12 && <Slide12 />}
        {activeSlide === 13 && <Slide13 />}
        {activeSlide === 14 && <Slide14 />}
        {activeSlide === 15 && <Slide15 />}
        {activeSlide === 16 && <SlideProjectCanvas />}
        {activeSlide === 17 && <Slide16 />}
        {activeSlide === 18 && <SlideChannels />}
        {activeSlide === 19 && <SlidePricing />}
        {activeSlide === 20 && <SlidePricingPolicy />}
        {activeSlide === 21 && <Slide17 />}
        {activeSlide === 22 && <Slide18 />}
        {activeSlide === 23 && <Slide19 />}
        {activeSlide === 24 && <Slide20 />}
        <Pagination
          activeSlide={activeSlide}
          totalSlides={TOTAL_SLIDES}
          onPageClick={(num) => setActiveSlide(num)}
        />
      </div>
    </div>
  )
}

export default App
