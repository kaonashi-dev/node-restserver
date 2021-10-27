const { Schema, model } = require('mongoose');

const userSchema = Schema({

   name: {
      type: String,
      required: [true],
   },
   email: {
      type: String,
      required: [true],
      unique: true,
   },
   pass: {
      type: String,
      required: [true],
   },
   img: {
      type: String,
   },
   role: {
      type: String,
      required: true,
      enum: ['admin', 'user'],
      default: 'user',
   },
   status: {
      type: Boolean,
      default: true,
   },
   google: {
      type: Boolean,
      default: false,
   }

});

module.exports = model('User', userSchema);