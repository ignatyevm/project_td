class Enemy{
	constructor(hp, speed, price, sprite, cur_cell, path){
		this.max_hp = hp;
		this.hp = hp;
		this.speed = speed;
		this.price = price;
		this.sprite = sprite;
		this.is_alive = true;
		this.is_on_Base = false;
		this.cur_cell = cur_cell;
		this.path = path;
	}

	get_damage(damage){
		this.hp -= damage;
		if (this.hp <= 0){
			this.is_alive = false;
		}
	}

	move(){
		this.cur_cell++; 
		if (this.cur_cell >= this.path.length){
			this.is_on_Base = true;
		}
		else
		{
			this.posX = this.path[this.cur_cell].x;
			this.posY = this.path[this.cur_cell].y;
		}
	}
}

class Weak extends Enemy{
	constructor(path){
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

class Stronger extends Enemy{
	constructor(path){
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

class Strongest extends Enemy{
	constructor(path){
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






