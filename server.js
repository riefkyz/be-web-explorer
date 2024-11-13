const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const folderRoutes = require('./routes/folderRoutes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Register routes
app.use(folderRoutes);

// Middleware untuk menyajikan file statis
app.use(express.static('public'));

// Default route to render an EJS page
app.get('/', (req, res) => {
  res.render('index', { title: 'Welcome to the API' });
});

// Test database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
    await sequelize.sync(); // Synchronize models
  } catch (error) {
    console.error('Database connection error:', error);
  }
})();

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
