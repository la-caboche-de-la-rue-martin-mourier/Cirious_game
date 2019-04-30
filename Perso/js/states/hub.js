var hubState = {

	create : function(){

    	obs = game.add.sprite(300,150,'bridge');
    	game.physics.enable(obs, Phaser.Physics.ARCADE);
    	obs.body.immovable = true;
    	obs.body.collideWorldBounds = true;

    	disappearBlock = game.add.sprite(-100,150,'bridge');
    	game.physics.enable(disappearBlock, Phaser.Physics.ARCADE);
    	disappearBlock.body.immovable = true;

    	fire = game.add.sprite(358,128,'circulation');
    	game.physics.enable(fire, Phaser.Physics.ARCADE);
        fire.animations.add('none',[0],4,true);
        fire.animations.add('red',[1],4,true);
        fire.animations.add('orange',[2],4,true);
        fire.animations.add('green',[3],4,true);

		player = chairState;

    	player.animations.add('forward',[0,1,2,3,4,5,6],10,true);
    	player.animations.add('stand',[0],10,true);

    	this.beez = game.add.group();
    	game.physics.enable(this.beez, Phaser.Physics.ARCADE);
    	this.beez.enableBody = true;
    	for (var i = 0; i < 5; i++) {
    		this.thebee = this.beez.create(500 + i*200 + getRandomInt(100)*10 , 162 , 'bee');
    		this.thebee.scale.x = 0.7 ; this.thebee.scale.y = 0.7;
    		this.thebee.body.velocity.x = -150;
    	}

    	cursors = game.input.keyboard.createCursorKeys();

        timer = 0;
        game.time.events.loop(Phaser.Timer.SECOND, updateTimer, this);

        visualKey = game.input.keyboard.addKey(Phaser.Keyboard.X);

        disappearBlock.body.onCollide = new Phaser.Signal();
        disappearBlock.body.onCollide.add(compteisbon,this);
	},

	update : function(){
		
		autorization();

		game.physics.arcade.collide(this.beez , obs , null , timerEntrance , this);
		game.physics.arcade.collide(player , this.beez , perdu , null , this);
		game.physics.arcade.collide(this.beez , disappearBlock , null , null, this);
		game.physics.arcade.collide(this.beez,this.beez, null , null , this);

		if(timerEntrance()){
			this.thebee.body.velocity.x = -150;
		}

		if(visualKey.isDown){
			console.log(this.beez.length);
		} 
		

	},

};

function updateTimer(){timer++;}

function timerEntrance(){
	if(timer <= 5 ){
		return false;
	}
	else{
		return true;
	}
}

function autorization (){
    if(timer <= 4){
        fire.animations.play('green');
    }
    else if(timer <=5){
        fire.animations.play('orange');
    }
    else if(timer <= 9){
        fire.animations.play('red');
    }
    else{
    	timer = 0;
    }
}

function compteisbon(him,who) {
    who.kill()
    this.beez.remove(who);
    this.thebee = this.beez.create(1000 + getRandomInt(100)*10 , 162 , 'bee');
    this.thebee.scale.x = 0.7 ; this.thebee.scale.y = 0.7;
    this.thebee.body.velocity.x = -150;

}

function perdu(){
	game.state.start('loose');
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}