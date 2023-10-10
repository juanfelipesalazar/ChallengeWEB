import React from 'react';

const GifItem = ({ id, titulo, url }) => {
  return (
    <div className="gif-item">
      <h3>{titulo}</h3>
      <img src={url} alt={titulo} />
    </div>
  );
};

export default GifItem;
