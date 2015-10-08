(function () {
  if (typeof Snake === "undefined") {
    window.Snake = {}
  }

  var Board = Snake.Board = function () {
      this.grid = []
      this.setupBoard();
      this.snake = new Snake.Snakes
      this.grape = new Snake.Grape({
        pos: Snake.Util.randomPos()
        // pos: Snake.Util.center()
      })
      setInterval(this.grapeDrop.bind(this), Board.GRAPE_DROP_TIMER);
  }


  Board.DIM_Y = 40;
  Board.DIM_X = 40;
  // Board.DIM_Y = 3;
  // Board.DIM_X = 3;
  // Board.GRAPE_DROP_TIMER = 10 * 1000
  // Board.GRAPE_SHIFT_TIMER = 14 * 1000
  Board.GRAPE_DROP_TIMER =  50 * 1000
  // Board.GRAPE_SHIFT_TIMER = 20 * 1000

  Board.prototype.setupBoard = function () {
    for (var row = 0; row < Board.DIM_Y; row++) {
      this.grid.push([])
      for (var col = 0; col < Board.DIM_X; col++) {
        this.grid[row].push("empty")
      }
    }
  }

  Board.prototype.updateClasses = function (collection, status) {
    for (var i = 0; i < collection.length; i++) {
      var currentCollectRow = collection[i][0];
      var currentCollectCol = collection[i][1];
      this.grid[currentCollectRow][currentCollectCol] = status
    }
  }
  // updates grid with snake location
  // ex: segments = [[1, 0], [2, 0]]

  // im putting in array of grapes, then trying to grap its
  // x and y coords. but those are in each grap.pos
  // for snake.segs, passing an array of pos as collection
  // so, i could pass each grapes pos to updateClasses
  //DRY THIS UP

  Board.prototype.update = function () {
    this.grapeEat();
    this.grid = []
    this.setupBoard()
    this.updateClasses(this.snake.segs, "snaked");
    // this.updateClasses(this.grape, "graped")
    this.grid[this.grape.pos[0]][this.grape.pos[1]] = "graped"
  }

  // Board.prototype.grapeEat = function () {
  //   for (var i = 0; i < this.grapes.length; i++) {
  //     var lastEl = this.snake.segs.length - 1
  //     if (this.grapes[i].pos == this.snake.segs[lastEl]) {
  //
  //     }
  //   }
  // }

  Board.prototype.grapeEat = function () {
    var head = this.snake.head();
    if (Snake.Util.equal(head, this.grape.pos)) {
      this.snake.growTurns += 3
    }
  }

  Board.prototype.grapeDrop = function () {
    var grape = new Snake.Grape({
      pos: Snake.Util.randomPos()
    })
    for (var i = 0; i < this.snake.segs; i++) {
      if (grape.pos === this.snake.segs[i]) {
        this.grapeDrop()
      }
    }
    this.grape = grape;
  }

  // Board.prototype.grapeShift = function () {
  //   this.grapes.shift()
  // }
})();
