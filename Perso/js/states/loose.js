var looseState = {

	create : function(){

		var nameLabel = game.add.text(80, 80, 'Boloss' , {font : '50px Arial' , fill:'#ffffff'});

		var startLabel = game.add.text(80, 300 , 'press the W to start' , {font : '25px Arial' , fill:'#ffffff'});

		var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

		wkey.onDown.addOnce(this.start , this);

	},

	start : function(){
		game.state.start('hub');
	},

};