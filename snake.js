function Snake(x, y) {
  this.x = x;
  this.y = y;
  this.dir = 'UP';
  this.parts = [];
  for (var i = 0; i < 5; i++) {
    this.parts.push(new Part(this.x, this.y + i * 25));
  }

  this.eat = function() {
    this.parts.push(new Part(this.parts[this.parts.length - 1].x, this.parts[this.parts.length - 1].y))
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

  this.collision = function() {
    if (this.x < 0 || this.x >= width || this.y < 0 || this.y >= height) {
      return true;
    }

    for (var i = 1; i < this.parts.length; i++) {
      if (this.x == this.parts[i].x && this.y == this.parts[i].y) {
        return true;
      }
    }
    return false;
  }

  this.show = function() {
    for (var i = 0; i < this.parts.length; i++) {
      this.parts[i].show();
    }
  }

  function Part(x, y) {
    this.x = x;
    this.y = y;

    this.move = function(x, y) {
      this.x = x;
      this.y = y;
    }

    this.show = function() {
      fill(0, 225, 0);
      rect(this.x, this.y, 25, 25);
    }
  }
}
