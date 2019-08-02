const BASE_X = 768; 
const BASE_Y = 700; 

var is_tower_chosen = false; 
var is_enemy_chosen = false; 
var is_base_chosen = false; 

let bY = -50; 
let bX = -50; 
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
	for (let t of game.session.towers){ 
	t.selected = 
		Math.abs(t.x + t.width / 2 - x) < t.width / 2 && 
		Math.abs(t.y + t.height / 2 - y) < t.height / 2; 
	} 
}); 

function change_map(map, y, x, ch){ 
	let new_field = []; 
	for (let i = 0; i < y; i++){ 
		new_field.push(map[i]); 
	} 
	new_field.push(""); 
	new_field[y] = map[y].substr(0, x) + ch + map[y].substr(x + 1, map[y].length - x); 
	y += 1; 
	for (let i = y; y < map.length; y++){ 
		new_field.push(map[y]); 
	} 
	return new_field; 
} 

canvas.addEventListener("click", function(event){ 
	if (is_tower_chosen && game.session.game_state == BUILDING){ 
		if (bX < 25 && bY < 25 && new_map[bY][bX] == 'x'){ 
			new_map = change_map(new_map, bY, bX, "T"); 
			game.session.build_tower(tower_x, tower_y, game.session.players[game.session.personal_id], 1); 
			is_tower_chosen = false;
		} 
	} 
	//is_tower_chosen = false;
	for (t of game.session.towers){ 
		if (t.selected && !is_tower_chosen){ 
			t.clicked = true; 
		} 
		else{ 
			t.clicked = false; 
		} 
	} 
	if (is_enemy_chosen && game.session.game_state == BUILDING){ 
		if (Math.abs(event.clientX - BASE_X) < SPRITE_WIDTH && Math.abs(event.clientY - BASE_Y) < SPRITE_HEIGHT){ 
			game.session.spawn_enemy(player, bot); 
		} 
	} 
}); 

function draw_tower_place(drawer){ 
	if (bX < 25 && bY < 25 && bX >= 0 && bY >= 0 && new_map[bY][bX] == 'x' && is_tower_chosen){ 
		drawer.clear();
		drawer.render_square(tower_x, tower_y, SPRITE_WIDTH, SPRITE_HEIGHT);
		drawer.render_circle(tower_x + SPRITE_WIDTH / 2, tower_y + SPRITE_HEIGHT / 2, radius);
	} 
} 

function delete_tower(x, y){ 
	bX = Math.floor(x / SPRITE_WIDTH); 
	bY = Math.floor(y / SPRITE_HEIGHT); 
	new_map = change_map(new_map, bY, bX, 'x'); 
	bX = -50;
	bY = -50;
}

function disable_buttons(){
	for (let key in buttons){
		buttons[key].disabled = true;
	}	
}

function enable_buttons(){
	for (let key in buttons){
		buttons[key].disabled = false;
	}
}