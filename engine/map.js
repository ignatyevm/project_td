
class GameMap {

	constructor(width, height, map_src, drawer){
		this.width = width
		this.height = height;
		this.map_src = map_src;
		this.drawer = drawer;
	}

	render() {
		let local_drawer = this.drawer;

		let tmp_image = new Image();
		tmp_image.src = BACKGROUND_MAP;

		tmp_image.onload = function() {
			local_drawer.render(tmp_image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		}		
	}
}
