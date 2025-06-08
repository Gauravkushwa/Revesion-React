import React from 'react';
import BottomMainLeft from './BottomMainLeft';
import BottomMainRight from './BottomMainRight';

const BottomMain = ({ name }) => {
  return (
    <div style={{ border: '1px solid green', padding: '10px', display: 'flex', gap: '20px' }}>
      <BottomMainLeft />
      <BottomMainRight name={name} />
    </div>
  );
};

export default BottomMain;
