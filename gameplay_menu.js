
var is_tower_chosen = false;


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

function set_id(element, id){
	element.id = id;
}



function create_menu(){

	let game_menu = create_element("div", document.body, "game_menu");

	let header = create_element("div", game_menu, "header");
	let timer = create_element("input", header, "timer");
	let round = create_element("output", header, "round");
	round.value = "  round: 1  ";
	let game_state = create_element("output", header, "game_state");
	game_state.value = "   BUILD  ";


	
	let hp_count = create_element("output", header, "player_info");
	hp_count.value = "20";
	let hp_img = create_element("IMG", header, "pic");
	hp_img.src = "menu/hp.png";
	hp_img.width = "20";
	hp_img.height = "20";
	

	
	let budget_count = create_element("output", header, "player_info"); 
	budget_count.value = "2000$";
	let budget_img = create_element("IMG", header, "pic");
	budget_img.src = "menu/money.png";
	budget_img.width = "25";
	budget_img.height = "25";

	
	let exit = create_element("button", header, "exit");
	timer.value = "00:59";
	add_text("EXIT", exit);

	let towers = create_element("div", game_menu, "objects_field");
	let towersContainer = create_element("div", towers, "container");
	let towerInfo = create_element("input", towers, "info");
	
	let tower_type1 = create_element("button", towersContainer, "button");
	let tower_type2 = create_element("button", towersContainer, "button");
	let tower_type3 = create_element("button", towersContainer, "button");
	//let tower_type3 = create_element("button", towersContainer, "button");

	add_text("1", tower_type1);
	add_text("2", tower_type2);
	add_text("3", tower_type3);


	tower_type1.addEventListener("click", function(){
		is_tower_chosen = true;
		towerInfo.value = "tower 1";


	});

	tower_type2.addEventListener("click", function(){
		is_tower_chosen = true;
		towerInfo.value = "tower 2";
	});

	tower_type3.addEventListener("click", function(){
		is_tower_chosen = true;
		towerInfo.value = "tower 3";
	});

	let upgrade_tower = create_element("button", towers, "action_button");
	add_text("UPGRADE", upgrade_tower);

	let enemies = create_element("div", game_menu, "objects_field");
	let enemiesContainer = create_element("div", enemies, "container");
	let enemyInfo = create_element("input", enemies, "info");
	
	let enemy_type1 = create_element("button", enemiesContainer, "button");
	let enemy_type2 = create_element("button", enemiesContainer, "button");
	let enemy_type3 = create_element("button", enemiesContainer, "button");
	
	add_text("1", enemy_type1);
	add_text("2", enemy_type2);
	add_text("3", enemy_type3);

	let attack = create_element("button", game_menu, "action_button");	
	add_text("ATTACK", attack);
	enemies.style.marginTop = 25;

	attack.addEventListener('click', ()=>{
		objects.push(new WeakEnemy());

	});

}
	


