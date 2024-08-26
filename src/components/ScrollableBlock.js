import React from 'react';


function ScrollableBlock({ title }) {
  return (
    <div className="scroll-block">
      <h2>{title}</h2>
      <div className="scroll-arrows">
        <span className="arrow left">&#8592;</span>
        <span className="arrow right">&#8594;</span>
      </div>
    </div>
  );
}

export default ScrollableBlock;
