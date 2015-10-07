( function() {
  if (typeof Snake === "undefined") {
    window.Snake = {}
  }

  var Snakes = Snake.Snakes = function () {
    this.dir = Snakes.DIFFS["W"]
    this.segs = [Snake.Util.center()]
    this.growing = false;
  }

  Snakes.DIFFS = {
    "N": [-1, 0],
    "S": [1, 0],
    "E": [0, 1],
    "W": [0, -1]
  }

  Snakes.VELOCITY = 1;

  Snakes.prototype.move = function () {
    var headIdx = this.segs.length - 1
    var dirVel = Snake.Util.dirVel(this.dir, Snakes.VELOCITY)
    var newSeg = Snake.Util.add(this.segs[headIdx], dirVel);
    if (this.gameOver(newSeg)) {
      // game ending logic
    } else {
      this.segs.push(newSeg)
      this.removeTail()
    }
  }

  Snakes.prototype.removeTail = function () {
    if (this.growing === false) {
      this.segs.shift();
    }
  }

  Snakes.prototype.gameOver = function (move) {
    if (Snake.Util.outOfBounds(move)) {
      return true;
    } else if (this.hitSelf(move)) {
      return true;
    }
    return false;
  }

  Snakes.prototype.hitSelf = function (move) {
    for (var i = 0; i < this.segs.length; i++) {
      if (this.segs[i] === move) {
        return true;
      } else {
        return false;
      }
    }
  }

  Snakes.prototype.turn = function (dir) {
    if (Snake.Util.isOpposite(dir, this.dir)) {
        return;
    } else{
        this.dir = dir
    }
  }

  // Snakes.prototype.segments = function () {
  //   return this.segs
  // }

})();
