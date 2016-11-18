var CollisionController = (function() {
	return {
		init: function()
		{
			return this;
		},

		checkCollision(obj1, obj2)
		{
			if(obj1.x + obj1.w/2 > obj2.x-obj2.w/2 &&
				 obj1.x - obj1.w/2 < obj2.x + obj2.w/2 &&
			 	 obj1.y - obj1.h/2 < obj2.y + obj2.h/2 &&
			 	 obj1.y + obj1.h/2 > obj2.y - obj2.h/2)
			{
				return true;
			}
			return false;
		},

		handleWallCollision: function(snake, canv)
		{
			var currNode = snake.last;
			while(currNode !== null)
			{
				if(currNode.x > canv.width)
				{
					currNode.x -= canv.width;
				}
				if(currNode.x < 0)
				{
					currNode.x += canv.width;
				}
				if(currNode.y < 0)
				{
					currNode.y += canv.height;
				}
				if(currNode.y > canv.height)
				{
					currNode.y -= canv.height;
				}

				currNode = currNode.next;
			}
		},

		handleSnakeNodesCollision: function(snake)
		{
			var currNode = snake.last;
			while(currNode !== null)
			{
				var nodeToCheckWith = snake.head;
				while(nodeToCheckWith != null)
				{
					if(currNode !== nodeToCheckWith)
					{
						if(this.checkCollision(currNode, nodeToCheckWith))
						{
							// console.log('currNode ', currNode.x, currNode.y, 'other ', nodeToCheckWith.x, nodeToCheckWith.y);
							return true;
						}
					}

					nodeToCheckWith = nodeToCheckWith.prev;
				}

				currNode = currNode.next;
			}
			return false;
		},

		handleWhenSnakeDies: function(snake, drawer, points)
		{
			if( this.handleSnakeNodesCollision(snake) == true)
			{
				snake.suicide();
				drawer.clearScreen();
				drawer.gameOverMsg(points);
			}
		}
	}
})();
