class Player{
	constructor(hp, money, income){
		this.hp = hp;
		this.money = money;
		this.income = income;
		this.is_dead = false;
	}

	reload_player(hp, money, income){
		this.hp = hp;
 		this.income = income;
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

	increase_income(){

	}

	decrease_income(){

	}

	increase_money(){
		this.money += this.income;
	}

	decrease_money(cost){
		this.money -= cost;
	}
}