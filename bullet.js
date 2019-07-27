

class Bullet extends GameObject{

 	constructor(source, target, drawer) {

        super(source.x, source.y, drawer);

        this.x = source.x;
        this.y = source.y;

        this.source = source;
 		this.target = target;

        this.resize(20, 20);

		let d = get_distance(this.target, this.source);

		this.dx = (this.target.x - this.source.x) / d; 
		this.dy = (this.target.y - this.source.y) / d;

		this.speed = 10;
		
	}

	update_motion(){
		this.x += this.dx * this.speed;
		this.y += this.dy * this.speed;
	}

}