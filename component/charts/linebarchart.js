// src/App.js
import React from 'react';
import ChartComponent from './chartcomponent';


const App = () => {
  // Line chart data and options
  const lineChartData1 = {
    labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    datasets: [{
      label: "Line Data 1",
      fill: true,
      backgroundColor: 'rgba(72,72,176,0.1)',
      borderColor: "#1f8ef1",
      borderWidth: 2,
      pointBackgroundColor: "#1f8ef1",
      pointBorderColor: 'rgba(255,255,255,0)',
      pointHoverBackgroundColor: '#d048b6',
      pointHoverBorderColor: '#d048b6',
      pointBorderWidth: 20,
      pointHoverRadius: 4,
      pointHoverBorderWidth: 15,
      pointRadius: 4,
      data: [80, 100, 70, 80,120,80],
    }]
  };

  const lineChartOptions1 = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: '#fff',
      titleFontColor: '#333',
      bodyFontColor: '#666',
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: 'rgba(29,140,248,0.0)',
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 60,
          suggestedMax: 130,
          padding: 20,
          fontColor: "#9a9a9a",
          fontSize: 15 // Increase the font size here
        }
      }],
      xAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: 'rgba(220,53,69,0.1)',
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9a9a9a",
          fontSize: 15
        }
      }]
    }
  };


  // Bar chart data and options
  const barChartData = {
    labels: ['USA', 'GER', 'AUS', 'UK', 'RO', 'RO'],
    datasets: [{
      label: "Bar Data",
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
      data: [53, 20,10, 80,100,45],
    }]
  };
  

  const barChartOptions = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: '#fff',
      titleFontColor: '#333',
      bodyFontColor: '#666',
      bodySpacing: 2,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [{
        gridLines: {
          drawBorder: false,
          color: 'rgba(29,140,248,0.0)',
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 120,
          padding: 20,
          fontColor: "#9a9a9a",
          fontSize: 15  // Increase the font size here
        }
      }],
      xAxes: [{
        gridLines: {
          drawBorder: false,
          color: 'rgba(220,53,69,0.1)',
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9a9a9a",
          fontSize: 15  // Increase the font size here
        }
      }]
    }
  };
  const lineChartData2 = {
    labels: [ 'JUL', 'AUG', 'SEP', 'OCT', 'NOV'],
    datasets: [{
      label: "Line Data 2",
      fill: true,
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: '#FFCE56',
      borderWidth: 2,
      pointBackgroundColor: '#FFCE56',
      pointBorderColor: 'rgba(255,255,255,0)',
      pointHoverBackgroundColor: '#FFCE56',
      pointHoverBorderColor: '#FFCE56',
      pointBorderWidth: 20,
      pointHoverRadius: 4,
      pointHoverBorderWidth: 15,
      pointRadius: 4,
      data: [ 90,27,60,12,80]
    }]
  };

  const lineChartOptions2 = lineChartOptions1;

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="chart-container">
        <div className="chart-wrapper">
          <h5>Total Shipments</h5>
          <div className='shipments'>
          <i class="bi bi-bell"></i>
          <h5>763,215</h5>
          </div>
          <ChartComponent  type="line" data={lineChartData1} options={lineChartOptions1} />
        </div>
      
        <div className="chart-wrapper">
          <h5>Daily Sales</h5>
          <div className='shipments'>
          <i class="bi bi-currency-euro"></i>
          <h5>3,500€</h5>
          </div>
          <ChartComponent type="bar" data={barChartData} options={barChartOptions} />
        </div>
        <div className="chart-wrapper">
          <h5>Completed tasks</h5>
          <div className='shipments'>
          <i class="bi bi-telegram"></i>
          <h5>12,100K</h5>
          </div>
          <ChartComponent type="line" data={lineChartData2} options={lineChartOptions2} />
        </div>
      </div>
    </div>
  );
}

export default App;
