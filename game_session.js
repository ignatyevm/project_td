
class GameSession {

	constructor(map_drawer, objects_drawer, meta_drawer) {

		this.state = "building";

		this.map_drawer = map_drawer;
		this.objects_drawer = objects_drawer;
		this.meta_drawer = meta_drawer;
		this.enemies_id = 0;
		this.interval_id;

		this.enemies = [];
		this.towers = [];

		this.players = [];

		this.players_id = 0;

		this.paths = new Array(2);

		for(let i = 0; i < 2; i++){
			this.paths[i] = new Array(2);
		}

	}

	set_map(width, height, map_src) {
		this.map_entities = new Array(height);
		for(let i = 0; i < this.height; ++i) {
			this.map_entities[i] = new Array(width);
		}
		this.map = new Map(width, height, map_src, this.map_drawer);
	}

	render_map() {
		this.map.render();
	}

	render_scene() {
		this.interval_id = setInterval(this.on_update.bind(this), 20);
	}

	on_update() {
		let sec = 30;
		switch(this.state){
			case "building":{
				document.getElementById("tb1").disable = false;
				document.getElementById("tb2").disable = false;
				document.getElementById("tb3").disable = false;
				document.getElementById("eb1").disable = true;
				document.getElementById("eb2").disable = true;
				document.getElementById("eb3").disable = true;

				//clearInterval(id_timer2);

				document.getElementById("timer").innerHTML = "00" + String(--sec);


				if (sec == 0){
					this.state = "war";
					document.getElementById("timer") = "00:30";
				}


				break;
			}
			case "war":{
				document.getElementById("tb1").disable = true;
				document.getElementById("tb2").disable = true;
				document.getElementById("tb3").disable = true;
				document.getElementById("eb1").disable = false;
				document.getElementById("eb2").disable = false;
				document.getElementById("eb3").disable = false;

				//id_timer2 = setInterval(function(){session.spawn_enemy(bot, player)}, 500);

				document.getElementById("timer") = "00:" + sec--;

				if (sec == 0){
					this.state = "building";
					document.getElementById("timer") = "00:30";
				}

				break;
			}
		}

		this.objects_drawer.clear();
		this.meta_drawer.clear();

		for(let i = 0; i < this.enemies.length; ++i) {
			let enemy = this.enemies[i];
			enemy.render_rotated(90);
			enemy.update_motion();

			if(enemy.is_arrive) {
				enemy.destroy();
				this.enemies.splice(i, 1);
				
				}
		}

		check_tower(this.objects_drawer, this.map);
		for(let tower of this.towers) {
			/*if (tower.to_sell){
				game_field_ctx.rect(tower.x, tower.y, SPRITE_WIDTH, SPRITE_HEIGHT);
				game_field_ctx.stroke();
			}*/
			for(let i = 0; i < this.enemies.length; i++) {

				let enemy = this.enemies[i];

				//console.log(tower.player.id + " " + enemy.player.id);

				//if(tower.player.id == enemy.player.id) continue;

				if(is_in_radius(tower, enemy, tower.radius)) {
					if(tower.targets_set[enemy.id] === undefined) {
						tower.targets_queue.push(enemy);
						tower.targets_set[enemy.id] = true;
					}
				}else{
					if(tower.targets_set[enemy.id] === true) {
						tower.targets_set[enemy.id] = false;
					 	tower.targets_queue.shift();
					 	--i;
					}
				}
			}
			if (tower.targets_queue.length > 0) {

				let target = tower.targets_queue[0];
				tower.fire(target);
				let angle = get_rotation_angel(tower, tower.targets_queue[0]);
			 	tower.render_rotated(angle);


			}else {
				tower.render();
			}
			tower.update_bullets();
		}

		for(let i = 0; i < this.enemies.length; i) {
			let enemy = this.enemies[i];
			enemy.render_rotated(90);
			enemy.update_motion();

			if (enemy.is_arrive || !enemy.is_alive()) {
				this.enemies.splice(i, 1);
				continue;
			}
			++i;
		}

	}

	spawn_enemy(source_player, target_player) {

		let target_path = this.paths[source_player.id][target_player.id];

		let enemy = new Enemy(source_player.base_x + BLOCK_SIZE / 4, source_player.base_y + BLOCK_SIZE / 4 + BLOCK_SIZE / 8, source_player, objects_drawer);

		enemy.resize(ENEMY_HITBOX, ENEMY_HITBOX);
		enemy.set_sprite(BASIC_ENEMY_SPRITE);

		enemy.set_path(target_path, target_path.length);

		enemy.set_speed(BASIC_ENEMY_SPEED);
		enemy.set_hp(BASIC_ENEMY_HP);

		this.enemies_id = (++this.enemies_id) % MAX_ACTIVE_ENEMIES;

		enemy.id = this.enemies_id;

		this.enemies.push(enemy);

	}

	build_tower(x, y, player) {
		let tower = new Tower(x, y, BASIC_TOWER_RADIUS, player, this.objects_drawer, this.meta_drawer);
		tower.set_sprite(BASIC_TOWER_SPRITE_LVL_1);
		tower.set_fire_rate(BASIC_TOWER_FIRE_RATE);
		tower.set_damage(BASIC_TOWER_DAMAGE);
		this.towers.push(tower);
	}

	add_player(base_x, base_y){
		let player = new Player(this.players_id++, base_x, base_y, 5);
		this.players.push(player);
		return player;
	}

	add_path(from_player, to_player, path){
		this.paths[from_player.id][to_player.id] = path;
	}

}
