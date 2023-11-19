import React, { useState, useEffect } from 'react';

function Highlights() {
  const [highlights, setHighlights] = useState([]);

useEffect(() => {
    // Fetch highlights from the last week
    fetch('/api/readwise')
      .then(response => response.json())
      .then(data => {
        // Assume 'results' contains your highlights and you've filtered by date on the server
        setHighlights(data.results);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);
  // The empty array ensures this effect runs only once after the initial render

  return (
    <div>
      {highlights.map((highlight, index) => (
        <div key={index}>
          {/* Render your highlight data here */}
          <p>{highlight.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Highlights;
