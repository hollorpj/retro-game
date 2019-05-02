class Screen {

	// Collection of tiles Tile[]
	tileBuffer;
	// Canvas Context
	canvasCtx;

	constructor(canvasCtx, tileBuffer, originX, originY) {
		
	}


	// Public Functions

	translate() {

	}

	// Private Functions

	draw() {
		for (let i = 0; i < this.tileBuffer.length; i++) {
			this.tileBuffer[i].draw();
		}
	}

	
}