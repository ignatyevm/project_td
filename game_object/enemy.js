const UP = 3;
const LEFT = 1;
const DOWN = 4;
const RIGHT = 2;

class Enemy extends GameObject {
	constructor(hp, price, pos, sprite, pos_in_path, road_om_map) {
		super(pos, sprite);
		this.max_hp = hp;
		this.hp = hp;
		this.price = price;
		this.is_alive = true;
		this.pos_in_path = pos_in_path;
		this.road_om_map = road_om_map;
		this.direction;
	}

	is_reach_base(base_pos) {
		if (is_alive) {
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
	
	move(road_om_map) {
		if (this.road_om_map.direction[this.pos_in_path] == UP) {
			this.pos.y -= 1;
		}

		if (this.road_om_map.direction[this.pos_in_path] == DOWN) {
			this.pos.y += 1;
		}

		if (this.road_om_map.direction[this.pos_in_path] == LEFT) {
			this.pos.x -= 1;
		}

		if (this.road_om_map.direction[this.pos_in_path] == RIGHT) {
			this.pos.x += 1;
		}

		this.pos = this.road_om_map.road[++this.pos_in_path];
	}
}
