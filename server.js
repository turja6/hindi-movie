const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Serve the upload page
app.use(express.static('public'));

// Handle video upload
app.post('/upload', upload.single('video'), (req, res) => {
  res.send('Video uploaded successfully!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
