class Tile {
	
	images;
	gridX;
	gridY;
	animationFrame;

	constructor(images, gridX, gridY) {
		this.images = images;
		this.animationFrame = 0;
		this.gridX = gridX;
		this.gridY = gridY;

		this.scaleImages();
	}

	scaleImages() {
		for (var i = 0; i < this.images.length; i++) {
			let scaleWidthFactor = DisplayConfiguration.tileWidth / this.images[i].width;
			let scaleHeightFactor = DisplayConfiguration.tileHeight / this.images[i].height;

			this.images[i].width = this.images[i].width * scaleWidthFactor;
			this.images[i].height = this.images[i].height * scaleHeightFactor;

		}
	}

	draw() {
		var scaledHeight = this.images[this.animationFrame].height;
		var scaledWidth = this.images[this.animationFrame].width;
		Main.ctx.drawImage(this.images[this.animationFrame], this.gridX * DisplayConfiguration.tileWidth, this.gridY * DisplayConfiguration.tileHeight, scaledHeight, scaledWidth);
	}



}