import React, { createRef, useEffect } from 'react';
import drawSheet from './utils/drawSheet';
import { sheetHeight, row } from './config';
import './App.css'

function App() {
  const tablature = createRef();
  const windowWidth = window.innerWidth * 0.9;

  useEffect(() => {
    const canvas = tablature.current.getContext('2d');
    if (canvas) {
      row.count = 5;
      drawSheet(canvas, windowWidth);
    }
  }, [tablature, windowWidth])

  return (
    <canvas id="tablature" ref={tablature} width={windowWidth} height={sheetHeight}></canvas>
  );
}

export default App;
