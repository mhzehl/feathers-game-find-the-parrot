'use strict';

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

module.exports = function(options) {
  return function assignObjective(hook) {
    var parrots = new Array;
    for(var i = 1; i <= 25; i++) {
      parrots.push(i)
    }
    var parrotsShuffled = shuffle(parrots)
    hook.data.parrots = parrotsShuffled
    console.log('shuffled: ', parrotsShuffled)
  }
}
