const SPRITE_WIDTH = 20;
const SPRITE_HEIGHT = 20;
const BLOCK_OFFSET = 20; 
//debug var
class Position {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    translate_pos(x, y) {
        this.x += x;
        this.y += y;   
    }
}
 
class GameObject {
    constructor(pos, image_url){
        this.pos = pos;
        this.image = new Image();
        this.image.src = image_url;
    }

    move(x, y) {
    	this.pos.translate_pos(x, y);
    }    
 
    is_outmap() {
        if (this.pos.x >= canvas.width + SPRITE_WIDTH || this.pos.y >= canvas.height + SPRITE_HEIGHT
            || this.pos.x <= 0 - SPRITE_WIDTH || this.pos.y <= 0 - SPRITE_HEIGHT)
            return true;
        return false;
    }
}