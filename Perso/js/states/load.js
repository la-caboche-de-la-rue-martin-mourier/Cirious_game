var loadState = {

	preload : function(){

		var loadingLabel = game.add.text(80,150, 'loading...' , {font : '30px Courier' , fill : '#ffffff'});

		//TILEMAP
        game.load.tilemap('Town','assets/map2/myTown.json',null,Phaser.Tilemap.TILED_JSON);
        game.load.image('theset','assets/map2/TILEgame.png');

		game.load.spritesheet('gabe','assets/rpg/chars/gabe.png',24,24);
		game.load.spritesheet('circulation','assets/feutricolore.png',32,32);
		
		game.load.image('hat','assets/rpg/chars/hat-guy/hat-guy.png',16,22);
		game.load.image('bridge','assets/rpg/props/bridge.png',58,56);
		
		game.load.image('bee','assets/rpg/mobs/bee.png',34,34);
		game.load.image('collisionpixel','assets/Obstacles.png',1,1);

		game.load.image('lb','assets/carz/bleugauche.png',64,64);
		game.load.image('lgrey','assets/carz/grisgauche.png',64,64);
		game.load.image('ly','assets/carz/jaunegauche.png',64,64);
		game.load.image('lr','assets/carz/rougegauche.png',64,64);
		game.load.image('lgreen','assets/carz/vertgauche.png',64,64);
		game.load.image('rb','assets/carz/bleudroite.png',64,64);
		game.load.image('rgrey','assets/carz/grisdroite.png',64,64);
		game.load.image('ry','assets/carz/jaunedroite.png',64,64);
		game.load.image('rr','assets/carz/rougedroite.png',64,64);
		game.load.image('rgreen','assets/carz/vertdroite.png',64,64);
		game.load.image('bb','assets/carz/bleudos.png',64,64);
		game.load.image('bgrey','assets/carz/grisdos.png',64,64);
		game.load.image('by','assets/carz/jaunedos.png',64,64);
		game.load.image('br','assets/carz/rougedos.png',64,64);
		game.load.image('bgreen','assets/carz/vertdos.png',64,64);
		game.load.image('fb','assets/carz/bleuface.png',64,64);
		game.load.image('fgrey','assets/carz/grisface.png',64,64);
		game.load.image('fy','assets/carz/jauneface.png',64,64);
		game.load.image('fr','assets/carz/rougeface.png',64,64);
		game.load.image('fgreen','assets/carz/vertface.png',64,64);

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
		game.load.spritesheet('choice','assets/choice.png',64,64);
		game.load.spritesheet('mairie','assets/mairie.png',100,100);

		game.load.image('zonetext', 'assets/zonetext.png',100,100);
		game.load.image('oui', 'assets/oui.png',64, 64);
		game.load.image('no', 'assets/no.png',64, 64);
	},

	create : function(){
		game.state.start('menu');
	},


};