class Player extends GameObject {
	constructor(x, y, drawer) {
		super(x, y, drawer);
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