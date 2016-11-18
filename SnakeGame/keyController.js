
var KeyController = (function() {
	return {
		init : function() {
			return this;
		},
		getInput: function(snake)
		{
			document.addEventListener('keydown', function(e)
			{
				if(e.keyCode === 37 && snake.dir !== 'right') {
					snake.dir = 'left';
				} else
				if(e.keyCode === 38 && snake.dir !== 'down') {
					snake.dir = 'up';
				} else
				if(e.keyCode === 39 && snake.dir !== 'left') {
					snake.dir = 'right';
				} else
				if(e.keyCode === 40 && snake.dir !== 'up') {
					snake.dir = 'down';
				}
			})
		}
	}
})()
