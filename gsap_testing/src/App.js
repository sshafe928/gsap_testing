import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './App.css';

const App = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    // basic animation on load
    gsap.to(boxRef.current, {
      duration: 1, x: -100, ease: 'elastic.out'});
  }, []);

  return (
    <div className="container">
      <div className="box" ref={boxRef}></div>
    </div>
  );
};

export default App;
