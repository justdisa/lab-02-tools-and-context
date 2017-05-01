'use strict';

module.exports = exports = {};

exports.Person = function(name) {
  this.name = name;
  this.sleeping = true;
  this.cup = [];
  this.moods = ['n ok ', ' probably shitty ', ' tolerant ', 'n indifferent '];
};

exports.wakeUp = function(wakerUpper, mood) {
  if(this.sleeping === true) {
    this.cup.push(wakerUpper);
    this.sleeping = false;
    let message = `${this.name} is in a${mood}mood, and is ready to start the day!`;
    console.log(message);
    return message;
  }
  else {
    return `${this.name} is already up`;
  }
};

exports.goodNight = function(){
  if(this.sleeping === false) {
    this.cup = [];
    this.sleeping = true;
    let message = `${this.name} is done for the day`;
    console.log(message);
    return message;
  }
  else console.log(`${this.name} is already asleep`);
};

exports.schedule = function(time) {
  if(time === 'now') {
    let index = Math.floor(Math.random() * this.moods.length);
    let currentMood = this.moods[index];
    exports.wakeUp.apply(this, ['coffee', currentMood]);
  }
  else if(time === 'later') {
    exports.goodNight.call(this);
  }
  else console.log(`${this.name} needs more beauty sleep`);
};

let myself = new exports.Person('maria');

exports.schedulePerson =  exports.schedule.bind(myself);

//overkill with the exports...?
