import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import mockCardsData from './components/mock-data/mock';

ReactDOM.render(
  <React.StrictMode>
    <App mockCardsData={mockCardsData}/>
  </React.StrictMode>,
  document.getElementById('root'));
