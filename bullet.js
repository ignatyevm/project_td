

class Bullet extends GameObject{

 	constructor(source, target, drawer) {

        super(source.x, source.y, drawer);

        this.x = source.x;
        this.y = source.y;

        this.source = source;
 		this.target = target;

        this.resize(20, 20);

        this.dx = this.target.x - this.source.x;
		this.dy = this.target.y - this.source.y;

		let d = Math.sqrt(this.dx * this.dx + this.dy * this.dy);

		this.dx /= d; 
		this.dy /= d;

		this.speed = 10;
			
		//this.x += this.dx * speed;
		//this.y += this.dy * speed;
	}

	update(){
		this.x += this.dx * this.speed;
		this.y += this.dy * this.speed;
	}

}