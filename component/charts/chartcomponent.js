// src/ChartComponent.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const ChartComponent = ({ type, data, options }) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      chartInstance.current = new Chart(chartContainer.current, {
        type,
        data,
        options
      });
    }
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [type, data, options]);

  return <canvas ref={chartContainer} />;
};

export default ChartComponent;
