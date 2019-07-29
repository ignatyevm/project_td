
class GameSession {

	constructor(map_drawer, objects_drawer, meta_drawer) {

		this.map_drawer = map_drawer;
		this.objects_drawer = objects_drawer;
		this.meta_drawer = meta_drawer;
		this.enemies_id = 0;
		this.interval_id;

		this.enemies = [];
		this.towers = [];

	}

	set_map(width, height, map_src) {
		this.map = new Map(width, height, map_src, this.map_drawer);
	}

	render_map() {
		this.map.render();
	}

	render_scene() {
		this.interval_id = setInterval(this.on_update.bind(this), 20);
	}

	on_update() {

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

		check_tower(game_field_ctx);
		for(let tower of this.towers) {
			for(let i = 0; i < this.enemies.length; i++) {
				let enemy = this.enemies[i];
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
				let angle = tower_rotate_angel(tower, tower.targets_queue[0])
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

	spawn_enemy(x, y, target_path, target_path_len) {

		let enemy = new Enemy(x + SPRITE_WIDTH / 4, y + SPRITE_HEIGHT / 4 + SPRITE_HEIGHT / 8, objects_drawer);
		enemy.resize(SPRITE_WIDTH / 2, SPRITE_HEIGHT / 2);
		enemy.set_sprite(BASIC_ENEMY_SPRITE);
		enemy.set_path(target_path, target_path_len);
		enemy.set_speed(BASIC_ENEMY_SPEED);
		enemy.set_hp(BASIC_ENEMY_HP);
		this.enemies_id = (++this.enemies_id) % MAX_ACTIVE_ENEMIES;
		enemy.id = this.enemies_id;

		this.enemies.push(enemy);
	}

	build_tower(x, y) {
		let tower = new Tower(x, y, BASIC_TOWER_RADIUS, this.objects_drawer, this.meta_drawer);
		tower.set_sprite(BASIC_TOWER_SPRITE_LVL_1);
		tower.set_fire_rate(BASIC_TOWER_FIRE_RATE);
		tower.set_damage(BASIC_TOWER_DAMAGE);
		this.towers.push(tower);
	}
}
