var loadState = {

	preload : function(){

		var loadingLabel = game.add.text(80,150, 'loading...' , {font : '30px Courier' , fill : '#ffffff'});

		//TILEMAP
        game.load.tilemap('Town','assets/map/Town.json',null,Phaser.Tilemap.TILED_JSON);
        game.load.image('theset','assets/map/TILEgame.png');

		game.load.spritesheet('gabe','assets/rpg/chars/gabe.png',24,24);
		game.load.spritesheet('circulation','assets/feutricolore.png',32,32);
		
		game.load.image('hat','assets/rpg/chars/hat-guy/hat-guy.png',16,22);
		game.load.image('bridge','assets/rpg/props/bridge.png',58,56);
		
		game.load.image('bee','assets/rpg/mobs/bee.png',34,34);
		game.load.image('fondbizarre' , 'assets/rpg/atlas.png',512,512);

		game.load.image('lb','assets/carz/bleugauche.png',64,64);
		game.load.image('lgrey','assets/carz/grisgauche.png',64,64);
		game.load.image('ly','assets/carz/jaunegauche.png',64,64);
		game.load.image('lr','assets/carz/rougegauche.png',64,64);
		game.load.image('lgreen','assets/carz/vertgauche.png',64,64);

		game.load.image('bb','assets/carz/bleudos.png',64,64);
		game.load.image('bgrey','assets/carz/grisdos.png',64,64);
		game.load.image('by','assets/carz/jaunedos.png',64,64);
		game.load.image('br','assets/carz/rougedos.png',64,64);
		game.load.image('bgreen','assets/carz/vertdos.png',64,64);

        game.load.tilemap('coucou','assets/supertest.json',null,Phaser.Tilemap.TILED_JSON);
        game.load.image('tileset','assets/supermarket.png');
        game.load.image('barrel','assets/barel.png');
        game.load.image('banana','assets/Banana.png')
        game.load.image('bottle','assets/bottle.png');
        game.load.image('caddi1','assets/caddi1.png');
        game.load.image('caddi3','assets/caddi3.png')
        game.load.image('obs','assets/Obstacles.png');
        game.load.image('fullscreenbutton','assets/fullscreenbutton.png');
        game.load.spritesheet('guy','assets/guy.png',64,64);
        game.load.spritesheet('aveugle','assets/ondeblack.png',64,64);
        game.load.spritesheet('feutricolore','assets/feutricolore.png',32,32);
        game.load.audio('theme','assets/sounds/projet_jeux_video.mp3');
		
		game.load.image('playbutton' , 'assets/playbu.jpg',170,170);
		game.load.spritesheet('choice','assets/choice.png',192,64);
	},

	create : function(){
		game.state.start('menu');
	},


};