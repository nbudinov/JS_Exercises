var Food = (function()
{
	return {
		init: function(x, y, w, h, src)
		{
			this.x = x;
			this.y = y;
			this.w = w;
			this.h = h;
			this.eaten = false;
			// var foodImg = document.createElement('img');
			// foodImg.src = src;
			// foodImg.setAttribute('width', '10px');
			// foodImg.setAttribute('height', '10px');
			return this;
		}
	}
})();
