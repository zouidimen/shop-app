const express = require('express');

const router = express.Router();

router.post('/product', (req, res, next) => {
  console.log(req.body); 
  console.log(req.body.title); 
  res.redirect('/');
});

module.exports = router;