var is_tower_chosen = false;
var tower;


let testcanvas = document.getElementById('testCanvas');

let canvas = document.getElementById('game_field');
let ctx = testcanvas.getContext('2d');

let bX = 0;
let bY = 0;
let tower_y = 0;
let tower_x = 0; 

let updated_map = new CreateMap(1);
let map = updated_map;

let new_session = new Session(1);

class testTower{
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.width = SPRITE_WIDTH;
		this.height = SPRITE_HEIGHT;
	}
	draw(ctx){
		ctx.fillStyle = 'blue';
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

testcanvas.addEventListener("mousemove", function(event) {
	if (is_tower_chosen){
		let x = event.clientX;
	 	let y = event.clientY;
		bX = Math.floor(x / SPRITE_WIDTH);
		bY = Math.floor(y / SPRITE_HEIGHT);
		tower_x = SPRITE_WIDTH * bX;
		tower_y = SPRITE_HEIGHT * bY;
	}

});



towers = [];

function set_tower(map, y, x){
	let new_field = [];
	for (let i = 0; i < y; i++){
		new_field.push(map[i]);
	}
	new_field.push("");
	new_field[y] = map[y].substr(0, x) + "T" + map[y].substr(x + 1, map[y].length - x);
	y += 1;
	for (let i = y; y < map.length; y++){
		new_field.push(map[y]);
	}

	return new_field;
}

testcanvas.addEventListener("click", function(event){
	if (is_tower_chosen){
		if (map[bY][bX] == CHAR_FILL){
			map = set_tower(map, bY, bX);
			//map[bY][bX] = "T";
			towers.push(new testTower(tower_x, tower_y));
			new_session.objects.push(new GameObject("towerDefense_tile291.png", new Position(tower_x, tower_y)));
			is_tower_chosen = false;
		}
		
	}
	
});

foo = function(){
	if (map[bY][bX] == CHAR_FILL){
		ctx.clearRect(0, 0, 720, 720);
		ctx.fillStyle = 'green';
		ctx.fillRect(tower_x, tower_y, SPRITE_WIDTH, SPRITE_HEIGHT);
	}
	
	for (t of towers){
		t.draw(ctx);
	}
	window.setTimeout(foo, 16);
}
window.setTimeout(foo, 16);
