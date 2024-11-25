// routes/parkingSpaceRoutes.js
const express = require('express');
const router = express.Router();
const parkingSpaceController = require('../controllers/parkingSpaceControlle');

// Create a new parking space
router.post('/parking-spaces', parkingSpaceController.createParkingSpace);

// Get all parking spaces
router.get('/parking-spaces', parkingSpaceController.getAllParkingSpaces);

// Get a specific parking space by ID
router.get('/parking-spaces/:id', parkingSpaceController.getParkingSpaceById);

// Update parking space (e.g., mark as occupied)
router.put('/parking-spaces/:id', parkingSpaceController.updateParkingSpace);

// Delete a parking space
router.delete('/parking-spaces/:id', parkingSpaceController.deleteParkingSpace);

module.exports = router;
