var looseState = {

	create : function(){

		var nameLabel = game.add.text(80, 80, 'Tu aurais du regarder les feux pietons!' , {font : '50px Arial' , fill:'#ffffff'});

		var startLabel = game.add.text(700, 415 , 'Press the button to start' , {font : '25px Eldwin' , fontStyle : 'italic', fill:'black'});

		var startbutton = game.add.button(805,400,'startbutton',this.start,1,0,1);
		
		startbutton.scale.setTo(1.5);

	},

	start : function(){
		game.state.start('hub');
	},

};