var menuState = {

	create : function(){
		var wallmenu = game.add.image(92,0,'wallmenu');
		wallmenu.scale.setTo(3);

		fs_button = game.add.button(1200,25,"fullscreenbutton",gofull,this);
		fs_button.scale.setTo(2);

		var nameLabel = game.add.text(390, 30, 'Dis!Puzzled' , {font : '100px LatoBlack' , fill:'#ffffff'});

		var startLabel = game.add.text(900, 515 , 'Press the button to start' , {font : '25px Eldwin' , fontStyle : 'italic', fill:'black'});

		var startbutton = game.add.button(905,500,'startbutton',this.start,1,0,1);
		startbutton.scale.setTo(1.5);


	},

	start : function(){
		game.state.start('hub');
	},
	
};

function gofull() {

    if (game.scale.isFullScreen)
    {
        game.scale.stopFullScreen();
    }
    else
    {
        game.scale.startFullScreen(false);
    }

}