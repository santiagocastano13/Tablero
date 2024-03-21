import React from 'react';
import './ItemTask.css';

export const ItemTask = ({ taskName, description }) => {
  return (
    <div className="task">
      <div>
        <li>{taskName} {description}</li>
      </div>
    </div>
  );
};
