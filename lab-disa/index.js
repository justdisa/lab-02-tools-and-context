'use strict';

const varietyPie = require('./lib/call-apply.js');

let momsPie = new varietyPie.ApplePie('flaky', 'cinnamon');
console.log(momsPie);

let berthasPie = new varietyPie.ApplePie('bready', 'nutmeg');
console.log(berthasPie);

varietyPie.recipe.addToIngredients('flour', 'sugar', 'butter');
console.log(varietyPie.recipe);
