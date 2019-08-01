
class GameSession {

	constructor(map_drawer, objects_drawer, meta_drawer) {
		this.map_drawer = map_drawer;
		this.objects_drawer = objects_drawer;
		this.meta_drawer = meta_drawer;

		this.enemies_id = 0;
		this.players_id = 0;
		this.interval_id;

		this.game_state = BUILDING;
		this.build_counter = BUILD_SECONDS;

		this.enemies = [];
		this.towers = [];
		this.players = [];

		this.is_interval_launch = false;

		this.paths = new Array(MAX_ACTIVE_PLAYERS);

		for(let i = 0; i < MAX_ACTIVE_PLAYERS; ++i){
			this.paths[i] = new Array(MAX_ACTIVE_PLAYERS);
		}
	}

	is_gameover() {
		let count = 0;
		for (let player of this.players){
			if (!player.is_dead())
				++count;
		}
		if (count > 1)
			return false;
		return true;
	}

	change_state(state) {
		this.game_state = state;
		if (this.game_state == BUILDING)
			enable_buttons();
		else
			disable_buttons();
	}

	launch_timer(){
		this.interval_id = window.setInterval(()=>{
			--this.build_counter;
			timer.value = this.build_counter;
			//draw_tower_place(this.objects_drawer);
			if (this.build_counter == 0){
				this.change_state(WAR);
				this.is_interval_launch = false;
				window.clearInterval(this.interval_id);
				this.launch_session()
			}

		}, 1000);
	}

	launch_animation(){
		this.interval_id = setInterval(()=>{
			this.move_objects();
			this.draw_objects();
			++frames;

			if (this.enemies.length == 0){

				this.objects_drawer.clear();
				for (let tower of this.towers){
					tower.clear_bullets();
					tower.render();
				}
				
				this.is_interval_launch = false;
				this.change_state(BUILDING);			
				clearInterval(this.interval_id);
				this.launch_session();
			}
		}, 20);
	}

	start_building_phase(){
		this.build_counter = BUILD_SECONDS;
		if (!this.is_interval_launch){
			this.launch_timer();
			this.is_interval_launch = true;
			frames = 0;
		}
	}

	start_war_phase(){
		if (!this.is_interval_launch){ 
			this.launch_animation()
			this.is_interval_launch = true;
		}
	}

	set_map(width, height, map_src) {
		this.map = new GameMap(width, height, map_src, this.map_drawer);
	}

	render_map() {
		this.map.render();
	}

	set_personal_id(id) {
		this.personal_id = id;
	}

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

	spawn_enemy(source_player, target_player) {
		let target_path = this.paths[source_player.id][target_player.id];
		let enemy = new Enemy(source_player.base_x + BLOCK_SIZE / 4, source_player.base_y + BLOCK_SIZE / 4 + BLOCK_SIZE / 8, source_player, target_player,objects_drawer);
		this.enemies_id = (this.enemies_id + 1) % MAX_ACTIVE_ENEMIES;
		enemy.resize(ENEMY_HITBOX, ENEMY_HITBOX);
		enemy.set_path(target_path, target_path.length - 1);
		enemy.set_properties(this.enemies_id);
		on_player_spend_money(source_player, enemy.price, this.personal_id);
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

	launch_session(){
		if (this.game_state == BUILDING) {
			this.start_building_phase();
		}
		else {
			//todo SendPackage from Firebase
			//todo GetPackage from Firebase
			this.start_war_phase();
		}
		if (this.is_gameover()){
			clearInterval(this.session_intervar);
		}
	}


}
