(function () {
  if (typeof Snake === "undefined") {
    window.Snake = {}
  }

  var View = Snake.View = function ($el) {
    this.$el = $el;
    this.board = new Snake.Board;
    window.setInterval(this.step.bind(this), View.STEP_TIMER)
    $(window).on("keydown", this.handleKeyEvent.bind(this));
  }

  View.STEP_TIMER = 500
  // View.STEP_TIMER = 120

 //arrows and WASD
  View.CODE_DIRS = {
    37: "W",
    38: "N",
    39: "E",
    40: "S",
    65: "W",
    87: "N",
    68: "E",
    83: "S"
  }

  View.prototype.handleKeyEvent = function () {
    var snake = this.board.snake
    var dir = View.CODE_DIRS[event.which]
    var diff = Snake.Snakes.DIFFS[dir]
    snake.turn(diff)
  }

  // calls snake#move and draws board
  View.prototype.step = function () {
    var snake = this.board.snake
    snake.move();
    this.board.update();
    this.draw();
  }

  View.prototype.draw = function () {
    this.$el.empty();
    for (var row = 0; row < this.board.grid.length; row++) {
      var $row = $("<ul></ul>")
      for (var col = 0; col < this.board.grid[row].length; col++) {
        //status adds "empty" or "snaked" class
        var status = this.board.grid[row][col];
        var $col = $("<li></li>")
        $col.addClass(status);
        $col.data("pos", [row, col]);
        $row.append($col);
      }
      this.$el.append($row)
    }
  }
})();
