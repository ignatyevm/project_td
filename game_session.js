

class GameSession{

	constructor(map_drawer, objects_drawer, meta_drawer){

		this.map_drawer = map_drawer;
		this.objects_drawer = objects_drawer;
		this.meta_drawer = meta_drawer;

		this.enemies = [];
		this.towers = [];
		this.bullets = [];

	}

	set_map(width, height, map_src){
		this.map = new Map(width, height, map_src, this.map_drawer);
	}

	render_map(){
		this.map.render();
	}

	render_scene(){
		setInterval(this.on_update.bind(this), 20);
	}

	on_update(){

		this.objects_drawer.clear();

		for(let i = 0; i < this.enemies.length; i++){
			

			this.enemies[i].render();
			this.enemies[i].update_motion();

			if(this.enemies[i].is_arrive){
				this.enemies[i].destroy();
				this.enemies.splice(i, 1);
			}

		}

		for(let tower of this.towers){
			for(let enemy of this.enemies){
				if(is_in_radius(tower, enemy, tower.radius)){
					let bullet = new Bullet(tower, enemy, this.objects_drawer);
					bullet.set_sprite("sprites/towerDefense_tile295.png");
					this.bullets.push(bullet);
				}
			}
			tower.render();
		}

		for(let bullet of this.bullets){
			bullet.render();
			bullet.update_motion();
		}

	}

	/*add_path(source_x, source_y, target_x, target_y, path){

		let pm = new PathManager([target_x, target_y]);
		pm.set(path);

		this.paths.push(pm);

	}*/

	spawn_enemy(x, y, target_path, target_path_len){

		let enemy = new Enemy(x, y, objects_drawer);

		enemy.set_sprite("sprites/towerDefense_tile270.png");
		enemy.set_path(target_path, target_path_len);

		this.enemies.push(enemy);
	}

	build_tower(x, y){
		let tower = new Tower(x, y, 72, this.objects_drawer, this.meta_drawer);
		tower.set_sprite("sprites/towerDefense_tile250.png");
		this.towers.push(tower);
	}

}
