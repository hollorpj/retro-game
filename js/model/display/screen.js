class Screen {

	drawables = [];

	

	addDrawable(drawable) {
		this.drawables.push(drawable);
	}

	draw() {
		for (let i = 0; i < this.drawables.length; i++) {
			this.drawables[i].draw();
		}
	}
	
}