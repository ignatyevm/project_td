

class Tower{
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.width = SPRITE_WIDTH;
		this.height = SPRITE_HEIGHT;
		this.radius = RADIUS;
		this.selected = false;
	}
	draw(ctx){
		let image = new Image()
		image.src = 'sprites/towerDefense_tile291.png'
		ctx.drawImage(image, this.x, this.y, this.width, this.height);
		if (this.selected)
			this.draw_circle(ctx);
	}
	draw_circle(ctx){
		ctx.beginPath();
		ctx.arc(this.x + this.width / 2, this.y + this.height / 2, this.radius, 0, 2 * Math.PI);
		ctx.closePath();
		ctx.stroke();
	}
}

let is_tower_chosen = false;

let tower1_button = document.getElementById("tower_type1");
let tower2_button = document.getElementById("tower_type2");
let attack_tower = document.getElementById("attack");
tower1_button.addEventListener("click", ()=>{
		is_tower_chosen = true;
		towerInfo.value = "tower 1";
});
tower2_button.addEventListener("click", ()=>{
	is_tower_chosen = true;
	towerInfo.value = "tower 2";
});
attack.addEventListener('click', ()=>{
	//objects.push(new GameObject(enemy));
});



canvas.addEventListener("mousemove", function(event) {
	let x = event.clientX;
 	let y = event.clientY;
	if (is_tower_chosen){
		bX = Math.floor(x / SPRITE_WIDTH);
		bY = Math.floor(y / SPRITE_HEIGHT);
		tower_x = SPRITE_WIDTH * bX;
		tower_y = SPRITE_HEIGHT * bY;
	}
	for (let t of towers){
		t.selected =
			Math.abs(t.x + t.width / 2 - x) <= t.width &&
			Math.abs(t.y + t.height / 2 - y) <= t.height;
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
		if (map[bY][bX] == CHAR_FILL){
			map = set_tower(map, bY, bX);
			towers.push(new testTower(tower_x, tower_y));
			is_tower_chosen = false;
		}
	}
});

foo = function(){
	ctx.clearRect(0, 0, 720, 720);
	if (map[bY][bX] == CHAR_FILL){
		ctx.fillStyle = 'green';
		ctx.fillRect(tower_x, tower_y, SPRITE_WIDTH, SPRITE_HEIGHT);
	}
	for (t of towers){
		t.draw(ctx);
	}
	window.setTimeout(foo, 16);
}
window.setTimeout(foo, 16);