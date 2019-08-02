class Enemy extends GameObject {
    constructor(x, y, player, target, drawer) {
        super(x, y, drawer);
        this.speed = 1;
        this.current_point_index = 0;
        this.in_radius = false;
        this.sprite_type = 0;
        this.player = player;
        this.target = target;
        this.current_animation_frame = frames;
    }

    set_frame(frame){
        this.current_animation_frame = frame;
    }

    set_properties(id){
        this.set_sprite(BASIC_ENEMY[0]);
        this.damage = BASIC_ENEMY[2];
        this.speed = BASIC_ENEMY[3];
        this.price = BASIC_ENEMY[4];
        this.hp = BASIC_ENEMY[5];
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

    animate(){
        if (frames == this.current_animation_frame) {
            this.set_sprite(BASIC_ENEMY[1]);
        }
        else if (frames == this.current_animation_frame + BASIC_ANIMATION_SPEED) {
            this.set_sprite(BASIC_ENEMY[0]);
            this.current_animation_frame += BASIC_ANIMATION_SPEED * 2;
        }
    }

    move() {
        if (this.is_arrive()) {
            return;
        }

        this.animate()

        this.point = this.path[this.current_point_index];
        if (Math.floor(this.x  / BLOCK_SIZE) == this.point[0] && Math.floor(this.y / BLOCK_SIZE) == this.point[1]) {
            this.current_point_index++;
            this.point = this.path[this.current_point_index];
        }

        this.x += this.point[2] * this.speed;
        this.y += this.point[3] * this.speed;
    }

    set_sprite(sprite_link){
        this.sprite = new Image();
        this.sprite.src = sprite_link;
    }
}

class AntEnemy extends Enemy{
    constructor(x, y, player, target, drawer) {
        super(x, y, player, target, drawer);
    }

    animate(){
        if (frames == this.current_animation_frame) {
            this.set_sprite(ANT_ENEMY[1]);
        }
        else if (frames == this.current_animation_frame + BASIC_ANIMATION_SPEED) {
            this.set_sprite(ANT_ENEMY[0]);
            this.current_animation_frame += BASIC_ANIMATION_SPEED * 2;
        }
    }

    set_properties(id){
        this.set_sprite(ANT_ENEMY[0]);
        this.damage = ANT_ENEMY[2];
        this.speed = ANT_ENEMY[3];
        this.price = ANT_ENEMY[4];
        this.hp = ANT_ENEMY[5];
        this.id = id;
    }
}

class BigboyEnemy extends Enemy{
    constructor(x, y, player, target, drawer) {
        super(x, y, player, target, drawer);
    }

    animate(){
        if (frames == this.current_animation_frame) {
            this.set_sprite(BIGBOY_ENEMY[1]);
        }
        else if (frames == this.current_animation_frame + BASIC_ANIMATION_SPEED) {
            this.set_sprite(BIGBOY_ENEMY[0]);
            this.current_animation_frame += BASIC_ANIMATION_SPEED * 2;
        }
    }

    set_properties(id){
        this.set_sprite(BIGBOY_ENEMY[0]);
        this.damage = BIGBOY_ENEMY[2];
        this.speed = BIGBOY_ENEMY[3];
        this.price = BIGBOY_ENEMY[4];
        this.hp = BIGBOY_ENEMY[5];
        this.id = id;
    }
}
