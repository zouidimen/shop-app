const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// 404 Page (IMPORTANT: toujours à la fin)
app.use((req, res, next) => {
  res.status(404).sendFile(
    path.join(__dirname, 'views', '404.html')
  );
});
