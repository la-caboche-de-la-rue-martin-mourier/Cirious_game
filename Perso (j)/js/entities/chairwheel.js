var chairState = {
  create : function(){
    this.player = game.add.sprite(24 , 24 , 'gabe');
    game.physics.enable(player, Phaser.Physics.ARCADE);
    player.body.collideWorldBounds = true;

    this.player.animations.add('forward',[0,1,2,3,4,5,6],10,true);
    this.player.animations.add('stand',[0],10,true);

    cursors = game.input.keyboard.createCursorKeys();    
  },

  update : function(){
        if (cursors.left.isDown)
        {
            player.body.velocity.y = 0;
            player.body.velocity.x = -100;
            player.animations.play("forward");
        }
        else if (cursors.right.isDown)
        {
            player.body.velocity.y = 0;
            player.body.velocity.x = 100;
            player.animations.play("forward");
        }
        else if (cursors.down.isDown)
        {
            player.body.velocity.y = 100;
            player.body.velocity.x = 0;
            player.animations.play("forward");
        }
        else if(cursors.up.isDown)
        {
            player.body.velocity.y = -100;
            player.body.velocity.x = 0;
            player.animations.play("forward");
        }
        else
        {
            player.body.velocity.x = 0;
            player.body.velocity.y = 0;
            player.animations.play("stand");
        }     
  }
}