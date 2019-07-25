const MAX_PLAYER_MONEY = 99999;
const START_PLAYER_HP = 10;
const START_PLAYER_MONEY = 200;

const TEST_ENEMY_HP = 500;
const TEST_ENEMY_PRICE = 10;


class Session {
	constructor(player_number) {
		this.player = [];
		this.objects = [];
		this.round = 1;
		this.active_enemy = 0;
		for (let i = 0; i < player_number; ++i) {
			this.player.push(new Player(START_PLAYER_HP, START_PLAYER_MONEY, new RoadOnMap(1, new CreateMap(1))));
		}
	}

	add_enemy() {
		for (let i = 0; i < (this.player.length * this.round); ++i) {
			this.objects.push(new Enemy(TEST_ENEMY_HP, TEST_ENEMY_PRICE, "sprites/enemies/enemy_first_plane.png", new RoadOnMap(1, new CreateMap(1))));
		}
	}

	gameover() {
		if (this.player.length == 0)
			return true;
		return false
	}

	remove_player() {
		for (let i = 0; i < this.player.length; ++i)
			if (this.player[i].is_dead)
				player.splice(i,1);
	}

	remove_enemy() {
		for (let i = 0; i < this.objects.length; ++i) {
			for (let j = 0; j < this.player.length; ++j)
				if (this.objects[i].is_reach_base(this.player[j].road_on_map.amount - 1)) {
					this.player[j].get_damage();
				}
			else if (!this.objects[i].is_alive) {
				this.objects.splice(i, 1); 
			}
		}
	}

	make_turn() {
		++round;
		if (this.active_enemy.length == 0){
			this.add_enemy();
		}

		for (let i = 0; i < objects.length; ++i){
			this.objects[i].move(this.objects[i].road_on_map);
			this.objects[i].attack();
		}

		this.remove_enemy();
		this.remove_player();
		if (this.is_gameover())
			return FINISHED;
		return IN_GAME;
	}
}