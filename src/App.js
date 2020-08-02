import React, { createRef, useEffect } from 'react';
import './App.css'

function App() {
  const tablature = createRef();
  const windowWidth = window.innerWidth * 0.9;
  const windowHeight = window.innerHeight * 0.9;

  useEffect(() => {
    console.log('render');
    const ctx = tablature.current.getContext('2d');
    ctx.fillRect(0, 0, 100, 100);
  }, [tablature])

  return (
    <div className="container">
      <canvas id="tablature" ref={tablature} width={windowWidth} height={windowHeight}></canvas>
    </div>
  );
}

export default App;
