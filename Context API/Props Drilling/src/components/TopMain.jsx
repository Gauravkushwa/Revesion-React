import React from 'react';
import MiddleMain from './MiddleMain';

const TopMain = ({ name }) => {
  return (
    <div style={{ border: '1px solid gray', padding: '10px' }}>
      <h2>TopMain Component</h2>
      <MiddleMain name={name} />
    </div>
  );
};

export default TopMain;
