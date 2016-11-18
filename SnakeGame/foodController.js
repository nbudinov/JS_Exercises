var FoodController = (function()
{
	return {
		init: function()
		{
			return this;
		},

		generateFood: function(canvas, food)
		{
			var foodX = Math.floor((Math.random() * canvas.width) + 1);
			var foodY = Math.floor((Math.random() * canvas.height) + 1);

			food.x = foodX;
			food.y = foodY;
			food.eaten = false;
		},

		foodIsEaten: function(food)
		{
			if(food.eaten)
			{
				return true;
			}
			else
				return false;
		}
	}
})();
