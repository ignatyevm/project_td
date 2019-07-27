class Drawer{

	constructor(ctx, width, height){
		this.ctx = ctx;
		this.width = width;
		this.height = height;
	}

	render(sprite, x, y, width, height){
		this.ctx.drawImage(sprite, x, y, width, height);
	}

	clear(){
		this.ctx.clearRect(0, 0, this.width, this.height);		
	}

	render_circle(x, y, radius){
		this.ctx.beginPath();
		this.ctx.strokeStyle = "red";
		this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
		this.ctx.closePath();
		this.ctx.stroke();
	}

}