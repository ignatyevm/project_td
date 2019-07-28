class Bullet extends GameObject {

 	constructor(source, target, drawer) {

        super(source.x, source.y, drawer);

        this.x = source.x + source.width / 2;
        this.y = source.y + source.height / 2;

        this.source = source;
 		this.target = target;

        this.resize(5, 5);

		let d = get_distance(this.target, this.source);

		this.dx = (this.target.x - this.source.x + this.target.x / 32) / d; 
		this.dy = (this.target.y - this.source.y) / d;
		
	}

	set_speed(speed) {
		this.speed = speed;
	}

	update_motion() {
		this.x += this.dx * this.speed;
		this.y += this.dy * this.speed;
	}

}