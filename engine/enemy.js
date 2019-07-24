const CELL_SIZE = 16;
var skin_weak = new Image();
skin_weak.src = "C:/Users/kvidi/Documents/HOMEWORK/summer practice 1/tower defense/project_td-master/engine/towerDefense_tile201.png";
var skin_stronger = new Image();
skin_stronger.src = "C:/Users/kvidi/Documents/HOMEWORK/summer practice 1/tower defense/project_td-master/engine/towerDefense_tile289.png";
var skin_strongest = new Image();
skin_strongest.src = "C:/Users/kvidi/Documents/HOMEWORK/summer practice 1/tower defense/project_td-master/engine/towerDefense_tile273.png";

class Enemy{
	constructor(hp, speed, price, x, y, skin,  cur_cell, path){
		this.max_hp = hp;
		this.hp = hp;
		this.speed = speed;
		this.price = price;
		this.posX = x;
		this.posY = y;
		this.skin = skin;
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
	draw(ctx){
		ctx.drawImage(this.skin ,this.posX, this.posY, CELL_SIZE, CELL_SIZE);
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






