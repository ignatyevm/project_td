
function create_element(element, parent, class_name){
	let new_element = document.createElement(element);
	parent.appendChild(new_element);
	new_element.className = class_name;
	return new_element;
}

function add_text(text, parent){
	let new_text = document.createTextNode(text);
	parent.appendChild(new_text);
}

function create_menu(){

	let game_menu = create_element("div", document.body, "game_menu");

	let header = create_element("div", game_menu, "header");
	let exit = create_element("button", header, "exit");
	add_text("EXIT", exit);

	let towers = create_element("div", game_menu, "objects_field");
	let towersContainer = create_element("div", towers, "container");
	let towerInfo = create_element("input", towers, "info");
	let tower_type1 = create_element("button", towersContainer, "button");

	add_text("TOWER", tower_type1);
	tower_type1.style.margin = "30";

	tower_type1.addEventListener("click", function(){
		is_tower_chosen = true;
		//tower = new GameObject("C:/Users/kvidi/Documents/HOMEWORK/summer practice 1/tower defense/project_td-master/project_td/sprites/towerDefense_tile291.png");
	});

	let enemies = create_element("div", game_menu, "objects_field");
	enemies.style.marginTop = 250;
	let enemiesContainer = create_element("div", enemies, "container");
	let enemyInfo = create_element("input", enemies, "info");
	let attack = create_element("button", game_menu, "button");	add_text("ATTACK", attack);
	attack.style.margin = "30";

	attack.addEventListener('click', ()=>{
		objects.push(new WeakEnemy());

	});

}
	


