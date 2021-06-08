import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import mockCardsData from './components/mock-data/mock';
import Cities from './components/consts/cities';

ReactDOM.render(
  <React.StrictMode>
    <App mockCardsData={mockCardsData} cities={Cities}/>
  </React.StrictMode>,
  document.getElementById('root'));
