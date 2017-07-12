function Food(x, y) {
  this.x = x;
  this.y = y;

  this.show = function() {
    fill(225, 0, 0);
    rect(this.x, this.y, 25, 25);
  }
}
