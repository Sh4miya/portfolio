import React from 'react';
import '../style.scss';

function CustomProgressBar({ percent }) {
  return (
    <div className="custom-progress-bar-container">
      <div 
        className="custom-progress-bar-fill" 
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
}

export default CustomProgressBar;

