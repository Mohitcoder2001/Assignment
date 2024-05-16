const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Basic route for testing
app.get('/', (req, res) => {
  res.send('GCS Backend Server is running');
});

// API endpoint example
app.get('/api/status', (req, res) => {
  res.json({ status: 'Server is up and running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
