// models/parkingSpace.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Assuming Sequelize instance

const ParkingSpace = sequelize.define('ParkingSpace', {
  parking_space_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  parking_lot_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'ParkingLot',  // Reference to the ParkingLot model
      key: 'parking_lot_id',
    },
    allowNull: false,
  },
  space_number: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,  // Space number must be unique
  },
  size: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['compact', 'standard', 'oversized']],
    },
  },
  is_occupied: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  vehicle_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'Vehicle',  // Reference to Vehicle model (nullable)
      key: 'vehicle_id',
    },
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: true,
  tableName: 'parking_spaces',
});

module.exports = ParkingSpace;
