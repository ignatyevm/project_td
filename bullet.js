class Bullet extends GameObject {

 	constructor(source, target, drawer) {

        super(source.x, source.y, drawer);

        this.x = source.x + source.width / 2;
        this.y = source.y + source.height / 2;

        this.source = source;
 		this.target = target;

        this.resize(5, 5);

		let d = get_distance(this.target, this.source);

		this.dx = (this.target.x - this.source.x + ENEMY_HITBOX / 2) / d; 
		this.dy = (this.target.y - this.source.y + ENEMY_HITBOX / 2) / d;
		
	}

	set_damage(damage){
		this.damage = damage;
	}

	set_speed(speed) {
		this.speed = speed;
	}

	update_motion() {
		let d = get_distance(this.target, {'x':this.x, 'y':this.y});
		this.dx = (this.target.x - this.x + ENEMY_HITBOX / 2) / d; 
		this.dy = (this.target.y - this.y + ENEMY_HITBOX / 2) / d;

		this.x += this.dx * this.speed;
		this.y += this.dy * this.speed;
	}

}