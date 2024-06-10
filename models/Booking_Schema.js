const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;


// define the Schema (the structure of the article)
const bookingSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    status: { type: String, enum: ['confirmed', 'pending', 'cancelled', 'completed'], default: 'pending' },
    decor: { type: String },
    // photos: [{ type: String }],
    paymentStatus: { type: String, enum: ['paid', 'unpaid'], default: 'unpaid' }
});


// Create a model based on that schema
const Booking = mongoose.model('Booking', bookingSchema);
// export the model
module.exports = Booking;
