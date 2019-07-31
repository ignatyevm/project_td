
let sprites_link = { 
	'.': "sprites/mars/map_sprites/road/horizontal_road.png",
	',': "sprites/mars/map_sprites/road/vertical_road.png",
	'q': "sprites/mars/map_sprites/road/left_lower_turn.png",
	'p': "sprites/mars/map_sprites/road/right_lower_turn.png",
	'b': "sprites/mars/map_sprites/road/right_upper_turn.png",
	'd': "sprites/mars/map_sprites/road/left_upper_turn.png",
	'w': "sprites/mars/map_sprites/road/interchange.png",
	'a': "sprites/mars/map_sprites/road/left_obstacle.png",
	's': "sprites/mars/map_sprites/road/right_obstacle.png",
	'e': "sprites/mars/map_sprites/road/upper_obstacle.png",
	'c': "sprites/mars/map_sprites/road/lower_obstacle.png",
	'v': "sprites/mars/map_sprites/road/just_road.png",
};

class Map {

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
