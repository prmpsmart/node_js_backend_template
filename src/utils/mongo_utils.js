const mongodb = require("mongodb");

function isValidObjectId(id) {
  return mongodb.ObjectId.isValid(id);
}

function toObjectId(id) {
  return mongodb.ObjectId.createFromHexString(id);
}

module.exports = {
  isValidObjectId,
  toObjectId,
};
