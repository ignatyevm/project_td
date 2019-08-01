const BUILD_SECONDS = 10;
class GameSession {

	constructor(map_drawer, objects_drawer, meta_drawer) {
		this.frames = 0;
		this.map_drawer = map_drawer;
		this.objects_drawer = objects_drawer;
		this.meta_drawer = meta_drawer;

		this.enemies_id = 0;
		this.players_id = 0;
		this.interval_id;

		this.state_game = BUILDING;
		this.build_counter = 60;

		this.enemies = [];
		this.towers = [];
		this.players = [];

		this.paths = new Array(MAX_ACTIVE_PLAYERS);

		for(let i = 0; i < MAX_ACTIVE_PLAYERS; ++i){
			this.paths[i] = new Array(MAX_ACTIVE_PLAYERS);
		}

	}



	change_state(){
		if (this.state == BUILDING) {
			disable_menu();
			this.state = WAR;
		}
		else {
			enable_menu();
			this.build_counter = 60;
			this.state = BUILDING;
		}
	}

	// start_building(){
	// 	this.state = BUILDING;
	// 	this.build_counter = BUILD_SECONDS;
	// 	this.build_counter_id = window.setInterval(()=>{
	// 		document.getElementById('timer').value = this.build_counter;
	// 		this.build_counter--;
	// 		if (this.build_counter <= 0){
	// 			this.start_war();
	// 			window.clearInterval(this.build_counter_id);
	// 		}
	// 	}, 1000);
	// }

	set_map(width, height, map_src) {
		this.map = new Map(width, height, map_src, this.map_drawer);
	}

	render_map() {
		this.map.render();
	}

	set_personal_id(id) {
		this.personal_id = id;
	}

	// on_update() {
	// 	if (this.state == BUILDING){
	// 		draw_tower_place(this.objects_drawer);
	// 		for (let t of this.towers){
	// 			t.render();
	// 		}
	// 	}
	// 	if (this.state == WAR) {
			
	// 	}
	// }

	move_objects() {
		for(let i = this.enemies.length - 1; i >= 0; --i) {
			let enemy = this.enemies[i];
			let target_index = enemy.target.id;
			if (!enemy.is_alive()){
				on_player_add_money(this.players[target_index], enemy.price * 2, this.personal_id);
				this.enemies.splice(i, 1);
			}
			if (enemy.is_arrive()) {
				on_enemy_in_base(this.players[target_index], enemy, this.personal_id);
				if (this.players[target_index].is_dead()){
					on_base_destroyed(this.players[this.personal_id], this.interval_id);
				}
				this.enemies.splice(i, 1);
			}
			enemy.move();
		}

		for(let tower of this.towers) {
			for(let i = 0; i < this.enemies.length; i++) {
				let enemy = this.enemies[i];

				if (tower.player.id === enemy.player.id)
					continue;

				if (is_in_radius(tower, enemy, tower.radius)) {

					if (tower.targets_set[enemy.id] === undefined) {
						tower.targets_queue.push(enemy);
						tower.targets_set[enemy.id] = true;
					}

				}
				else{

					if(tower.targets_set[enemy.id] === true) {
						tower.targets_queue.shift();
						tower.targets_set[enemy.id] = false;
					}
				}
			}

			if (tower.targets_queue.length > 0) {
				let target = tower.targets_queue[0];
				tower.fire(target);
				tower.rotation_angle = get_rotation_angel(tower, target);
			}
			tower.move_bullets();
		}
	}

	draw_objects(){
		this.objects_drawer.clear();
		this.meta_drawer.clear();
		draw_tower_place(this.objects_drawer);
		for (let enemy of this.enemies){
			enemy.render_rotated(90);
		}

		for (let tower of this.towers){
			if (tower.clicked){
				tower.to_highlight(tower.x, tower.y, SPRITE_WIDTH, SPRITE_HEIGHT);
			}
			for (let bullet of tower.bullets){
				bullet.render();
			}
			tower.render();
		}
	}

	make_turn(){
		this.move_objects();
		this.draw_objects();
	}

	spawn_enemy(source_player, target_player) {
		let target_path = this.paths[source_player.id][target_player.id];
		let enemy = new Enemy(source_player.base_x + BLOCK_SIZE / 4, source_player.base_y + BLOCK_SIZE / 4 + BLOCK_SIZE / 8, source_player, target_player,objects_drawer);
		this.enemies_id = (this.enemies_id + 1) % MAX_ACTIVE_ENEMIES;
		enemy.set_id(this.enemies_id);
		enemy.resize(ENEMY_HITBOX, ENEMY_HITBOX);
		enemy.set_sprite(BASIC_ENEMY_SPRITE);
		enemy.set_path(target_path, target_path.length - 1);
		enemy.set_speed(BASIC_ENEMY_SPEED);
		enemy.set_hp(BASIC_ENEMY_HP);
		enemy.set_damage(BASIC_ENEMY_DAMAGE);
		enemy.set_price(BASIC_ENEMY_PRICE);
		on_player_spend_money(source_player, BASIC_ENEMY_PRICE, this.personal_id);
		this.enemies.push(enemy);
	}

	build_tower(x, y, player, type) {
		let tower = new Tower(x, y, player, this.objects_drawer, this.meta_drawer, type);
		tower.set_properties();
		on_player_spend_money(player, tower.price, this.personal_id);
		this.towers.push(tower);
	}

	add_player(base_x, base_y){
		let player = new Player(this.players_id++, base_x, base_y);
		player.set_hp(START_PLAYER_HP);
		player.set_money(START_PLAYER_MONEY);
		player.set_state(ALIVE);
		this.players.push(player);
		return player;
	}

	add_path(from_player, to_player, path){
		this.paths[from_player.id][to_player.id] = path;
	}

}