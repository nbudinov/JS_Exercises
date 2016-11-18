var NodeController = (function()
{
	return {
		init: function()
		{
			return this;
		},
		addNodeToSnake: function(snake)
		{
			var newNode = Object.create(Node).init(snake.last.x-10, snake.last.y-10, 8, 8);

			newNode.next = snake.last;
			snake.last.prev = newNode;
			snake.last = newNode;
		}
	}
})();
