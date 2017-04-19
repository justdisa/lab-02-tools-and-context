'use strict';
module.exports = exports = {};

exports.Recipe = function(crust, spice) {
  exports.Pie.apply(this, [crust, spice]);
  this.bakingTools = true;
};


exports.Pie = function (crust, spice) {
  this.crust = crust;
  this.spice = spice;
};

exports.ApplePie = function (crust, spice) {
  exports.Pie.call(this, crust, spice);
  this.isApple = true;
};
