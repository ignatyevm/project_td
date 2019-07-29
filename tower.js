class Tower extends GameObject {
	
	constructor(x, y, radius, player, drawer, meta_drawer) {

		super(x, y, drawer);

		this.x = x;
		this.y = y;

		this.width = SPRITE_WIDTH;
		this.height = SPRITE_HEIGHT;

		this.drawer = drawer;
		this.meta_drawer = meta_drawer;

		this.radius = radius;

		this.selected = false;

		this.to_sell = false;

		this.player = player;

		this.bullets = [];

		// 50 - 1s
		// 100 - 2s
		// 25 - 0.5.s
		this.max_fire_rate = 1;
		this.current_fire_rate = 0;

		this.targets_set = [];
		this.targets_queue = [];

	}

	set_damage(damage) {
		this.damage = damage;
	}

	set_fire_rate(fire_rate) {
		this.max_fire_rate = fire_rate * 50;
	}

	update_bullets() {
		for(let i = 0; i < this.bullets.length; i) {
			let target = this.bullets[i].target;
			let bullet_point = [this.bullets[i].x, this.bullets[i].y];
			let enemy_box = [[target.x, target.y + ENEMY_HITBOX], 
							 [target.x + ENEMY_HITBOX, target.y + ENEMY_HITBOX],
			                 [target.x + ENEMY_HITBOX, target.y],
			                 [target.x, target.y]];
			if (is_in_square(enemy_box, bullet_point)) {
				target.take_damage(this.bullets[i].damage);
				if (!target.is_alive()){
					this.targets_queue.shift();
				}
				this.bullets.splice(i, 1);
				continue;
			}
			this.bullets[i].render();
			this.bullets[i].update_motion();
			++i;
		}
	}

	fire(target) {
		if(this.current_fire_rate % this.max_fire_rate == 0) {
			let bullet = new Bullet(this, target, this.drawer);
			bullet.set_damage(this.damage);
			bullet.set_sprite(BASIC_BULLET_SPRITE);
			bullet.set_speed(BASIC_BULLET_SPEED);
			this.bullets.push(bullet);
			this.current_fire_rate = 0;
		}
		this.current_fire_rate++;
	}

	render_rotated(degrees){
		super.render_rotated(degrees);
		if (this.selected)
			this.meta_drawer.render_circle(this.x + this.width / 2, this. y + this.height / 2, this.radius);
		
	}

	render() {
		super.render();
		if (this.selected)
			this.meta_drawer.render_circle(this.x + this.width / 2, this. y + this.height / 2, this.radius);
	}

}
