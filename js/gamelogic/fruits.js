(function () {
  if (typeof Snake === "undefined") {
    window.Snake = {}
  }

  var Fruit = Snake.Fruit = function (attributes) {
    this.pos = attributes.pos
  }

})();

(function () {
  if (typeof Snake === "undefined") {
    Snake = {}
  }

  var Grape = Snake.Grape = function (attributes) {
    attributes.pos = attributes.pos || Snake.Util.randomPos();
    Snake.Fruit.call(this, attributes)
  }

  Snake.Util.inherits(Snake.Fruit, Grape)


})();

(function () {
  if (typeof Snake === "undefined") {
    window.Snake = {}
  }

  // Add Grapefruit to the game. When a snake eats
  //  an Grapefruit, it grows (for a few moves). Randomly generate
  //  Grapefruit every several turns.


  // you eat a few grapes. after 5 grapes, a grapefruit pops up
  // for 10 seconds
  // grapes pop up every 6 secs, and delete afer 10 secs
  var Grapefruit = Snake.Grapefruit = function (attributes) {
  }

  Snake.Util.inherits(Snake.Fruit, Grapefruit)


})();
