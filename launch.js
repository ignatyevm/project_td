function launch(){
	
	var img = new Image()
	img.src = map_url;
	var game = new Game(1, "game_field", img);
	game.render.render_map();
	game.make_turn();
}