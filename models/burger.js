var ORM = require(../config/orm);

//Also inside burger.js, create the code that will call the ORM functions using
//burger specific input for the ORM.
var burger = {
  allBurgers: selectAll(),
  insertBurger: insertOne(bName, dev),
  updateBurger: updateOne(burger_id),
}

//Export at the end of the burger.js file.
  module.exports = burgers

//
