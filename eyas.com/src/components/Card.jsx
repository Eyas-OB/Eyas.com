import React from 'react';

// ---------------------------------------------------------------------------
// Card Component
// ---------------------------------------------------------------------------
// This is a very small presentational component used throughout the site.
// It simply displays a title and some content inside a styled container.
// Keeping the component small and reusable makes it easy to drop cards into
// any page by just passing `title` and `content` props. Styling is intentionally minimal so it can easily be overridden if needed.
// ---------------------------------------------------------------------------

const Card = ({ title, content }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', backgroundColor: '#fff' }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
