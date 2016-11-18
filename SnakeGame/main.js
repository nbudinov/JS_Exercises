(function main()
{
	var pace = 150, snakeSpeed = 10,
		points = 0;
		canv = document.getElementById('myCanvas'),
		context = canv.getContext("2d"),
		theFood = Object.create(Food).init(100, 100, 8, 8),
		headNode = Object.create(Node).init(55, 55, 8, 8),
		snake = Object.create(Snake).init('right', snakeSpeed, headNode),
		collisionController = Object.create(CollisionController).init(),
		nodeController = Object.create(NodeController).init(),
		keyController = Object.create(KeyController).init(),
		foodController = Object.create(FoodController).init(),
		drawer = Object.create(Drawer).init(canv, context);

	keyController.getInput(snake);

	var myTimer = setInterval(function()
	{
		if(snake.alive)
		{
			if(theFood.eaten)
			{
				points++;
				foodController.generateFood(canv, theFood)
				nodeController.addNodeToSnake(snake);
			}

			snake.move();

			if(collisionController.checkCollision(snake.head, theFood))
			{
				theFood.eaten = true;
			}

			collisionController.handleWallCollision(snake, canv);

			// --!!-- --!!--  rendering --!!-- --!!--
			drawer.clearScreen();

			drawer.drawFood(theFood)

			drawer.drawSnake(snake);

			drawer.drawPoints(points);

			collisionController.handleWhenSnakeDies(snake, drawer, points);
		}

	}, pace);


})();
