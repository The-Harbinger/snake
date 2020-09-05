function Snake({ canvas, ctx }) {
  this.snake = [
    { x: 5, y: 0 },
    { x: 0, y: 0 },
  ];
  this.x = 0;
  this.y = 0;
  this.scale = 5;
  this.direction = "headRight";
  this.color = "#ffffff";
  this.speed = 20;

  this.draw = () => {
    this.snake.forEach((item) => {
      ctx.strokeStyle = "#000000";
      ctx.fillStyle = this.color;
      // ctx.fillRect(item.x, item.y, this.scale, this.scale);
      ctx.beginPath();
      ctx.rect(item.x, item.y, this.scale, this.scale);
      ctx.fill();
      ctx.stroke();
    });
  };

  this.update = () => {
    this.snake.pop();
    this.grow();
  };

  this.changeDirection = (key) => {
    if (key === "ArrowUp") {
      if (this.direction !== "headDown") {
        this.direction = "headUp";
      }
    }
    if (key === "ArrowDown") {
      if (this.direction !== "headUp") {
        this.direction = "headDown";
      }
    }
    if (key === "ArrowLeft") {
      if (this.direction !== "headRight") {
        this.direction = "headLeft";
      }
    }
    if (key === "ArrowRight") {
      if (this.direction !== "headLeft") {
        this.direction = "headRight";
      }
    }
  };

  this.eat = () => {
    this.grow();
  };

  this.grow = () => {
    if (this.direction === "headRight") {
      this.snake.unshift({
        x: this.snake[0].x + this.scale,
        y: this.snake[0].y,
      });
    }
    if (this.direction === "headLeft") {
      this.snake.unshift({
        x: this.snake[0].x - this.scale,
        y: this.snake[0].y,
      });
    }
    if (this.direction === "headUp") {
      this.snake.unshift({
        x: this.snake[0].x,
        y: this.snake[0].y - this.scale,
      });
    }
    if (this.direction === "headDown") {
      this.snake.unshift({
        x: this.snake[0].x,
        y: this.snake[0].y + this.scale,
      });
    }
    if (this.snake[0].x >= canvas.width) {
      this.snake.pop();
      this.snake.unshift({
        x: 0,
        y: this.snake[0].y,
      });
    }
    if (this.snake[0].x < 0) {
      this.snake.pop();
      this.snake.unshift({
        x: canvas.width - this.scale,
        y: this.snake[0].y,
      });
    }
    if (this.snake[0].y < 0) {
      this.snake.pop();
      this.snake.unshift({
        x: this.snake[0].x,
        y: canvas.height - this.scale,
      });
    }
    if (this.snake[0].y >= canvas.height) {
      this.snake.pop();
      this.snake.unshift({
        x: this.snake[0].x,
        y: 0,
      });
    }
  };
}
