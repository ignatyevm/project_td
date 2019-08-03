
var is_tower_chosen = false; 
var is_enemy_chosen = false; 
var is_base_chosen = false;
var state = 1;
let state_c = 2;

let radius_interval;

let bY = -50; 
let bX = -50; 
let tower_x = 0; 
let tower_y = 0; 
let canvas = document.getElementById("meta"); 

function get_offset(obj) {

	var curr_offset = { x: 0, y: 0 } 

	var new_offset = { x: 0, y: 0 }    

	if (obj !== null) {

		if(obj.scrollTop) curr_offset.y = obj.scrollTop;

	    if(obj.offsetTop) curr_offset.y -= obj.offsetTop;

	    if (obj.parentNode !== undefined) { 
      		new_offset = get_offset(obj.parentNode);   
   		}

   		curr_offset.x = curr_offset.x + new_offset.x;
   		curr_offset.y = curr_offset.y + new_offset.y; 

	}

	return curr_offset;
}

canvas.addEventListener("mousemove", function(event) { 


	var offset_pos = get_offset(this);

    let x = event.clientX + offset_pos.x;
    let y = event.clientY + offset_pos.y;

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
	meta_drawer.clear();
	if (is_tower_chosen && game.session.game_state == BUILDING){ 
		if (bX < 25 && bY < 25 && new_map[bY][bX] == 'x'){ 
			new_map = change_map(new_map, bY, bX, "T"); 
			game.session.build_tower(tower_x, tower_y, game.session.players[game.session.personal_id], tower_type); 
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
		for (let i = 0; i < chosen_number_of_players; ++i) {
			var offset_pos = get_offset(this);

    		let x = event.clientX + offset_pos.x;
		    let y = event.clientY + offset_pos.y;

			//console.log(event.clientX + ' ' + event.clientY);
			//let x = 
			if (Math.abs(x - HIT_BASE[i][0]) < SPRITE_WIDTH && Math.abs(y - HIT_BASE[i][1]) < SPRITE_HEIGHT && i != game.session.personal_id){ 
				game.session.spawn_enemy(game.session.players[game.session.personal_id], game.session.players[i], enemy_type); 
			} 
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

function is_tower_selected(towers, meta_drawer){
	let is_selected = false;
	for (let tower of towers){
		if (tower.selected){
			tower.draw_radius();
			state = 2;
			is_selected = true;
		}
	}
	if (state == 2 && !is_selected){
		state = 1;
		meta_drawer.clear();	
	}
}

function is_tower_clicked(towers, meta_drawer){
	let is_clicked = false;
	for (let tower of towers){
		if (tower.clicked){
			tower.to_highlight();
			state_c = 1;
			is_selected = true;
		}
	}
	if (state_c == 2 && !is_clicked){
		state_c = 1;
		meta_drawer.clear();
	}
}

function start_radius_interval(){
	radius_interval = setInterval(()=>{
		meta_drawer.clear();
		draw_tower_place(meta_drawer);
		is_tower_selected(game.session.towers, meta_drawer);
		is_tower_clicked(game.session.towers, meta_drawer);
	}, 10);
}

function clear_interval_radius() {
	clearInterval(radius_interval);
}

function alert_player_turn(personal_id) {
	alert(PLAYER_COLORS[personal_id] + ' your turn');
}