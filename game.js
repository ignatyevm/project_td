//debug var
var map_url = "maps/test_map/map_4.png"

//game state
const FINISHED = 2;
const IN_GAME = 1;
const IN_LOBBY = 0;

class Game{
	constructor(player_number, canvas){
		this.game_state = IN_LOBBY;
		this.session = new Session(player_number);
		this.render = new Render(canvas);
	}

	load_session(){
		this.render.render_map();
	}

	alert(){
		alert("You Died");
	}

	make_turn(){
		if (this.game_state != FINISHED){
			this.game_state = this.session.make_turn();
			this.render.render_map();
			this.render.render_objects(this.session.objects);
			if (this.game_state == FINISHED)
				this.alert();
		}
	}
}

// class Lobby{
// 	constructor(max_players){
// 		this.game_state = in_lobby;
// 		this.number_of_players = 1;
// 		this.max_players = max_players;
// 	}
// 	add_player(){
// 		if (max_players > number_of_players)
// 			++number_of_players;
// 		else
// 			alert("Lobby full");
// 	}
// 	del_player(){
// 		if (number_of_players > 1)
// 			--number_of_players;
// 		else
// 			alert("You last");
// 	}
// 	add_bot(){
// 	}
// 	del_lobby(){
// 	}
// 	start_lobby(){
// 		this.game_state = started;
//		return(this.game_state);
// 	}
// }

