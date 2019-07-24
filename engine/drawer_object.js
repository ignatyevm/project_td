class Drawer{
	constuctor(game_field){
		this.element = document.getElementById(game_field);
	}
	move(pos, image){
		let e = document.createElementNS("http://www.w3.org/2000/svg", "image");
	    e.setAttributeNS("http://www.w3.org/1999/xlink", "href", image.src);
	    e.setAttributeNS(null,"x", pos.x);
	    e.setAttributeNS(null,"y", pos.y);
	    e.setAttributeNS(null,"width", width);
	    e.setAttributeNS(null,"height", height);
	  	this.element.appendChild(e);
	}
	clear(){
		this.element.innerHTML = "";
	}


}