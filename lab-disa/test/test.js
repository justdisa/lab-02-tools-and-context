'use strict';

const assert  = require('assert');
const recipeBook = require('../lib/call-apply.js');

describe('recipeBook', function() {
  describe('#addToIngredients', function() {
    it('should return the array ingredients', function() {
      let shoppingList = new recipeBook.ApplePie();
      assert.equal(shoppingList.ingredients, '[]');
    });
  } );
  describe('testing call', function(){
    it('should have a crust and a spice', function(){
      let briannasPie = new recipeBook.ApplePie('flaky', 'maple syrup');
      assert.equal(briannasPie.crust, 'flaky');
      assert.equal(briannasPie.spice, 'maple syrup');
    });
  });
});
