<<<<<<< HEAD


function create_menu(){

	const CONTAINER_WIDTH = "400"; 
	const CONTAINER_HEIGHT = "200"; 
	const INFO_WIDTH = "150";
	const INFO_HEIGHT = "200";
	const MENU_WIDTH = "600";
	const MENU_HEIGHT = "700";
	const BUTTON_WIDTH = "150";
	const HEADER_HEIGHT = "50";

	const BACKGROUND_COLOR = "MediumSeaGreen";
	const ENEMIES_COLOR = "SeaGreen"; 
	const TOWERS_COLOR = "SeaGreen";


	let gameMenu = document.createElement("div");
	gameMenu.style.width = MENU_WIDTH;
	gameMenu.style.height = MENU_HEIGHT;
	gameMenu.style.backgroundColor = BACKGROUND_COLOR;
	gameMenu.style.float = "right";


	document.body.appendChild(gameMenu);
	

	let header = document.createElement("div");
	header.style.width = MENU_WIDTH;
	header.style.height = HEADER_HEIGHT;



	let exit = document.createElement("button");
	let exitText = document.createTextNode("EXIT");
	exit.appendChild(exitText);
	exit.style.float = "right";
	exit.style.margin = "15";
	exit.style.align = "center";

	header.appendChild(exit);


	gameMenu.appendChild(header);


	let towers = document.createElement("div");
	towers.style.width = MENU_WIDTH;
	let towersContainer = document.createElement("div");
	towersContainer.style.width = CONTAINER_WIDTH;
	towersContainer.style.height = CONTAINER_HEIGHT;
	towersContainer.style.backgroundColor = TOWERS_COLOR;
	towersContainer.style.float = "left";

	let towerInfo = document.createElement("input");
	towerInfo.style.width = INFO_WIDTH;
	towerInfo.style.height = INFO_HEIGHT;
	towerInfo.style.float = "right";

	towers.appendChild(towersContainer);
	towers.appendChild(towerInfo);

	gameMenu.appendChild(towers);


	let setTower = document.createElement("button");


	setTower.style.width = BUTTON_WIDTH;
	let setTowerText = document.createTextNode("SET TOWER");
	setTower.appendChild(setTowerText);
	
	towersContainer.appendChild(setTower);



	let enemies = document.createElement("div");
	enemies.style.width = MENU_WIDTH;
	let enemiesContainer = document.createElement("div");
	let enemyInfo = document.createElement("input");
	enemiesContainer.style.float = "left";
	enemiesContainer.style.backgroundColor = ENEMIES_COLOR;
	enemiesContainer.style.width = CONTAINER_WIDTH;
	enemiesContainer.style.height = CONTAINER_HEIGHT;

	enemyInfo.style.height = INFO_HEIGHT;
	enemyInfo.style.float = "right";
	enemyInfo.style.float = "up";
	enemyInfo.style.width = INFO_WIDTH;

	enemies.appendChild(enemiesContainer);
	enemies.appendChild(enemyInfo);


	gameMenu.appendChild(enemies);


	let attack = document.createElement("button");
	attack.style.width = BUTTON_WIDTH;
	let attckText = document.createTextNode("ATTACK");
	attack.appendChild(attckText);
	attack.style.margin = "30";
	gameMenu.appendChild(attack);

	//attack.addEventListener('click', ()=>{
	//	enemies.push(new WeakEnemy());

//	});
//
}
	



	//enemiesContainer


=======


function create_menu(){

	const CONTAINER_WIDTH = "400"; 
	const CONTAINER_HEIGHT = "200"; 
	const INFO_WIDTH = "150";
	const INFO_HEIGHT = "200";
	const MENU_WIDTH = "600";
	const MENU_HEIGHT = "700";
	const BUTTON_WIDTH = "150";
	const HEADER_HEIGHT = "50";

	const BACKGROUND_COLOR = "MediumSeaGreen";
	const ENEMIES_COLOR = "SeaGreen"; 
	const TOWERS_COLOR = "SeaGreen";


	let gameMenu = document.createElement("div");
	gameMenu.style.width = MENU_WIDTH;
	gameMenu.style.height = MENU_HEIGHT;
	gameMenu.style.backgroundColor = BACKGROUND_COLOR;
	gameMenu.style.float = "right";


	document.body.appendChild(gameMenu);
	

	let header = document.createElement("div");
	header.style.width = MENU_WIDTH;
	header.style.height = HEADER_HEIGHT;



	let exit = document.createElement("button");
	let exitText = document.createTextNode("EXIT");
	exit.appendChild(exitText);
	exit.style.float = "right";
	exit.style.margin = "15";
	exit.style.align = "center";

	header.appendChild(exit);


	gameMenu.appendChild(header);


	let towers = document.createElement("div");
	towers.style.width = MENU_WIDTH;
	let towersContainer = document.createElement("div");
	towersContainer.style.width = CONTAINER_WIDTH;
	towersContainer.style.height = CONTAINER_HEIGHT;
	towersContainer.style.backgroundColor = TOWERS_COLOR;
	towersContainer.style.float = "left";

	let towerInfo = document.createElement("input");
	towerInfo.style.width = INFO_WIDTH;
	towerInfo.style.height = INFO_HEIGHT;
	towerInfo.style.float = "right";

	towers.appendChild(towersContainer);
	towers.appendChild(towerInfo);

	gameMenu.appendChild(towers);


	let setTower = document.createElement("button");


	setTower.style.width = BUTTON_WIDTH;
	let setTowerText = document.createTextNode("SET TOWER");
	setTower.appendChild(setTowerText);
	setTower.style.margin = "30";
	gameMenu.appendChild(setTower);



	let enemies = document.createElement("div");
	enemies.style.width = MENU_WIDTH;
	let enemiesContainer = document.createElement("div");
	let enemyInfo = document.createElement("input");
	enemiesContainer.style.float = "left";
	enemiesContainer.style.backgroundColor = ENEMIES_COLOR;
	enemiesContainer.style.width = CONTAINER_WIDTH;
	enemiesContainer.style.height = CONTAINER_HEIGHT;

	enemyInfo.style.height = INFO_HEIGHT;
	enemyInfo.style.float = "right";
	enemyInfo.style.float = "up";
	enemyInfo.style.width = INFO_WIDTH;

	enemies.appendChild(enemiesContainer);
	enemies.appendChild(enemyInfo);


	gameMenu.appendChild(enemies);


	let attack = document.createElement("button");
	attack.style.width = BUTTON_WIDTH;
	let attckText = document.createTextNode("ATTACK");
	attack.appendChild(attckText);
	attack.style.margin = "30";
	gameMenu.appendChild(attack);

	attack.addEventListener('click', ()=>{
		objects.push(new WeakEnemy());

	});

}
	



	//enemiesContainer


>>>>>>> origin/master
