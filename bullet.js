class Bullet extends GameObject {

 	constructor(source, target, drawer) {

        super(source.x, source.y, drawer);

        this.x = source.x + source.width / 2;
        this.y = source.y + source.height / 2;

        this.source = source;
 		this.target = target;

        this.resize(3, 3);

		let d = get_distance(this.target, this.source);

		this.dx = (this.target.x - this.source.x + SPRITE_WIDTH / 2) / d; 
		this.dy = (this.target.y - this.source.y + SPRITE_HEIGHT / 2) / d;
		
	}

	set_speed(speed) {
		this.speed = speed;
	}

	update_motion() {

		let src_copy = new (class Points{
			constructor(x,y){
				this.x = x;
				this.y = y;
			}
		})(this.x, this.y);

		let d = get_distance(this.target, src_copy);
		this.dx = (this.target.x - this.x + SPRITE_WIDTH / 2) / d; 
		this.dy = (this.target.y - this.y + SPRITE_HEIGHT / 2) / d;

		this.x += this.dx * this.speed;
		this.y += this.dy * this.speed;
	}

}