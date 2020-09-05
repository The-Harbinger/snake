function Game() {
  this.score = 0;
  this.isOver = false;

  this.add = (score) => {
    this.score += score;
  };

  this.over = () => {
    this.isOver = true;
  };
}
