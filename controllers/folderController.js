const Folder = require('../models/Folder');

// Get all root folders (parent_id = null)
exports.getAllFolders = async (req, res) => {
  try {
    const folders = await Folder.findAll({
      where: { parent_id: null }, // Filter folders where parent_id is null
    });
    res.json(folders); // Return the root folders in the response
  } catch (error) {
    console.error('Error fetching folders:', error); // Log any errors
    res.status(500).json({ error: 'Failed to fetch folders.' }); // Return error response
  }
};

// Get subfolders by parent_id (fetch folders with a specific parent_id)
exports.getSubFolders = async (req, res) => {
  const { id } = req.params; // Extract the parent folder's ID from the request parameters
  try {
    const subFolders = await Folder.findAll({
      where: { parent_id: id }, // Filter folders where parent_id matches the provided id
    });
    res.json(subFolders); // Return the subfolders in the response
  } catch (error) {
    console.error('Error fetching subfolders:', error); // Log any errors
    res.status(500).json({ error: 'Failed to fetch subfolders.' }); // Return error response
  }
};
