// controllers/parkingSpaceController.js
const ParkingSpace = require('../models/parkingSpace');

// Create a new parking space
exports.createParkingSpace = async (req, res) => {
  const { parking_lot_id, space_number, size, level } = req.body;

  try {
    const newParkingSpace = await ParkingSpace.create({
      parking_lot_id,
      space_number,
      size,
      level,
      is_occupied: false,  // Default to unoccupied
    });

    return res.status(201).json({
      status: 'success',
      message: 'Parking space created successfully',
      data: newParkingSpace,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
}; 

// Get all parking spaces
exports.getAllParkingSpaces = async (req, res) => {
  try {
    const parkingSpaces = await ParkingSpace.findAll();
    return res.status(200).json({
      status: 'success',
      data: parkingSpaces,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

// Get a parking space by ID
exports.getParkingSpaceById = async (req, res) => {
  const { id } = req.params;

  try {
    const parkingSpace = await ParkingSpace.findByPk(id);
    if (!parkingSpace) {
      return res.status(404).json({
        status: 'error',
        message: 'Parking space not found',
      });
    }

    return res.status(200).json({
      status: 'success',
      data: parkingSpace,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

// Update a parking space (e.g., mark as occupied)
exports.updateParkingSpace = async (req, res) => {
  const { id } = req.params;
  const { is_occupied, vehicle_id } = req.body;

  try {
    const parkingSpace = await ParkingSpace.findByPk(id);
    if (!parkingSpace) {
      return res.status(404).json({
        status: 'error',
        message: 'Parking space not found',
      });
    }

    parkingSpace.is_occupied = is_occupied;
    parkingSpace.vehicle_id = vehicle_id || null;

    await parkingSpace.save();

    return res.status(200).json({
      status: 'success',
      message: 'Parking space updated successfully',
      data: parkingSpace,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

// Delete a parking space
exports.deleteParkingSpace = async (req, res) => {
  const { id } = req.params;

  try {
    const parkingSpace = await ParkingSpace.findByPk(id);
    if (!parkingSpace) {
      return res.status(404).json({
        status: 'error',
        message: 'Parking space not found',
      });
    }

    await parkingSpace.destroy();

    return res.status(200).json({
      status: 'success',
      message: 'Parking space deleted successfully',
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};
