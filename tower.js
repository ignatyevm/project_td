class Tower extends GameObject{
	constructor(x, y, player, drawer, meta_drawer) {
		super(x, y, drawer);

		this.drawer = drawer;
		this.meta_drawer = meta_drawer;

		this.rotation_angle = 0;
		this.lvl = 0;
		
		this.selected = false;
		this.clicked = false;

		this.player = player;

		this.max_fire_rate = 1;
		this.current_fire_rate = 0;

		this.bullets = [];
		this.targets_set = [];
		this.targets_queue = [];

	}

	set_id(){
		this.id = id;
	}

	set_properties(){
		if (this.lvl < 2) {
			this.set_sprite(BASIC_TOWER[0][this.lvl]);
			this.damage = BASIC_TOWER[1][this.lvl];
			this.max_fire_rate = BASIC_TOWER[2][this.lvl] * 50;
			this.price = BASIC_TOWER[3][this.lvl];
			this.radius = BASIC_TOWER[4][this.lvl];
		}
	}

	to_highlight(){
		this.drawer.highlight_tower(this.x, this.y, this.width, this.height);
	}

	move_bullets() {
		for(let i = 0; i < this.bullets.length; i) {
			let target = this.bullets[i].target;
			let bullet_point = [this.bullets[i].x, this.bullets[i].y];
			let enemy_box = [target.x, target.y];
			if (is_in_square(enemy_box, bullet_point)) {
				target.take_damage(this.bullets[i].source.damage);
				if (this.targets_queue.length > 0){
					if (!target.is_alive() && target.id === this.targets_queue[0].id){
						this.targets_queue.shift();
					}
				}
				this.bullets.splice(i, 1);
				continue;
			}
			this.bullets[i].move();
			++i;
		}
	}

	fire(target) {
		if (this.current_fire_rate % this.max_fire_rate == 0) {
			let bullet = new Bullet(this, target, this.drawer);
			bullet.set_sprite(BASIC_BULLET_SPRITE);
			bullet.set_speed(BASIC_BULLET_SPEED);
			this.bullets.push(bullet);
			this.current_fire_rate = 0;
		}
		this.current_fire_rate++;
	}

	render() {
		super.render_rotated(this.rotation_angle);
	}

	clear_bullets() {
		while(this.bullets.length != 0) {
			this.bullets.pop();
		}
	}

	draw_radius(){
		this.meta_drawer.render_circle(this.x + this.width / 2, this. y + this.height / 2, this.radius);
	}
}

class MagnetTower extends Tower{
	constructor(x, y, player, drawer, meta_drawer){
		super(x, y, player, drawer, meta_drawer);
	}

	set_properties(){
		this.set_sprite(MAGNIT_TOWER[0][this.lvl]);
		this.damage = MAGNIT_TOWER[1][this.lvl];
		this.max_fire_rate = MAGNIT_TOWER[2][this.lvl] * 50;
		this.price = MAGNIT_TOWER[3][this.lvl];
		this.radius = MAGNIT_TOWER[4][this.lvl];
	}

	render() {
		this.drawer.render(this.sprite, this.x, this.y, this.width, this.height);
	}
}

class AOETower extends Tower {
	constructor(x, y, player, drawer, meta_drawer) {
		super(x, y, player, drawer, meta_drawer);
	}

	set_properties(){
		this.set_sprite(AOE_TOWER[0][this.lvl]);
		this.damage = AOE_TOWER[1][this.lvl];
		this.max_fire_rate = AOE_TOWER[2][this.lvl] * 50;
		this.price = AOE_TOWER[3][this.lvl];
		this.radius = AOE_TOWER[4][this.lvl];
	}	
}
