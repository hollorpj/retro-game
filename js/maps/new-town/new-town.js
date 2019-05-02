class NewTown {
	
	tileMapping;

	initializedPromise;

	constructor() {
		this.tileMapping = [];
		let pinkBrick = TileCache.getBottomLeftPinkBrick();
		
		var that = this;
		this.initializedPromise = new Promise(function(resolve, object) {
			
			that.waitForImagesLoad([pinkBrick]).then(function() {
				let t0 = new Tile([ pinkBrick ], 0, 0);
				let t1 = new Tile([ pinkBrick ], 1, 0);
				let t2 = new Tile([ pinkBrick ], 2, 0);

				that.tileMapping = [ t0, t1, t2 ];	
				resolve();
			});


		})
		
		
	}

	getImageLoadPromise() {
		return this.initializedPromise;
	}

	draw() {
		for (let i = 0; i < this.tileMapping.length; i++) {
			this.tileMapping[i].draw();
		}
	}

	// private
	waitForImagesLoad(images) {
		return new Promise(function(resolve, object) {
			let numLoaded = 0;

  			for (let i = 0; i < images.length; i++) {
				if (images[i].complete) {
					numLoaded++;
					if (numLoaded === images.length) {
						resolve();
					}

					continue;
				} 


				images[i].addEventListener('load', function() {
					numLoaded++;
					if (numLoaded === images.length) {
						resolve();
					}
				});
			}
		});

	}

	
}