const express = require('express');
const router = express.Router();
const folderController = require('../controllers/folderController');

// Rute untuk merender index.ejs
router.get('/', (req, res) => {
  res.render('index', { title: 'Welcome to the API' }); // Kirim data ke view
});

// Rute untuk semua folder
router.get('/api/folders', folderController.getAllFolders);

// Rute untuk subfolder berdasarkan ID
router.get('/api/folders/:id', folderController.getSubFolders);

module.exports = router;
