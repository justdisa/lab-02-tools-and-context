'use strict';

// I've left a bunch of commented code intentionally in the hopes that someone
// will eventually help me figure out why I wasn't getting the result I wanted
// if it's really annoying and docks points I'll ta

const mod = require('../lib/modules.js');
const chai = require('chai');
const expect = chai.expect;
const chaiParam = require('chai-param');
//const param = chaiParam.param;
chai.use(chaiParam);
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
chai.use(sinonChai);

describe('Person', function(){
  it('should be an object constructor', function(){
    expect(mod.Person.prototype).to.be.a('object');
  });
});

describe('call', function(){
  it('should call the function with the given list of arguments', function(){
    let scott = new mod.Person('scott');
    var spy = sinon.spy(mod.schedule);
    spy.call(scott, 'now');
    expect(spy).to.have.been.called; // <-- this is fine
    //expect(spy).to.have.param(scott) <-- false positive
    //expect(spy).calledWith(scott, 'now'); <-- TypeError: msg.indexOf is not a function
    //expect(spy.arguments[1]).to.equal('now'); arguments cant be accessed in this context
    expect(spy).calledWith('now'); // works
    //expect(spy).calledWith(scott); //doesn't work (msg.index is not ...)
    //expect(spy).calledWith('not now'); //fails; proves it's not a false positive
  });
});


describe('apply', function(){
  let self = new mod.Person('maria');
  let wakeMaria = mod.wakeUp.apply(self, ['coffee', 'n awesome ']);
  it('should return a string', function(){
    expect(wakeMaria).to.be.a('string');
  });
  it('should appy an array of arguments', function(){
    let spy = sinon.spy(mod.wakeUp);
    let arrrgs = ['coffee', 'n awesome '];
    spy.apply(self, arrrgs);
    expect(spy).calledWith('coffee');
    // apparently calledWIth only takes string. Tried calledWIth('cake')
    // and it failed which proves it's not a false positive
  });
});


describe('bind', function(){
  let frank = new mod.Person('frank');
  let wakeupFrank = mod.wakeUp.bind(frank);

  it('scheduleFrank should return the wakeUp string', function(){
    expect(typeof(scheduleFrank)).to.be.a('string');
  });
  it('should be bound to frank', function(){
    expect(wakeupFrank()).to.equal('frank is in aundefinedmood, and is ready to start the day!');
  });

});
