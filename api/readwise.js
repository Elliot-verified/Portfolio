// api/readwise.js
module.exports = async (req, res) => {
    const READWISE_TOKEN = process.env.READWISE_TOKEN; // Set in Vercel environment variables
    const response = await fetch('https://readwise.io/api/v2/export/', {
      method: 'GET',
      headers: {
        Authorization: `Token ${READWISE_TOKEN}`,
      },
    });
    const data = await response.json();
    
    // Process and send the data back
    res.status(200).json(data);
  };
  