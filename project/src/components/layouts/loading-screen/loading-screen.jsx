import React from 'react';

function LoadingScreen() {
  return (
    <div className="loading-screen" data-testid="loading">
      <div className="cities__places-container cities__places-container--empty container">
        <div className="loadingio-spinner-double-ring-60g79lxvoha" style={{margin: 'auto'}}>
          <div className="ldio-2wzm9rhizr">
            <div></div>
            <div></div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
