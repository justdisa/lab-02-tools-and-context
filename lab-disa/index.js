'use strict';

const varietyPie = require('./lib/call-apply.js');

let momsPie = new varietyPie.ApplePie('flaky', 'cinnamon');
console.log(momsPie);

let berthasPie = new varietyPie.ApplePie('bready', 'nutmeg');
console.log(berthasPie);

varietyPie.recipe.addToIngredients('flour', 'sugar', 'butter');
console.log(varietyPie.recipe);


// {
//   "name": "lab-02-tools-and-context",
//   "version": "1.0.0",
//   "main": "index.js",
//   "directories": {
//     "test": "test"
//   },
//   "scripts": {
//     "test": "./node_modules/mocha/bin/mocha",
//     "start": "node index.js",
//     "lint": "eslint ./lib"
//
//   },
//   "repository": {
//     "type": "git",
//     "url": "https://github.com/justdisa"
//   },
//   "keywords": [
//     "test",
//     "package.json",
//     "mocha",
//     "pie"
//   ],
//   "author": "justdisa",
//   "license": "MIT",
//   "description": "",
//   "devDependencies": {
//     "eslint": "^3.19.0",
//     "mocha": "^3.2.0"
//   }
// }
