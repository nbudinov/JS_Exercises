"use strict";

var Snake = (function() {

	return {

		init: function(dir, speed, head) {
			this.dir = dir;
			this.speed = speed;
			this.head = head;
			this.last = head;
			this.alive = true;
			return this;
		},

		move: function(x, y)
		{
			var currNode = this.last;
			while((currNode !== this.head))
			{
				currNode.setPosition(currNode.next.x, currNode.next.y);
				currNode = currNode.next;
			}
			if(currNode === this.head)
			{
				if(this.dir === 'left')
				{
					currNode.setPosition(this.head.x -= this.speed, this.head.y);
				}
				else if(this.dir === 'right')
				{
					currNode.setPosition(this.head.x += this.speed, this.head.y);
				}
				else if(this.dir === 'up')
				{
					currNode.setPosition(this.head.x, this.head.y -= this.speed)
				}
				else if(this.dir === 'down')
				{
					currNode.setPosition(this.head.x, this.head.y += this.speed)
				}
			}
		},

		suicide: function()
		{
			this.head = null;
			this.alive = false;
		}
	}
})();
