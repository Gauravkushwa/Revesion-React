import React from 'react';

const BottomMainRight = ({ name }) => {
  return (
    <div style={{ flex: 1, background: '#ddd', padding: '10px' }}>
      <h3>BottomMainRight Component</h3>
      <p>User's Name: <strong>{name || 'No name entered'}</strong></p>
    </div>
  );
};

export default BottomMainRight;
