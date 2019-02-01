Game={};
Game.GAME_WIDTH=800;
Game.GAME_HEIGHT=600;
Game.TILE_WIDTH=32;
Game.TILE_HEIGHT=32;
Game.Boot = function(){};

DemoGame.Boot.prototype = { 

    preload : function(){ 
   
    
    },
    
    create : function(){ 
       

        //scaling options
        /*this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.setScreenSize(true);*/
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.state.start('Preload');
   
      
    }, 

   

   
}