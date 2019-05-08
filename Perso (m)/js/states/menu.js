var menuState = {

	create : function(){

		var nameLabel = game.add.text(80, 80, 'My First Game' , {font : '50px Arial' , fill:'#ffffff'});

		var startLabel = game.add.text(80, 300 , 'press the button to start' , {font : '25px Arial' , fill:'#ffffff'});

		game.add.button(500,300,'playbutton',this.start);

	},

	start : function(){
		game.state.start('hub');
	},

};