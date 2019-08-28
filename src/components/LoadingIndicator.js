import React from 'react';

function LoadingIndicator() {
  return (
    <div id="loading-indicator" className="grid-container">
      <div className="column-24 text-center">
          <img src="/static/images/loader-ie9.gif"/>
      </div>
    </div>
  )
}

export default LoadingIndicator;
