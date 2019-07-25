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
	
	move() {
		if (Math.floor(this.pos.x) == path[this.cur_cell].x && Math.floor(this.pos.y) == path[this.cur_cell].y) {
			this.set_direction();
		}
		if (this.cur_cell == path.length) {
			this.is_on_Base = true;
		}
		else{
			switch (direction){
			case up:
				this.pos.y -= speed;
				break;
			case down:
				this.pos.y += speed;
				break;
			case left:
				this.pos.x -= speed;
				break;
			case right:
				this.pos.x += speed;
				break;
			}
		
		}
	}
}





















class Weak extends Enemy {
	constructor(path) {
		super();
		this.max_hp = 10;
		this.hp = 10;
		this.speed = 5;
		this.price = 30;
		this.posX = 0;
		this.posY = 0;
		this.skin = skin_weak;
		this.is_alive = true;
		this.is_on_Base = false;
		this.cur_cell = 0;
		this.path = path;
	}


}

class Stronger extends Enemy {
	constructor(path) {
		super();
		this.max_hp = 20;
		this.hp = 20;
		this.speed = 10;
		this.price = 50;
		this.posX = 0;
		this.posY = 0;
		this.skin = skin_stronger;
		this.is_alive = true;
		this.is_on_Base = false;
		this.cur_cell = 0;
		this.path = path;
	}
}

class Strongest extends Enemy {
	constructor(path) {
		super();
		this.max_hp = 30;
		this.hp = 30;
		this.speed = 15;
		this.price = 70;
		this.posX = 0;
		this.posY = 0;
		this.skin = skin_strongest;
		this.is_alive = true;
		this.is_on_Base = false;
		this.cur_cell = 0;
		this.path = path;
	}
}
