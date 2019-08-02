
class GameObject {
	constructor(x, y, drawer) {
		this.x = x;
		this.y = y;
		this.width = SPRITE_WIDTH;
		this.height = SPRITE_HEIGHT;
		this.drawer = drawer;
	}

	set_sprite(sprite_link) {

		let local_drawer = this.drawer;
		let local_x = this.x;
		let local_y = this.y;
		let local_width = this.width;
		let local_height = this.height;
		let local_angle = this.rotation_angle;
		let local_sprite = new Image();

		this.sprite = local_sprite;

		this.sprite.onload = function() {
			local_drawer.render_rotated(local_sprite, local_x, local_y, local_width, local_height, local_angle);
		};

		this.sprite.src = sprite_link;
		
	}

	resize(width, height) {
		this.width = width;
		this.height = height;
	}

	render() {
		this.drawer.render(this.sprite, this.x, this.y, this.width, this.height);
	}

	render_rotated(degrees){
		this.drawer.render_rotated(this.sprite, this.x, this.y, this.width, this.height, degrees);
	}
}