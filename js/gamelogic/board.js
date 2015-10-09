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
      })
      this.points = 0;
      this.endGame = false;
      setInterval(this.grapeDrop.bind(this), Board.GRAPE_DROP_TIMER);
  }

  Board.DIM_Y = 30;
  Board.DIM_X = 30;

  Board.GRAPE_DROP_TIMER =  50 * 1000

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

  //DRY THIS UP

  Board.prototype.update = function () {
    if (this.snake.gameOver()) {
      this.endGame = true
    } else {
        this.grapeEat();
        this.grid = []
        this.setupBoard()
        this.updateClasses(this.snake.segs, "snaked");
        // this.updateClasses(this.snake.segs, "shake-little");
        this.grid[this.grape.pos[0]][this.grape.pos[1]] = "graped"
    }
  }

  Board.prototype.grapeEat = function () {
    var head = this.snake.head();
    if (Snake.Util.equal(head, this.grape.pos)) {
      this.snake.growTurns += 3
      this.points += 3
      this.grapeDrop()
    }
  }

  Board.prototype.grapeCheck = function (grape) {
    for (var i = 0; i < this.snake.segs; i++) {
      if (Snake.Util.equal(grape.pos, this.snake.segs[i])) {
        return true;
      }
    }
    return false;
  }
  //grape checks not working

  Board.prototype.grapeDrop = function () {
    var grape = new Snake.Grape({
      pos: Snake.Util.randomPos()
    })
    while (this.grapeCheck(grape)) {
      grape = new Snake.Grape({
        pos: Snake.Util.randomPos()
      })
    }
    this.grape = grape;
  }
})();
