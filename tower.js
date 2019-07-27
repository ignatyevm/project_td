



class Tower extends GameObject{
	
	constructor(x, y, radius, drawer, meta_drawer) {
		super(x, y, drawer);

		this.x = x;
		this.y = y;

		this.width = SPRITE_WIDTH;
		this.height = SPRITE_HEIGHT;

		this.meta_drawer = meta_drawer;

		this.radius = radius;

		this.selected = true;
	}

	render(){
		super.render();
		this.meta_drawer.render_circle(this.x + this.width / 2, this. y + this.height / 2, this.radius);
	}

}