class Enemy extends GameObject {
    constructor(x, y, player, target, drawer) {
        super(x, y, drawer);
        this.speed = 1;
        this.current_point_index = 0;
        this.in_radius = false;
        this.sprite_type = 0;
        this.player = player;
        this.target = target;
    }

    set_properties(id){
        this.set_sprite(BASIC_ENEMY[0]);
        this.damage = BASIC_ENEMY[1];
        this.speed = BASIC_ENEMY[2];
        this.price = BASIC_ENEMY[3];
        this.hp = BASIC_ENEMY[4];
        this.id = id;
    }

    set_path(path, path_len) {
        this.path = path;
        this.path_len = path_len;
    }

    take_damage(damage) {
        this.hp -= damage;
    }

    is_alive() {
        return this.hp > 0;
    }

    is_arrive() {
        return this.current_point_index == this.path_len
    }

    move() {
        if (this.is_arrive()) {
            return;
        }

        let point = this.path[this.current_point_index];
        if(Math.floor((this.x - BLOCK_SIZE / 4 + BLOCK_SIZE / 8)  / BLOCK_SIZE) == point[0] && Math.floor((this.y - BLOCK_SIZE / 4 - BLOCK_SIZE / 8) / BLOCK_SIZE)  == point[1]) {
            this.current_point_index++;
            point = this.path[this.current_point_index];
        }

        this.x += point[2] * this.speed;
        this.y += point[3] * this.speed;
    }
}