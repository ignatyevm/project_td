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
		let local_sprite = new Image();

		this.sprite = local_sprite;

		this.sprite.onload = function() {
			local_drawer.render(local_sprite, local_x, local_y, local_width, local_height);
		};

		this.sprite.src = sprite_link;
		
	}

	animate(first_sprite, second_sprite){
        if (this.sprite_type == FIRST_FRAME){
            this.set_sprite("sprites/mars/enemy_sprite/bug_1/bug_1_1.png");
            this.sprite_type = SECOND_FRAME;
        }
        else if (this.sprite_type == SECOND_FRAME){
            this.sprite_type = THIRD_FRAME;
        }
        else if (this.sprite_type == THIRD_FRAME){
        	this.set_sprite("sprites/mars/enemy_sprite/bug_1/bug_1_2.png");
            this.sprite_type = FORTH_FRAME;
        }
        else{
            this.sprite_type = FIRST_FRAME;
        }
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