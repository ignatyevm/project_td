class Player{
	constructor(hp, money, base_pos){
		this.hp = hp;
		this.money = money;
		this.is_dead = false;
		this.base_pos = base_pos;
	}

	get_damage(){
		if (this.hp > 0){
			--this.hp;
		}
		if(this.hp == 0){
			this.is_dead = true;
		}
	}

	increase_money(money){
		this.money += money;
	}

	decrease_money(cost){
		this.money -= cost;
	}
}