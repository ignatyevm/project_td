class GameObject{

	constructor(x, y, drawer){
		this.x = x;
		this.y = y;
		this.drawer = drawer;
	}

	set_sprite(sprite_link){

		let local_drawer = this.drawer;
		let local_x = this.x;
		let local_y = this.y;
		let local_sprite = new Image();

		this.sprite = local_sprite;

		this.sprite.onload = function(){
			local_drawer.render(local_sprite, local_x, local_y, SPRITE_WIDTH, SPRITE_HEIGHT);
		};

		this.sprite.src = sprite_link;
		
	}

	render(){
		this.drawer.render(this.sprite, this.x, this.y, SPRITE_WIDTH, SPRITE_HEIGHT);
	}

}