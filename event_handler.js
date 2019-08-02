let radius;
let price;
let type;
var enemy_type = 1;
var tower_type = 1;

function change_selected_object(select1, select2){
	is_tower_chosen = select1;
	is_enemy_chosen = select2;
	for (t of game.session.towers){
		t.clicked = false;
	}
}

document.getElementById("tb1").addEventListener("click", ()=>{
	if (document.getElementById("player_budget").value >= BASIC_TOWER[3][0]){
		change_selected_object(true, false);
		radius = BASIC_TOWER[4][1];
		price = BASIC_TOWER[3][1];
		type = BASIC_TOWER;
		towerInfo.value = "tower 1";
	}
	tower_type = 1;
});

document.getElementById("tb2").addEventListener("click", ()=>{
	if (document.getElementById("player_budget").value >= MAGNIT_TOWER[3][0]){
		change_selected_object(true, false);
		radius = MAGNIT_TOWER[4][1];
		price = MAGNIT_TOWER[3][1];
		type = MAGNIT_TOWER;
		towerInfo.value = "tower 2";
	}
	tower_type = 2;
});

document.getElementById("tb3").addEventListener("click", ()=>{
	if (document.getElementById("player_budget").value >= BASIC_TOWER[3][0]){
		change_selected_object(true, false);
		radius = BASIC_TOWER[4][1];
		price = BASIC_TOWER[3][1];
		type = BASIC_TOWER;
		towerInfo.value = "tower 3";
	}
	tower_type = 3;
});

document.getElementById("eb1").addEventListener("click", ()=>{
	change_selected_object(false, true);
	enemyInfo.value = "enemy 1";
	enemy_type = 1;
});

document.getElementById("eb2").addEventListener("click", ()=>{
	change_selected_object(false, true);
	enemyInfo.value = "enemy 2";
	enemy_type = 2;
});

document.getElementById("eb3").addEventListener("click", ()=>{
	change_selected_object(false, true);
	enemyInfo.value = "enemy 3";
	enemy_type = 3;
});

document.getElementById("sell").addEventListener("click", ()=>{
	for (let i = 0; i < game.session.towers.length; i++){
		let t = game.session.towers[i];
		if (t.clicked && t.player == game.session.players[game.session.personal_id]){
			game.session.towers.splice(i, 1);
			delete_tower(t.x, t.y);
			on_player_add_money(game.session.players[game.session.personal_id], t.price, game.session.personal_id);
			t.clicked = false;
		}
	}
});

document.getElementById("tower_upgrade").addEventListener("click", ()=>{
	alert("GGGGG");
	for (let i = 0; i < game.session.towers.length; i++){
		let t = game.session.towers[i];
		if (t.clicked && t.lvl < 3 && document.getElementById("player_budget").value >= t.type[3][t.lvl + 1]
			&& t.player == game.session.players[game.session.personal_id]){
			alert("up");
			t.lvl++;
			t.set_properties();
			on_player_spend_money(game.session.players[game.session.personal_id], t.price, game.session.personal_id);
			
		}
		t.clicked = false;
	}
});


function on_enemy_in_base(player, enemy, personal_id){
	player.take_damage(enemy.damage);
	if (player.id == personal_id){
		let health_bar = document.getElementById('player_hp');
		health_bar.innerText = player.base_hp;
	}
}

function on_base_destroyed(player, interval_id){
	player.set_state(DEAD); 
	clearInterval(id_interval);
	alert("YOU DIED");
}

function on_player_add_money(player, money, personal_id){
	player.add_money(money);
	if (personal_id == player.id){
		let money_bar = document.getElementById('player_budget');
		money_bar.innerText = player.money;
	}
}

function on_player_spend_money(player, money, personal_id){
	if (player.money < money)
		return false;
	player.remove_money(money);
	if (player.id === personal_id){
		let money_bar = document.getElementById('player_budget');
		money_bar.innerText = player.money;
	}
	return true;
}