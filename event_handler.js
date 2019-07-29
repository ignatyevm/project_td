function change_selected_object(select1, select2){
	is_tower_chosen = select1;
	is_enemy_chosen = select2;
}

document.getElementById("tb1").addEventListener("click", ()=>{
	change_selected_object(true, false);
	towerInfo.value = "tower 1";
});

document.getElementById("tb2").addEventListener("click", ()=>{
	change_selected_object(true, false);
	towerInfo.value = "tower 2";
});

document.getElementById("tb3").addEventListener("click", ()=>{
	change_selected_object(true, false);
	towerInfo.value = "tower 3";
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
