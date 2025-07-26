// making my first card 
// I will be writing a lot of comments because I have no idea whats going on 

// Importing React so we can use JSX and define components
import React from 'react';

// Defining a functional component called Card
const Card = () => {
  // This function returns JSX (like HTML in JavaScript)
  return (
    // A div with inline styles to make it look like a card
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
      {/* This is the title of the card */}
      <h2>Card Title</h2>

      {/* This is the content or description inside the card */}
      <p>This is the card content.</p>
    </div>
  );
};

// Exporting the Card component so it can be used in other files (like App.jsx)
export default Card;
