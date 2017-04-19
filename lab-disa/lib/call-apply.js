'use strict';
module.exports = exports = {};

exports.recipe = {
  ingredients: [],
  addToIngredients: function(){
    Array.prototype.push.apply(this.ingredients, arguments);
  },
};

exports.Pie = function (crust, spice) {
  this.crust = crust;
  this.spice = spice;
};

exports.ApplePie = function (crust, spice) {
  exports.Pie.call(this, crust, spice);
  this.isApple = true;
};
