const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
  userName: { 
    type: String, 
    required: true, 
    ref: 'User', 
    unique: true // Ensure the username is unique to prevent duplicate wallets
  },
  balance: { 
    type: Number, 
    required: true, 
    default: 0 
  },
}, { timestamps: true }); // Include timestamps for wallet creation and updates

module.exports = mongoose.model('Wallet', walletSchema);
