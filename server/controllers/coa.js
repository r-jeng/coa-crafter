const COA = require('../../database/mongo.js');

const getAllCOAs = (req, res) => {
  return COA.find({}).sort({ _id : -1 });
};

const addCOA = (req, res) => {
  // console.log(req);
  const newCOA = new COA(req);
  return newCOA.save();
};

// const updateCOA = (req, res) => {

// };

const deleteCOA = (req, res) => {
  console.log('coa id to delete in mongo', req);
  // const id = req.param.id;
  const id = req;
  return COA.findByIdAndDelete(id);
};

module.exports.getAllCOAs = getAllCOAs;
module.exports.addCOA = addCOA;
module.exports.deleteCOA = deleteCOA;