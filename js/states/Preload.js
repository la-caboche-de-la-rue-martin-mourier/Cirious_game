Game.Preload = function(){
   this.loadtext;
};

Game.Preload.prototype = { 

   
    preload : function(){ 
   
    
    }, 
 
    create : function(){ 
 
       this.loadText = this.add.text(10, 100, 'Chargement', { fill: '#ffffff' });
       this.load.onFileComplete.add(this.fileComplete, this);
       this.load.onLoadComplete.add(this.loadComplete, this);

       this.startLoad();
 
    }, 

    startLoad: function(){
         this.load.image('tiles_40x40', 'assets/img/tiles.png');
         this.load.spritesheet('player', 'assets/img/player.png',40,40);
         this.load.spritesheet('ennemi', 'assets/img/ennemy.png',40,40);
         this.load.image('fruit', 'assets/img/fruit.png',22,22);
         this.load.start();
         
    },
 
    update : function(){ 
 
    },

    fileComplete: function ( progress, cacheKey, success, totalLoaded, totalFiles) {
      
      this.loadText.setText("Fichiers chargés : " + progress + "% - " + totalLoaded + " sur " + totalFiles);

    },

    loadComplete : function(){

      //this.state.start('Game');
    }
}