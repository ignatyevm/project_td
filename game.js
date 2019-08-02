class Game{
	constructor(){
		this.number_of_players = 0;
		this.session = new GameSession(map_drawer, objects_drawer, meta_drawer);
	}

	create_session(map_drawer, objects_drawer, meta_drawer) {
 		this.session_type = type;
	}

	connect_to_session(session) {
		this.session = session;
		this.session_type = ONLINE;
	}
}
