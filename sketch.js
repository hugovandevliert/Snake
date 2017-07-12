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

function gameOver() {
  noLoop();
  fill(255);
  textSize(62);
  textAlign(CENTER);
  text("GAME OVER", width / 2, height / 2);
  textSize(28);
  text("Score: " + score, width / 2, height / 2 + 42);
}

function keyPressed() {
  switch (keyCode) {
    case 38:
      if (snake.dir != 'DOWN')
        snake.dir = 'UP';
      break;
    case 40:
      if (snake.dir != 'UP')
        snake.dir = 'DOWN';
      break;
    case 37:
      if (snake.dir != 'RIGHT')
        snake.dir = 'LEFT';
      break;
    case 39:
      if (snake.dir != 'LEFT')
        snake.dir = 'RIGHT';
      break;
  }
}
