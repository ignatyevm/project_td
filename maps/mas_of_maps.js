const WIDTH = 36;
const HEIGHT = 36
const FIRST = 1;
const SECOND = 2;
const LEFT = 1;
const RIGHT = 2;
const UP = 3;
const DOWN = 4;


class CreateMap {
	constructor(number) {
		if (number == FIRST) {
			this.mas = ["..........x#########################",
		                "0000000000z#########################",
		                "ccccccccv0z#####b.............x#####",
		                "########n0z#####n0000000000000z#####",
		                "########n0z#####n0mcccccccccv0z#####",
		                "########n0z#####n0z#########n0z#####",
		                "########n0z#####n0z#########n0z#####",
		                "########n0z#####n0z#########n0z#####",
					    "########n0z#####n0z#########n0z#####",
					    "########n0z#####n0z#########n0z#####",
					    "########n0z#####n0z#########n0z#####",
					    "########n0z#####n0z#########n0z#####",
					    "########n0z#####n0z#########n0z#####",
					    "########n0z#####n0z#########n0z#####",
					    "########n0z#####n0z#########n0z#####",
					    "###b....a0z#####n0z#########n0z#####",
					    "###n000000z#####n0z#########n0z#####",
					    "###n0mccccs#####n0z#########n0z#####",
					    "###n0z##########n0z#########n0z#####",
					    "###n0d..........a0z#########n0z#####",
					    "###n00000000000000z#########n0z#####",
					    "###fccccccccccccccs#########n0z#####",
					    "############################n0z#####",
					    "############################n0z#####",
					    "############################n0z#####",
					    "############################n0z#####",
					    "############################n0z#####",
					    "############################n0z#####",
					    "############################n0z#####",
					    "############################n0d.....",
					    "############################n0000000",
					    "############################fccccccc",
					    "####################################",
					    "####################################",
					    "####################################",
					    "####################################"]; 
			return this.mas;
		}
	}
}

class RoadOnMap {
	constructor(number, map) {
		this.amount = 0;
		this.map = map;
		this.direction = new Array(HEIGHT * WIDTH + 1);
		this.road = new Array(HEIGHT * WIDTH + 1);
		if (number == FIRST) {
			for (let i = 0; i < HEIGHT; ++i) {
				for (let j = 0; j < WIDTH; ++j) {
					if (map[i][j] == "0") {
						if (this.amount != 0) {
							if (this.road[this.amount - 1].x < this.road[this.amount].x) {
								this.direction[this.amount - 1] = RIGHT;
							}

							if (this.road[this.amount - 1].x > this.road[this.amount].x) {
								this.direction[this.amount - 1] = LEFT;
							}

							if (this.road[this.amount - 1].y < this.road[this.amount].y) {
								this.direction[this.amount - 1] = UP;
							}

							if (this.road[this.amount - 1].y > this.road[this.amount].y) {
								this.direction[this.amount - 1] = DOWN;
							}
						}
						
						this.road[this.amount++] = new Position(i * 20, j * 20);
					}
				}
			}
		}
	}
}