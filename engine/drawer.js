class Drawer {

	constructor(ctx, width, height) {
		this.ctx = ctx;
		this.width = width;
		this.height = height;
	}

	render(sprite, x, y, width, height) {
		this.ctx.drawImage(sprite, x, y, width, height);
	}

	clear() {
		this.ctx.clearRect(0, 0, this.width, this.height);		
	}

	render_rotated(sprite, x, y, width, height, degrees){
  		this.ctx.save();
  		this.ctx.translate(x + width / 2, y + height / 2);
  		this.ctx.rotate(degrees * Math.PI / 180.0);
  		this.ctx.translate(-x - width / 2 - 2, -y - height / 2 - 2);
  		this.ctx.drawImage(sprite, x, y, width, height);
  		this.ctx.restore();
	}

	render_circle(x, y, radius) {
		this.ctx.beginPath();
		this.ctx.strokeStyle = "red";
		this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
		this.ctx.closePath();
		this.ctx.stroke();
	}

	render_square(x, y, width, height){
		this.ctx.fillStyle = 'yellow';
		this.ctx.fillRect(x, y, width, height);
	}

	highlight_tower(x,y,width,height){
		this.ctx.beginPath();
		this.ctx.rect(x, y, width, height);
		this.ctx.closePath();
		this.ctx.stroke();
	}

	render_line(x1, y1, x2, y2, color){
		this.ctx.beginPath();
		this.ctx.moveTo(x1, y1);
		this.ctx.strokeStyle = color;
		this.ctx.lineWidth = "5px";
		this.ctx.lineTo(x2, y2);
		this.ctx.stroke();
	}

}