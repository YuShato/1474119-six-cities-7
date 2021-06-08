import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import mockCardsData from './components/mocks/mock';
import CITIES from './components/consts/cities';

ReactDOM.render(
  <React.StrictMode>
    <App mockCardsData={mockCardsData} cities={CITIES}/>
  </React.StrictMode>,
  document.getElementById('root'));
