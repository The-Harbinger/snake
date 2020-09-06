window.onload = function () {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.stroke();
  
  const game = new Game();
  const snake = new Snake({ canvas, ctx });
  const fruit = new Fruit({ canvas, ctx });

  window.addEventListener("keydown", (event) => {
    snake.changeDirection(event.key);
  });

  const gameloop = setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw(snake, fruit, game);
  }, 1000 / snake.speed);

  function draw(snake, fruit, game) {
    fruit.draw();
    snake.draw();
    snake.update();

    if (checkCollison(snake, fruit)) {
      game.add(1);
      snake.eat();
      fruit.update();
    }

    if (game.score === 20) {
      game.over();
    }

    if (game.isOver) {
      clearInterval(gameloop);
    }
  }

  function checkCollison(snake, fruit) {
    if (snake.snake[0].x >= fruit.x + fruit.scale || fruit.x >= snake.snake[0].x + snake.scale) {
      return false;
    }
    if (snake.snake[0].y >= fruit.y + fruit.scale || fruit.y >= snake.snake[0].y + snake.scale) {
      return false;
    }
    return true;
  }
};
