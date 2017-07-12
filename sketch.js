var snake;

function setup() {
  createCanvas(500, 500);
  snake = new Snake(width / 2, height / 2);
}

function draw() {
  background(50);
  if (frameCount % 20 == 0) {
    snake.update();
  }
  snake.show();
}

function keyPressed() {
  switch (keyCode) {
    case 38:
      snake.dir = 'UP';
      break;
    case 40:
      snake.dir = 'DOWN';
      break;
    case 37:
      snake.dir = 'LEFT';
      break;
    case 39:
      snake.dir = 'RIGHT';
      break;
  }
}

function Snake(x, y) {
  this.parts = [];
  this.length = 5;
  this.dir = 'UP';
  this.x = x;
  this.y = y;
  for (var i = 0; i < this.length; i++) {
    this.parts.push(new Part(this.x, this.y + i * 25));
  }

  this.update = function () {
    switch(this.dir) {
      case 'UP':
          this.y -= 25;
          break;
      case 'DOWN':
          this.y += 25;
          break;
      case 'LEFT':
          this.x -= 25;
          break;
      case 'RIGHT':
          this.x += 25;
          break;
    }
    for (var i = this.parts.length - 1; i >= 0; i--) {
      if (i == 0) {
        this.parts[i].move(this.x, this.y);
      } else {
        this.parts[i].move(this.parts[i - 1].x, this.parts[i - 1].y);
      }
    }
  }

  this.show = function() {
    for (var i = 0; i < this.parts.length; i++) {
      fill(0, 225, 0);
      rect(this.parts[i].x, this.parts[i].y, 25, 25);
    }
  }

  function Part(x, y) {
    this.x = x;
    this.y = y;

    this.move = function(x, y) {
      this.x = x;
      this.y = y;
    }
  }
}
