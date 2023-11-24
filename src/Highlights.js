import React, { useState, useEffect } from 'react';

function Highlights() {
  const [highlights, setHighlights] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/readwise')
      .then(response => response.json())
      .then(data => {
        console.log('Data fetched from /api/readwise:', data);
        if (data && data.results) {
          // Assuming 'data.results' is an array and there's a 'created_at' field to sort by
          const sortedHighlights = data.results
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Sort by date, newest first
            .slice(0, 20); // Get only the last 20 highlights
          setHighlights(sortedHighlights);
        } else {
          console.error('Unexpected data structure:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <div>Loading highlights...</div>;
  }

  return (
    <div className='highlights-container'>
      {highlights.length > 0 ? (
        highlights.map((highlight, index) => (
          <div key={index} className="highlight-box">
            <h3>{highlight.title}</h3>
            <p><strong>Source:</strong> {highlight.author}</p>
            <a href={highlight.source_url} target="_blank" rel="noopener noreferrer">Read Article</a>
          </div>
        ))
      ) : (
        <div>No highlights found</div>
      )}
    </div>
  );
}

export default Highlights;
