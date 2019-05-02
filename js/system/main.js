class Main {
	static canvasEl;
	static ctx;
}

document.addEventListener('DOMContentLoaded', function() {
	Main.canvasEl = document.getElementById('main-canvas');
	Main.ctx = Main.canvasEl.getContext('2d');


	// Game Elements
	// var tileBuffer = [];
	
	// main

	let gameManager = new GameManager();
	var map = new NewTown();
	map.getImageLoadPromise().then(function() {
		gameManager.loadMap(map);
		gameManager.play();	
	});
	



	// var grassImg = TileCache.getBottomLeftPinkBrick();
	// var treeImg = TileCache.getBottomLeftPinkBrick();


	// treeImg.addEventListener('load', function() {
 //          var sample = new Tile([ grassImg ], ctx, 0, 0)
	//       var another = new Tile([ treeImg ], ctx, 1, 0);
	//       var again = new Tile([ grassImg ], ctx, 1, 1);
	//       var again2 = new Tile([ grassImg ], ctx, 0, 1);
	//       var again3 = new Tile([ grassImg ], ctx, 0, 2);
	//       var again4 = new Tile([ grassImg ], ctx, 1, 2);
	//       tileBuffer.push(sample);
	//       tileBuffer.push(another);
	//       tileBuffer.push(again);
	//       tileBuffer.push(again2);
	//       tileBuffer.push(again3);
	//       tileBuffer.push(again4);

	//       for (let i = 0; i < tileBuffer.length; i++) {
	//       	tileBuffer[i].draw();
	//       }
		
	// });



});

