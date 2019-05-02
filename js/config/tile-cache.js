class TileCache {

	static bottomLeftPinkBrick;

	static tileLocationMapping = {
		'buildings' : {
			'brick' : {
				'pink' : {
					'bottom-left' : '../assets/tiles/buildings/brick/pink/bottom-left.png',
					'bottom-middle' : '/assets/tiles/buildings/brick/pink/bottom-middle.png',
					'bottom-right'  : '/assets/tiles/buildings/brick/pink/bottom-right.png',
					'mid-left'  : '/assets/tiles/buildings/brick/pink/mid-left.png',
					'mid' : '/assets/tiles/buildings/brick/pink/mid.png',
					'mid-right'  : '/assets/tiles/buildings/brick/pink/mid-right.png',
				}
			}
		}
	};

	static getBottomLeftPinkBrick() {
		if (this.bottomLeftPinkBrick === undefined) {
			this.bottomLeftPinkBrick = new Image;
			this.bottomLeftPinkBrick.src = this.tileLocationMapping['buildings']['brick']['pink']['bottom-left'];
		}

		return this.bottomLeftPinkBrick;
	}
}