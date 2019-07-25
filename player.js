class Player{
	constructor(hp, money){
		this.hp = hp;
		this.money = money;
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