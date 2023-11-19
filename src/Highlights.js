import React, { useState, useEffect } from 'react';

function Highlights() {
  const [highlights, setHighlights] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Added loading state

  useEffect(() => {
    fetch('/api/readwise')
      .then(response => response.json())
      .then(data => {
        console.log('Data fetched from /api/readwise:', data); // Log the data
        if (data && data.results) { // Check if 'results' is in the data
          setHighlights(data.results);
        } else {
          console.error('Unexpected data structure:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      })
      .finally(() => setIsLoading(false)); // Update loading state
  }, []);

  if (isLoading) {
    return <div>Loading highlights...</div>; // Display loading message
  }

  return (
    <div>
      {highlights.length > 0 ? ( // Check if there are highlights
        highlights.map((highlight, index) => (
          <div key={index}>
            <p>{highlight.text}</p> {/* Ensure 'text' is the correct property */}
          </div>
        ))
      ) : (
        <div>No highlights found</div> // Display message if no highlights
      )}
    </div>
  );
}

export default Highlights;
