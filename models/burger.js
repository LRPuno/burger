// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

//orm.selectAll("burgers",-------)
var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers",function(res) {
      cb(res);
    });
  },
  insertOne: function(objColVals,condition,cb) {
    orm.insertOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function(objColVals,condition,cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;