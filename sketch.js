var snake;
var food;
var score;

function setup() {
  createCanvas(750, 500);
  snake = new Snake(width / 2, height / 2);
  var fx = Math.round(random(0, width - 25) / 25) * 25;
  var fy = Math.round(random(0, height - 25) / 25) * 25;
  food = new Food(fx, fy);
  score = 0;
}

function draw() {
  background(50);
  food.show();
  if (frameCount % 10 == 0) {
    snake.update();
    if (food.x == snake.x && food.y == snake.y) {
      snake.eat();
      var fx = Math.round(random(0, width - 25) / 25) * 25;
      var fy = Math.round(random(0, height - 25) / 25) * 25;
      food = new Food(fx, fy);
      score += 5;
    }
  }
  fill(255);
  textSize(18);
  textAlign(LEFT);
  text("Score: " + score, 5, 20);
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
