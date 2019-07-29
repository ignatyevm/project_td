const BASE_X = 768;
const BASE_Y = 700;

var is_tower_chosen = false;
var is_enemy_chosen = false;
var is_tower_to_sell = false;
var is_base_chosen = false;

let bY = 0;
let bX = 0;
let tower_x = 0;
let tower_y = 0;
let canvas = document.getElementById("meta");

canvas.addEventListener("mousemove", function(event) {
	let x = event.clientX;
 	let y = event.clientY;
		
	if (is_tower_chosen){
		bX = Math.floor(x / SPRITE_WIDTH);
		bY = Math.floor(y / SPRITE_HEIGHT);
		tower_x = SPRITE_WIDTH * bX;
		tower_y = SPRITE_HEIGHT * bY;
	}
	for (let t of session.towers){
		t.selected =
			Math.abs(t.x + t.width / 2 - x) < t.width / 2 &&
			Math.abs(t.y + t.height / 2 - y) < t.height / 2;
	}
});

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

canvas.addEventListener("click", function(event){ 
	if (is_tower_chosen){
		if (new_map[bY][bX] == 'x'){
			new_map = set_tower(new_map, bY, bX);
			session.build_tower(tower_x, tower_y);
			is_tower_chosen = false;
		}
	}
	if (is_enemy_chosen){
		if (Math.abs(event.clientX - BASE_X) < SPRITE_WIDTH &&
			Math.abs(event.clientY - BASE_Y) < SPRITE_HEIGHT){
			is_base_chosen = true;
			alert("base_chosen");
		} 
	}
	for (t of session.towers){
		if (t.selected){
			t.to_sell = true;
			alert("gg");
		}
	}
});

function check_tower(ctx){

	if (new_map[bY][bX] == 'x' && is_tower_chosen){
			ctx.fillStyle = 'yellow';
			ctx.fillRect(tower_x, tower_y, SPRITE_WIDTH, SPRITE_HEIGHT);
	}
}


