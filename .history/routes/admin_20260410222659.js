const express = require('express');

const router = express.Router();

router.post('/product', (req, res, next) => {
  console.log(req.body); // affiche tout
  console.log(req.body.title); // seulement title
  res.redirect('/');
});

module.exports = router;