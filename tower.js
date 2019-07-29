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
		// 25 - 0.5.s
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
		for(let i = 0; i < this.bullets.length; i) {
			let bullet_point = [this.bullets[i].x, this.bullets[i].y];
			let enemy_sprite = [[this.targets_queue[0].x, this.targets_queue[0].y + 32], 
								[this.targets_queue[0].x + 32, this.targets_queue[0].y + 32],
			                    [this.targets_queue[0].x + 32, this.targets_queue[0].y],
			                    [this.targets_queue[0].x, this.targets_queue[0].y]];
			if (intersection_square(enemy_sprite, bullet_point)) {
				this.bullets.splice(i, 1);
				continue;
			}
			this.bullets[i].render();
			this.bullets[i].update_motion()
			++i;
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

}