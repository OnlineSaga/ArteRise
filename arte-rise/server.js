const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');


// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, '..', 'public')));

// Define routes for your website
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/services', (req, res) => {
    res.sendFile('/public/services.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'contact.html'));
});

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Handle the form submit request
app.post('/submit', (req, res) => {
  // Check if the form data is defined and save it to a file
  if (req.body) {
    const formData = JSON.stringify(req.body);
    fs.writeFileSync('form-data.json', formData);
    res.redirect('/');
  } else {
    res.send('Error: No form data received');
  }
});

  

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
