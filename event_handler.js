function change_selected_object(select1, select2){
	is_tower_chosen = select1;
	is_enemy_chosen = select2;
	for (t of game.session.towers){
		t.to_sell = false;
	}
}

document.getElementById("tb1").addEventListener("click", ()=>{
	if (document.getElementById("player_budget").value >= BASIC_TOWER[3][1]){
		change_selected_object(true, false);
		towerInfo.value = "tower 1";
	}

});

document.getElementById("tb2").addEventListener("click", ()=>{
	if (document.getElementById("player_budget").value >= MAGNIT_TOWER[3][1]){
		change_selected_object(true, false);
		towerInfo.value = "tower 2";
	}
});

document.getElementById("tb3").addEventListener("click", ()=>{
	if (document.getElementById("player_budget").value >= BASIC_TOWER[3][1]){
		change_selected_object(true, false);
		towerInfo.value = "tower 3";
	}
});

document.getElementById("eb1").addEventListener("click", ()=>{
	change_selected_object(false, true);
	enemyInfo.value = "enemy 1";
});

document.getElementById("eb2").addEventListener("click", ()=>{
	change_selected_object(false, true);
	enemyInfo.value = "enemy 2";
});

document.getElementById("eb3").addEventListener("click", ()=>{
	change_selected_object(false, true);
	enemyInfo.value = "enemy 3";
});

document.getElementById("sell").addEventListener("click", ()=>{
	for (let i = 0; i < game.session.towers.length; i++){
		let t = game.session.towers[i];
		if (t.to_sell){
			game.session.towers.splice(i, 1);
			delete_tower(t.x, t.y);
		}
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
	player.remove_money(money);
	if (player.id === personal_id){
		let money_bar = document.getElementById('player_budget');
		money_bar.innerText = player.money;
	}
}