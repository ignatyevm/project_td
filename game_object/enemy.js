class Enemy extends GameObject{
	constructor(hp, speed, price, pos, sprite, cur_cell, path) {
		super(pos, sprite);
		this.max_hp = hp;
		this.hp = hp;
		this.speed = speed;
		this.price = price;
		this.is_alive = true;
		this.is_on_Base = false;
		this.cur_cell = cur_cell;
		this.path = path;
		this.direction;
	}

	is_reach_base(base_pos){
		if (is_alive){
			if (this.pos == base_pos)
				return true;
		}
		return false;
	}

	get_damage(damage) {
		this.hp -= damage;
		if (this.hp <= 0) {
			this.is_alive = false;
		}
	}
	
	set_direction() {
		let x = this.path[cur_cell].x;
		let y = this.path[cur_cell].y;
		this.cur_cell++;
		if (x == this.path[cur_cell].x) {
			if (y < this.path[cur_cell].y) {
				this.direction = up;
			}
			else if (y > this.path[cur_cell].y) {
				this.direction = down;
			}
		}
		if (this.pos.y == this.path[cur_cell].y) {
			if (x < this.path[cur_cell].x){
				this.direction = left;
			}
			else if (x > this.path[cur_cell].x) {
				this.direction = right;
			}
		}
	}
	
	move(path) {
		let pm = new PathManager(new Position(2, 2), path);
		let step = pm.get_next_step(new Position(0, 0));

		while (step != false) {
			this.pos.x = step.x;
			this.pos.y = step.y;
			step = pm.get_next_step(step);

			let image = new Image();
			image.src = this.sprite_url;
			ctx.save();
			ctx.restore();
			ctx.drawImage(image, this.pos.x, this.pos.y, SPRITE_WIDTH, SPRITE_HEIGHT);
			sleep(1000);
		}
	}
}
