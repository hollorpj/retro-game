class GameManager {

	
	screen;

	currentMap;

	constructor() {
		this.screen = new Screen();
	}

	loadMap(map) {
		this.currentMap = map;
	}

	play() {
		this.screen.addDrawable(this.currentMap);
		this.screen.draw();
	}
	
}