const FIELD_SIZE = 16;
const SPRITE_WIDTH = 20;
const SPRITE_HEIGHT = 20;
 
class ObjectPosition{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}
 
class GameObject{
    constructor(pos, image){
        this.pos = pos;
        this.image = image;
    }
 
    translate_pos(x, y) {
        this.pos.x += x;
        this.pos.y += y;   
    }
 
    is_outmap(){
        if (this.pos.x >= canvas.width + SPRITE_WIDTH || this.pos.y >= canvas.height + SPRITE_HEIGHT
            || this.pos.x <= 0 - SPRITE_WIDTH || this.pos.y <= 0 - SPRITE_HEIGHT)
            return true;
        return false;
    }
}