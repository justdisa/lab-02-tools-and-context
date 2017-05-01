'use strict';

const modu = require('./modules.js');

console.log('inside index.js:');

modu.schedulePerson('now');

modu.schedulePerson('later');

let scott = new modu.Person('Scott');
let judy = new modu.Person('Judy');

modu.schedule.call(scott, 'now');

modu.schedule.apply(judy, ['later']);

modu.wakeUp.apply(judy, ['coffee', 'm awesome ']);

let args = ['coffee', 'n awesome '];
let wakeScott = modu.wakeUp.apply(scott, args);

wakeScott;

console.log(typeof(wakeScott)); //< RETURNS A FUCKING STRING?!


let frank = new modu.Person('frank');
let wakeupFrank = modu.wakeUp.bind(frank);
wakeupFrank();

console.log(typeof(wakeupFrank));
