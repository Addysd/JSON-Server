// server.js (or index.js)
const express = require('express');
const cors = require('cors');
const app = express();

// Allow requests from Vercel deployment domain
const corsOptions = {
  origin: 'https://react-jobs-eta.vercel.app/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

// Example API route
app.get('/https://json-server-7xnc.onrender.com/jobs/jobs', (req, res) => {
  // Example JSON response
  const jobs = [
    { id: 1, title: 'Software Engineer' },
    { id: 2, title: 'Web Developer' }
  ];
  res.json(jobs);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
