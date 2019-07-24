class Position{

	constructor(x, y, block_x, block_y){
		this.x = x;
		this.y = y;
		this.block_x = block_x;
		this.block_y = block_y;
	}

}

class Engine{

	constructor(){

		this.enemies = [];
		this.tower = [];

	}

	main_loop(){

		while(true){

			for(enemy of enemies){
				enemy.draw();
			}

		}

	}

}