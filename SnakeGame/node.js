var Node = (function() {
	var x, y, symbol;

	return {
		init: function(x, y, w, h, symbol)
		{
			this.x = x;
			this.y = y;
			this.w = w;
			this.h = h;
			this.symbol = symbol;
			this.next = null;
			this.prev = null;
			return this;
		},

		addNode: function(snake)
		{
			// var snake.body[snake.body.length-1].x;
			// snake.body[snake.body.length-1].x;

			var newNode = Object.create(Node).init();

		},

		setPosition: function(x, y) {
			this.x = x;
			this.y = y;
		}
	}
})();
