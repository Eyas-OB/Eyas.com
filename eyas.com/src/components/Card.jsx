import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', backgroundColor: '#fff' }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
