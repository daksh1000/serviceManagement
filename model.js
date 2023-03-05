const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const designationSchema = new Schema({
  employeename: { type: String, required: true },
  designation: { type: String, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Designation = mongoose.model('Designation', designationSchema);
module.exports = Designation;