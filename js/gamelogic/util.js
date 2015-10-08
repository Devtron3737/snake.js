(function () {
  if (typeof Snake ==="undefined") {
    window.Snake = {}
  }

  var Util = Snake.Util = {};

  // adds velocity to current direction
  //coord is array with x and y. velocity is integer
  Util.dirVel = function (dir, velocity) {
    var newVelY = dir[0] * velocity;
    var newVelX = dir[1] * velocity;

    return [newVelY, newVelX]
  }

  Util.equal = function (coord1, coord2) {
    if (coord1[0] !== coord2[0]) {
      return false;
    } else if (coord1[1] !== coord2[1]) {
      return false;
    } else {
      return true;
    }
  }

  Util.randomPos = function () {
    var xRand = Math.floor(Math.random() * Snake.Board.DIM_X)
    var yRand = Math.floor(Math.random() * Snake.Board.DIM_Y)
    return [yRand, xRand]
  }

    Util.inherits = function (baseClass, childClass) {
      var Surrogate = function () {
      };
      Surrogate.prototype = baseClass.prototype;
      childClass.prototype = new Surrogate

      childClass.prototype.constructor = childClass
    }

  //adds velocity to coordinate position
  Util.add = function (coord, velocity) {
    var newCoordY = coord[0] + velocity[0];
    var newCoordX = coord[1] + velocity[1];

    return [newCoordY, newCoordX]
  }

  Util.center = function () {
    var xCenter = Math.floor(Snake.Board.DIM_X / 2);
    var yCenter = Math.floor(Snake.Board.DIM_Y / 2);
    return [yCenter, xCenter]
  }

  Util.outOfBounds = function (position) {
    for (var axis = 0; axis < 2; axis++) {
      if (position[axis] > (Snake.Board.DIM_Y - 1) || position[axis] < 0) {
        return true;
      }
    }
    return false;
  }

  //checks if directions are opposite each other
  //because snakes cant turn back into itself
  Util.isOpposite = function (dir1, dir2) {
    if (dir1[0] === 0) {
      if (dir1[1] + dir2[1] === 0) {
        return true;
      }
    } else if (dir1[0] + dir2[0] === 0) {
      return true;
    }
    return false;
  }
})();
