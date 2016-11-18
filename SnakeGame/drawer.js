var Drawer = (function() {
	return {
		init: function(canvas, context, objToDraw) {
			this.canvas = canvas;
			this.context = context;
			return this;
		},
		draw: function(objToDraw)
		{
			this.context.fillStyle = "rgb(200,0,0)";
			this.context.fillRect (objToDraw.x, objToDraw.y, objToDraw.w , objToDraw.h);
		},

		drawFood: function(food)
		{
			if(food.eaten === false)
			{
				this.context.fillStyle = "rgb(200,110,0)";
				this.context.fillRect (food.x, food.y, food.w , food.h);
			}
		},

		clearScreen: function()
		{
			this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		},

		drawSnake: function(snake)
		{
				var currNode = snake.last;
				while(currNode !== null)
				{
					this.draw(currNode);
					currNode = currNode.next;
				}
		},

		drawPoints: function(points)
		{
			this.context.font="17px Georgia";
			this.context.fillText("Points: " + points, this.canvas.width - 95, 20);
		},

		gameOverMsg: function(points)
		{
			this.context.font="20px Georgia";
			this.context.fillText("GAME OVER! Your points are " + points, 100, this.canvas.height/2);
		}
	}
})();
