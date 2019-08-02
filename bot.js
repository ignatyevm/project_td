function bot_build_towers(bot){
	game.session.build_tower(20 * BLOCK_SIZE, 21 * BLOCK_SIZE, bot, 1);
	game.session.build_tower(17 * BLOCK_SIZE, 21 * BLOCK_SIZE, bot, 1);
	game.session.build_tower(18 * BLOCK_SIZE, 21 * BLOCK_SIZE, bot, 3);
}

function bot_spawn_enemy(bot, player){
	while (bot.money >= BASIC_ENEMY[4]){
		if (bot.money >= BIGBOY_ENEMY[4])
			game.session.spawn_enemy(bot, player, 3);
		else if (bot.money >= ANT_ENEMY[4])
			game.session.spawn_enemy(bot, player, 2);
		else if (bot.money >= BASIC_ENEMY[4])
			game.session.spawn_enemy(bot, player, 1);
	}
}

function bot_action(bot, player){
	bot_build_towers(bot);
	bot_spawn_enemy(bot, player);
}