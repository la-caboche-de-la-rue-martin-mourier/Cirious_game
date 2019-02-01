
Game.Game= function(){
  this.calqueCol;
  this.backgroundLayer;
  this.map;
  this.player;
  this.tileW=40;
  this.tileH=40;
  this.dir=1;
 
};

Game.Game.prototype = { 

   

    preload : function(){ 
   
       
    
    }, 
 
    create : function(){ 
           this.physics.startSystem(Phaser.Physics.ARCADE);
           this.game.physics.arcade.gravity.y = 250;

           this.map = this.add.tilemap('niveau1');
           this.map.addTilesetImage('tiles','tiles_40x40');
           this.backgroundLayer= this.map.createLayer('arriere-plan');
          
           this.calqueCol= this.map.createLayer('collision');
           this.calqueCol.resizeWorld();
           this.backgroundLayer.resizeWorld();
           this.map.setCollisionBetween(1, 9,true,'collision');
           this.world.setBounds(0, 0, 1340, 320);
         
           this.player= new Game.Player(this.game,50,50);
           this.player.animations.play('droite');

           this.game.add.existing(this.player);
           this.camera.follow(this.player, Phaser.Camera.FOLLOW_PLATFORMER);
      
 
    }, 

   init:function(){
     this.stage.backgroundColor = '#efefef' ;
    
   },
 
   update : function(){ 
      this.physics.arcade.collide(this.player,  this.calqueCol);
      this.physics.arcade.collide(this.player, this.fruitsGroup, this.fruitCatchHandler, null, this);
      this.updatePlayer();
     
    },

    updatePlayer:function(){
       if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
          this.dir=-1
          this.player.move('gauche',this.dir);
         
      }
      else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
      {
        this.dir=1
        this.player.move('droite',this.dir);
      }
      else 
      {
          this.player.stand(this.dir);
      }
      if (this.input.keyboard.isDown(Phaser.Keyboard.UP)){
          var posx=Math.round(this.player.body.x/ this.tileW);
          var posy=Math.round(this.player.body.y/ this.tileH);
          var topTile=this.map.getTileAbove(this.map.getLayerIndex('collision'), posx, posy);
       
         if(!!topTile && topTile.index==-1 ){
             this.player.jump();
         }
        
      }

    },

   
  
}