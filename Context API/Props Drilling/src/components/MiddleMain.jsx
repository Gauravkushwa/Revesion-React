import React from 'react';
import BottomMain from './BottomMain';

const MiddleMain = ({ name }) => {
  return (
    <div style={{ border: '1px solid blue', padding: '10px' }}>
      <h2>MiddleMain Component</h2>
      <BottomMain name={name} />
    </div>
  );
};

export default MiddleMain;
