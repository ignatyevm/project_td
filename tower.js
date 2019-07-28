class Tower extends GameObject {
	
	constructor(x, y, radius, drawer, meta_drawer) {

		super(x, y, drawer);

		this.x = x;
		this.y = y;

		this.width = SPRITE_WIDTH;
		this.height = SPRITE_HEIGHT;

		this.drawer = drawer;
		this.meta_drawer = meta_drawer;

		this.radius = radius;

		this.selected = true;


		this.bullets = [];

		// 50 - 1s
		// 100 - 2s
		// 25 - 05.s
		this.max_fire_rate = 1;
		this.current_fire_rate = 0;

		this.targets_set = [];
		this.targets_queue = [];

	}

	set_damage(damge) {
		this.damage = damage;
	}

	set_fire_rate(fire_rate) {
		this.max_fire_rate = fire_rate * 50;
	}

	update_bullets() {
		for(let bullet of this.bullets) {
			bullet.render();
			bullet.update_motion();
		}
	}

	fire(target) {
		if(this.current_fire_rate % this.max_fire_rate == 0) {
			let bullet = new Bullet(this, target, this.drawer);
			bullet.set_sprite("sprites/mars/bullets/res_bullet.png");
			bullet.set_speed(7);
			this.bullets.push(bullet);
			this.current_fire_rate = 0;
		}
		this.current_fire_rate++;
	}

	render() {
		super.render();
		this.meta_drawer.render_circle(this.x + this.width / 2, this. y + this.height / 2, this.radius);
	}

	render_rotated(degrees){
		super.render_rotated(degrees);
		this.meta_drawer.render_circle(this.x + this.width / 2, this. y + this.height / 2, this.radius);
	}

}