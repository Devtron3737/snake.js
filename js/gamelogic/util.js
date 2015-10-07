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

  Util.randomPos = function () {
    var xRand = Math.floor(Math.random() * Snake.Board.DIM_X)
    var yRand = Math.floor(Math.random() * Snake.Board.DIM_Y)
    return [yRand, xRand]
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
    for (var loc = 0; loc < 2; loc++) {
      if (position[loc] > (Snake.Board.DIM_Y - 1) || position[loc] < 0) {
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