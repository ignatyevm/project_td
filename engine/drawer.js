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

}