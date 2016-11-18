
(function main()
{
	var pace = 200;
	var points = 0;
	var canv = document.getElementById('myCanvas');
	var context = canv.getContext("2d");

	var theFood = Object.create(Food).init(100, 100, 8, 8);
	var headNode = Object.create(Node).init(55, 55, 8, 8);
	var snake = Object.create(Snake).init('right', 10, headNode);
	var collisionController = Object.create(CollisionController).init();
	var nodeController = Object.create(NodeController).init();
	var keyController = Object.create(KeyController).init();
	var foodController = Object.create(FoodController).init();
	var drawer = Object.create(Drawer).init(canv, context);
	var count = 0;
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

			count++;
			console.log(count);
			if((count) % 5 === 0)
			{
				pace = pace-50;
				console.log(pace, count);
			}

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
