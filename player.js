class Player {
	constructor(hp, money, road_on_map) {
		this.hp = hp;
		this.money = money;
		this.is_dead = false;
		this.road_on_map = road_on_map;
	}

	get_damage() {
		if (this.hp > 0) {
			--this.hp;
		}
		
		if(this.hp == 0) {
			this.is_dead = true;
		}
	}		

	increase_money(money) {
		this.money += money;
	}

	decrease_money(cost) {
		this.money -= cost;
	}
}