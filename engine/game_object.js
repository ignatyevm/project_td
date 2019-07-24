class GameObject{

	constructor(pos, sprite){
		this.pos = pos;
		this.sprite = sprite;
	}

	translate_x(x){
		this.pos.x += x;
	}

	translate_y(y){
		this.pos.y += y;
	}

	render(){
		this.sprite.render();
	}

}