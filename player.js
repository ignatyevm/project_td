class Player {

	constructor(id, base_x, base_y, base_hp) {
		this.id = id;
		this.base_x = base_x;
		this.base_y = base_y;
		this.base_hp = base_hp;
	}

	set_money(money) {
		this.money = money;
	}

	set_hp(base_hp) {
		this.base_hp = base_hp;
	}

	add_money(money) {
		this.money += money;
	}

	remove_money(money) {
		this.money -= money;
	}

	take_damage(damage) {
		this.base_hp -= damage;
	}

	is_dead() {
		return this.base_hp <= 0;
	}
}