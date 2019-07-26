

class Enemy extends GameObject {

    constructor(x, y, drawer, hp) {
        super(x, y, drawer);
        this.hp = hp;
    }

    set_path(path, path_length) {
        this.path = path;
        this.path_length = path_length;
        this.path_index = 0;
    }

    move(){
        this.x += this.path[this.path_index][2];
        this.y += this.path[this.path_index][3];
    }

}