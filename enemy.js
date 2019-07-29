class Enemy extends GameObject {
    constructor(x, y, drawer) {
        super(x, y, drawer);
        this.speed = 1;
        this.current_point_index = 0;
        this.is_arrive = false;
        this.in_radius = false;
    }

    set_speed(speed) {
        this.speed = speed;
    }

    set_hp(hp) {
        this.hp = hp;
    }

    set_path(path, path_len) {
        this.path = path;
        this.path_len = path_len;
    }

    update_motion() {
        
        if (this.current_point_index == this.path_len) {
            this.is_arrive = true;
            return;
        }

        let point = this.path[this.current_point_index];


        if(Math.floor(this.x / BLOCK_SIZE)  == point[0] && Math.floor(this.y / BLOCK_SIZE)  == point[1]) {
            this.current_point_index++;
        }
            
        point = this.path[this.current_point_index];

        this.x += point[2] * this.speed;
        this.y += point[3] * this.speed;
    }

    destroy() {

    }
}
