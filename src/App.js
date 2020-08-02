import React, { createRef, useEffect } from 'react';
import './App.css'

function App() {
  const tablature = createRef();
  const windowWidth = window.innerWidth * 0.95;
  const windowHeight = window.innerHeight * 0.95;
  const rowSpan = 150;

  useEffect(() => {
    const canvas = tablature.current.getContext('2d');
    if (canvas) {
      const drawLine = ({ x, y }, length) => {
        canvas.beginPath();
        canvas.moveTo(x, y);
        canvas.lineTo(length, y);
        canvas.stroke();
      }
      const addRow = startY => {
        [...Array(6).keys()].forEach(count => {
          drawLine({ x: 50, y: startY + (count * 10) }, 800);
        })
      }

      const drawSheet = rowCount => {
        [...Array(rowCount).keys()].forEach(count => {
          addRow(50 + rowSpan * count);
        })

      }

      drawSheet(4);
    }
  }, [tablature])

  return (
    <div className="container">
      <canvas id="tablature" ref={tablature} width={windowWidth} height={windowHeight}></canvas>
    </div>
  );
}

export default App;
