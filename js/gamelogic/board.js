(function () {
  if (typeof Snake === "undefined") {
    window.Snake = {}
  }

  var Board = Snake.Board = function () {
      this.grid = []
      this.setupBoard();
      this.snake = new Snake.Snakes
      this.grapefruits = []
      // setInterval(this.grapeDrop, 6000)
  }

  Board.DIM_Y = 40;
  Board.DIM_X = 40;

  Board.prototype.setupBoard = function () {
    for (var row = 0; row < Board.DIM_Y; row++) {
      this.grid.push([])
      for (var col = 0; col < Board.DIM_X; col++) {
        this.grid[row].push("empty")
      }
    }
  }

  // updates grid with snake location
  // ex: segments = [[1, 0], [2, 0]]
  Board.prototype.update = function (segments) {
    this.grid = []
    this.setupBoard()
    for (var segment = 0; segment < segments.length; segment++) {
      var currentSegRow = segments[segment][0];
      var currentSegCol = segments[segment][1];
      this.grid[currentSegRow][currentSegCol] = "snaked"
    }
  }

  // Board.prototype.grapeDrop = function () {
  //   var grape = new Snake.Grapefruit(grape)
  // }
})();
