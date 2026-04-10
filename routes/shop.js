const express = require('express');
const path = require('path');

const router = express.Router();


router.get('/', (req, res, next) => {
  res.sendFile(
    path.join(__dirname, '..', 'views', 'shop.html')
  );
});

// Contact page
router.get('/contact-us', (req, res, next) => {
  res.sendFile(
    path.join(__dirname, '..', 'views', 'contact-us.html')
  );
});

module.exports = router;