// mongo schema here
const mongoose = require('mongoose');

const coaSchema = new mongoose.Schema({
  dateApproved: { type: String, required: true },
  productName: { type: String, required: true},
  lotNumber: { type: String, required: true},
  micro: { type: String },
  chem: { type: String },
  pdfUrl: {type: String }
});

const COA = mongoose.model('COA', coaSchema);

module.exports = COA;