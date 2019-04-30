var loadState = {

	preload : function(){

		var loadingLabel = game.add.text(80,150, 'loading...' , {font : '30px Courier' , fill : '#ffffff'});

		game.load.spritesheet('gabe','assets/rpg/chars/gabe.png',24,24);
		game.load.spritesheet('circulation','assets/feutricolore.png',32,32);
		game.load.image('hat','assets/rpg/chars/hat-guy/hat-guy.png',16,22);
		game.load.image('bridge','assets/rpg/props/bridge.png',58,56);
		game.load.image('bee','assets/rpg/mobs/bee.png',34,34);
	},

	create : function(){
		console.log('load');

		game.state.start('menu');
	},


};