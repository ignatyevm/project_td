"use strict";
const MAX_TOWER_LVL = 3

class Tower extends GameObject {
	constructor(damage, atk_speed, price, range, pos, image){
		super(pos, image);
		this.player = player;
		this.atk_speed = atk_speed;
		this.damage = damage;
		this.price = price;
		this.range = range;
		this.slowdown = slowdown;
		this.region = region;
		this.level = 1;
	}

	attack(){


	}

}








































class MachineGun extends Tower {
	improvement() {
	    this.atk_speed += 20;
		this.damage *= 2;
		this.price *= 2;
		this.range += 5;
		this.level++;
	}
}

class MagneticGun extends Tower {
	improvement() {
	    this.atk_speed += 10;
		this.damage *= 2;
		this.price *= 2;
		this.slowdown *= 2;
		this.range += 5;
		this.level++;
	}
}

class BunchGun extends Tower {
	improvement() {
	    this.atk_speed += 20;
		this.damage *= 2;
		this.price *= 2;
		this.region += 5;
		this.range += 5;
		this.level++;
	}
}
