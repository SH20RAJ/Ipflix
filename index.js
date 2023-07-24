const express = require('express');
const ipinfo = require('ipinfo');

const app = express();
const port = 3000;

// Middleware to serve static files (including the home page)
app.use(express.static('public'));

// Middleware to get IP address details
app.use((req, res, next) => {
  // Get the client's IP address
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  
  // Get additional details using the ipinfo package
  ipinfo(ip, (err, data) => {
    if (err) {
      console.error('Error fetching IP details:', err.message);
      req.ipDetails = { error: 'Failed to retrieve IP details' };
    } else {
      req.ipDetails = data;
    }
    next();
  });
});

// Endpoint to get IP address details
app.get('/api/ipdetails', (req, res) => {
  const timestamp = new Date().toISOString();
  const ipDetails = {
    timestamp,
    ip: req.ipDetails.ip || 'N/A',
    city: req.ipDetails.city || 'N/A',
    region: req.ipDetails.region || 'N/A',
    country: req.ipDetails.country || 'N/A',
    loc: req.ipDetails.loc || 'N/A',
    org: req.ipDetails.org || 'N/A',
    timezone: req.ipDetails.timezone || 'N/A',
    fromYourSide: 'This is an additional detail from our side!',
  };

  res.json(ipDetails);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
