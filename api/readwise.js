// api/readwise.js

module.exports = async (req, res) => {
    const READWISE_TOKEN = process.env.READWISE_TOKEN; // Set in Vercel environment variables
    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
    
    const response = await fetch(`https://readwise.io/api/v2/export/?updatedAfter=${oneWeekAgo}`, {
      method: 'GET',
      headers: {
        Authorization: `Token ${READWISE_TOKEN}`,
        // Authorization: 'Token 8RMFBvy4QmjhMDfgqgx5evcJIJPBTqd3drfEU0SzK01u8xh9Cr'
      },
    });
    const data = await response.json();
    
    // Set headers to prevent caching
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
  
    // Send the data back
    res.status(200).json(data);
  };
  