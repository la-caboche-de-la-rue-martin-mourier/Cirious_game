DemoGame={};
DemoGame.GAME_WIDTH=480;
DemoGame.GAME_HEIGHT=320;
DemoGame.TILE_WIDTH=40;
DemoGame.TILE_HEIGHT=40;
DemoGame.Boot = function(){};

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