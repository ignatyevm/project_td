class Drawer{
	constuctor(game_field){
		this.element = document.getElementById(game_field);
		this.ctx = null;
	}
	clear(){
		this.ctx.clearRect(0, 0, this.element.width, this.element.height);
	}
	draw(image, x, y, width, height){
		ctx.drawImage(image, x, y, width, height);
	}
}