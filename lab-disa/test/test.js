'use strict';

const assert  = require('assert');
const recipeBook = require('../lib/call-apply.js');

describe('recipeBook', function() {
  describe('', function() {
    it('should have ingredients listed', function() {
      let pieIngredients = new recipeBook.Recipe('bready', 'cayenne');
      assert.equal(pieIngredients.crust, 'bready');
      assert.equal(pieIngredients.spice, 'cayenne');
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
