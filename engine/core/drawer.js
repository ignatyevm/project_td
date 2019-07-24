class DrawerSVG{
	constructor(){
		this.svgNS = "http://www.w3.org/2000/svg";
		this.xlinkNS = "http://www.w3.org/1999/xlink";
		this.element = null;
	}
	create(width, height, parent){
		this.element = document.createElementNS(this.svgNS, "svg");
		this.element.setAttributeNS(null, "width", width);
		this.element.setAttributeNS(null, "height", height);
		parent.appendChild(this.element);
	}
	clear(){
		this.element.innerHTML = "";
	}
	drawImage(image, x, y, width, height){
		let e = document.createElementNS(this.svgNS,"image");
	    e.setAttributeNS(this.xlinkNS,"href", image.src);
	    e.setAttributeNS(null,"x", x);
	    e.setAttributeNS(null,"y", y);
	    e.setAttributeNS(null,"width", width);
	    e.setAttributeNS(null,"height", height);
	  	this.element.appendChild(e);
	}
}

class DrawerCanvas{
	constructor(){
		this.element = null;
		this.ctx = null;
	}
	create(width, height, parent){
		this.element = document.createElement("canvas");
		this.element.setAttribute("width", width);
		this.element.setAttribute("height", height);
		parent.appendChild(this.element);
		this.ctx = this.element.getContext("2d");
	}
	
	clear(){
		this.ctx.clearRect(0, 0, this.element.width, this.element.height);
	}
	drawImage(image, x, y, width, height){
		this.ctx.drawImage(image, x, y, width, height);
	}
}