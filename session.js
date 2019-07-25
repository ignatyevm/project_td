//game const
const MAX_PLAYER_MONEY = 99999;
const START_PLAYER_HP = 10;
const START_PLAYER_MONEY = 200;
//

//temp const
const TEST_ENEMY_HP = 500;
const TEST_ENEMY_SPEED = 10;
const TEST_ENEMY_PRICE = 10;
const TEST_ENEMY_X = 0;
const TEST_ENEMY_Y = 0;
const TEST_ENEMY_SKIN = 0;
const TEST_ENEMY_CUR_CELL = 0;
const TEST_ENEMY_PATH = 0;
//

class session{
	constructor(player_number){
		this.player = [];
		this.objects = [];
		this.round = 1;
		this.active_enemy = 0;
		for (let i = 0; i < player_number; ++i){
			this.player.push(new Player(START_PLAYER_HP, START_PLAYER_MONEY))
		}
	}

	add_enemy(){
		for (let i = 0; i < (this.player.length * this.round); ++i){
			this.objects.push(new Enemy(TEST_ENEMY_HP, TEST_ENEMY_SPEED, TEST_ENEMY_PRICE, TEST_ENEMY_X, TEST_ENEMY_Y, TEST_ENEMY_SKIN, TEST_ENEMY_PATH));
		}
	}

	gameover(){
		if (this.player.length == 0)
			return true;
		return false
	}

	remove_player(){
		for (let i = 0; i < this.player.length; ++i)
			if (this.player[i].is_dead)
				player.splice(i,1);
	}

	remove_enemy(){
		for (let i = 0; i < this.objects.length; ++i){
			for (let j = 0; j < this.player.length; ++j)
				if (this.objects[i].is_reach_base(this.player[j].base_pos)){
					this.player[j].get_damage();
				}
			else if (!this.objects[i].is_alive){
				this.objects.splice(i, 1); 
			}
		}
	}

	make_turn(){
		++round;
		if (this.enemy.length == 0){
			this.add_enemy();
		}
		for (let i = 0; i < objects.length; ++i){
			this.objects[i].move();
			this.objects[i].attack();
		}
		this.remove_enemy();
		this.remove_player();
		if (this.is_gameover())
			return FINISHED;
		return IN_GAME;
	}
}
// Обработка шага