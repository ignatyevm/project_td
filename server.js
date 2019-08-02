
function create_game(){

	let games = firebase.database().ref('games');
	let new_game = games.push();
	new_game.set({
		"players_count": 0,
		"players": {
			"__init__": "false",
		}
	});

	return new_game.key;

}

function listen_connections(game_key, callback){

	let first = 0;

	let game = firebase.database().ref('games').child(game_key).child('last');

	game.on("value", function(data){

		if(first == 0){
			first = 1;
			return;
		}
			
		let connected_player = data.val();
		callback(connected_player);

	});

}

function connect_to_game(game_key, player_name){

	let game = firebase.database().ref('games').child(game_key);

	game.once('value').then(function(data) {

		let players = data.val().players;
		let players_count = data.val().players_count;

		players[player_name] = "true";

		game.child('players').set(players);
		game.child('players_count').set(players_count + 1);
		game.child('last').set(player_name);

	});

}

function on_start(){

}