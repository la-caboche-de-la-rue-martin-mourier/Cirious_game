var hubState = {

	create : function(){

        //game.add.image(0,0,'fondbizarre');
        game.stage.backgroundColor = '#4488AA';

    	obs = game.add.sprite(300,150,'bridge');
    	game.physics.enable(obs, Phaser.Physics.ARCADE);
    	obs.body.immovable = true;
    	obs.body.collideWorldBounds = true;

    	disappearBlock = game.add.sprite(-100,150,'bridge');
    	game.physics.enable(disappearBlock, Phaser.Physics.ARCADE);
    	disappearBlock.body.immovable = true;

        this.TextZone = game.add.sprite(300,400,'barrel');
        game.physics.enable(this.TextZone, Phaser.Physics.ARCADE);
        this.TextZone.body.immovable = true;

    	fire = game.add.sprite(358,128,'circulation');
    	game.physics.enable(fire, Phaser.Physics.ARCADE);
        fire.scale.x = 2 ; fire.scale.y = 2;
        fire.animations.add('none',[0],4,true);
        fire.animations.add('red',[1],4,true);
        fire.animations.add('orange',[2],4,true);
        fire.animations.add('green',[3],4,true);

        this.playerA = game.add.sprite(32, game.world.height - 150, 'guy');
        this.playerA.name = "playerA";
        game.physics.arcade.enable(this.playerA);
        this.playerA.body.collideWorldBounds = true;
        this.playerA.body.setSize(36, 25, 14, 32);
        this.playerA.scale.x = 0.7 ; this.playerA.scale.y = 0.7;
        this.playerA.animations.add('leftA',[8,9,10,11],10,true);
        this.playerA.animations.add('rightA',[4,5,6,7],10,true);
        this.playerA.animations.add('frontA',[0,1,2,3],10,true);
        this.playerA.animations.add('behindA',[12,13,14,15],10,true);
            
        this.playerB = game.add.sprite(62, game.world.height - 150, 'aveugle');
        this.playerB.name = "playerB";
        game.physics.arcade.enable(this.playerB);
        this.playerB.body.collideWorldBounds = true;
        this.playerB.body.setSize(32, 32, 16, 16);
        this.playerB.scale.x = 1 ; this.playerB.scale.y = 1;
        this.playerB.animations.add('visu',[0,1,2,3,4,5,6,7,8,9],10,false);


        //Controles
        cursors = game.input.keyboard.createCursorKeys();
        keyQ = game.input.keyboard.addKey(Phaser.Keyboard.Q);
        keyD = game.input.keyboard.addKey(Phaser.Keyboard.D);
        keyZ = game.input.keyboard.addKey(Phaser.Keyboard.Z);
        keyS = game.input.keyboard.addKey(Phaser.Keyboard.S);
        actionKeyA = game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_0);
        actionKeyB = game.input.keyboard.addKey(Phaser.Keyboard.A);
        actionKey2B = game.input.keyboard.addKey(Phaser.Keyboard.E);
        visualKey = game.input.keyboard.addKey(Phaser.Keyboard.X);  

        //Groupe de voiture
    	/*this.beez = game.add.group();
    	game.physics.enable(this.beez, Phaser.Physics.ARCADE);
    	this.beez.enableBody = true;
    	for (var i = 0; i < 4; i++) {
            this.thebee = caralea(this.beez,getRandomInt(5),1);
            this.thebee.body.setSize(74, 20, -10, 0);
    		this.thebee.body.velocity.x = -150;
    	}
        this.beez2 = game.add.group();
        game.physics.enable(this.beez2, Phaser.Physics.ARCADE);
        this.beez2.enableBody = true;
        for (var i = 0; i < 4; i++) {
            this.thebee = caralea(this.beez2,getRandomInt(5),2);
            this.thebee.body.velocity.y = -150;
        }*/
        ////////////////////////////////////////////////////////

        /*this.bananas = game.add.group();
        this.bananas.enableBody = true;
        this.banana = this.bananas.create(210, 200, 'banana');
        this.banana.scale.x= 0.12;
        this.banana.scale.y= 0.12;
        this.banana.body.gravity.x = 0;
        this.banana.body.gravity.y = 0;
        this.bananas.body.onCollide = new Phaser.Signal();
        this.bananas.body.onCollide.add(console.log('yes'),this);*/


        //MUSIQUE
        /*loaded = 0;
        if(loaded == 0){
            music = game.add.audio('theme');
            music.loop = true ;
            music.play();
            loaded ++;
        }*/        


    	cursors = game.input.keyboard.createCursorKeys();

        fireTimer = 0;
        game.time.events.loop(Phaser.Timer.SECOND, updateTimer, this);

        disappearBlock.body.onCollide = new Phaser.Signal();
        disappearBlock.body.onCollide.add(compteisbon,this);

        fs_button = game.add.button(0,0,"fullscreenbutton",gofull,this);

        timer = 5;
        game.time.events.loop(Phaser.Timer.SECOND, updateTimer, this);

            //setup objective
        game.objectives = [];
            //create 1 objective
        var objective = [];
        objective[0] = false;
        objective[1] = "Starting Game";
        objective[2] = function(playerA){return true;};
        game.objectives.push(objective);
            // next
        var objective = [];
        objective[0] = false;
        objective[1] = "Searching banana";
        objective[2] = function(playerA){if(playerA.score === 0){return true;}else{return false;}};
        game.objectives.push(objective);
            ////////
        var objective = [];
        objective[0] = false;
        objective[1] = "banana";
        objective[2] = function(playerA){return false;};
        game.objectives.push(objective);
            ////////
        game.objectives.last = game.add.text(256, 16, "",{ fontsize: '32px', fill: '#000'});
        game.objectives.current = game.add.text(256, 32, game.objectives[0][1],{ fontsize: '32px', fill: '#000'});

	},

	update : function(){
		
		autorization();
        radar(this.playerB);
        checkObjectives(game.objectives,this.playerA);

        game.physics.arcade.collide(this.playerA,this.playerB);
        game.physics.arcade.collide(this.playerA , this.TextZone, plainte , null , this);
		/*
        Collide avec les voitures
        game.physics.arcade.collide(this.beez , obs , null , timerEntrance , this);
		game.physics.arcade.collide(this.player , this.beez , perdu , null , this);
		game.physics.arcade.collide(this.beez , disappearBlock , null , null, this);
		game.physics.arcade.collide(this.beez,this.beez, null , null , this);
        */
        
        if (cursors.left.isDown)
        {
            this.playerA.body.velocity.x = -120; this.playerA.body.velocity.y = 0;
            this.playerA.animations.play('leftA');
        }
        else if (cursors.right.isDown)
        {
            this.playerA.body.velocity.x = 120; this.playerA.body.velocity.y = 0;
            this.playerA.animations.play('rightA');
        }
        else if (cursors.down.isDown)
        {
            this.playerA.body.velocity.y = 120;
            this.playerA.body.velocity.x = 0;
            this.playerA.animations.play('frontA');  
        }
        else if(cursors.up.isDown){
            this.playerA.body.velocity.y = -120; this.playerA.body.velocity.x = 0;
            this.playerA.animations.play('behindA');
        }
        else
        {
            this.playerA.animations.stop();
            this.playerA.body.velocity.x = 0; this.playerA.body.velocity.y = 0;

        }

        if (keyQ.isDown)
        {
            this.playerB.body.velocity.x = -150; this.playerB.body.velocity.y = 0;
        }
        else if (keyD.isDown)
        {
            this.playerB.body.velocity.x = 150; this.playerB.body.velocity.y = 0;
        }
        else if (keyS.isDown)
        {
            this.playerB.body.velocity.y = 150; this.playerB.body.velocity.x = 0;
        }
        else if(keyZ.isDown){
            this.playerB.body.velocity.y = -150; this.playerB.body.velocity.x = 0;
        }
        else
        {
            this.playerB.body.velocity.x = 0; this.playerB.body.velocity.y = 0;
        }

        game.physics.arcade.overlap(this.playerA,this.bananas,null,null,this); 

        //this.beez.setAll('body.velocity.x',-150);
		

	},

};

function updateTimer(){timer++;}
function updateFireTimer(){fireTimer++;}

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
    else if(timer <=6){
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
    this.thebee = caralea(this.beez,getRandomInt(5),1);
    this.thebee.body.velocity.x = -150;

}

function perdu(){
	game.state.start('loose');
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function caralea(group,choix,which){
    if(which == 1){
        if(choix == 0){item = group.create(800 + getRandomInt(200)*10 , 168 , 'lb');}
        if(choix == 1){item = group.create(800 + getRandomInt(200)*10 , 168 , 'lgrey');}
        if(choix == 2){item = group.create(800 + getRandomInt(200)*10 , 168 , 'lr');}
        if(choix == 3){item = group.create(800 + getRandomInt(200)*10 , 168 , 'lgreen');}
        if(choix == 4){item = group.create(800 + getRandomInt(200)*10 , 168 , 'ly');}
    }
    else{
        if(choix == 0){item = group.create(315 , 500 + getRandomInt(200)*10 , 'bb');}
        if(choix == 1){item = group.create(315 , 500 + getRandomInt(200)*10 , 'bgrey');}
        if(choix == 2){item = group.create(315 , 500 + getRandomInt(200)*10 , 'br');}
        if(choix == 3){item = group.create(315 , 500 + getRandomInt(200)*10 , 'bgreen');}
        if(choix == 4){item = group.create(315 , 500 + getRandomInt(200)*10 , 'by');}       
    }

    return item
}

function gofull() {

    if (game.scale.isFullScreen)
    {
        game.scale.stopFullScreen();
    }
    else
    {
        game.scale.startFullScreen(false);              
        create();
    }

} 

function radar(player){
    if(visualKey.isDown && timer >= 3){
        player.animations.play('visu',10,false);
        timer = 0;
    }
}

function checkObjectives(objectives,playerA){
    var complete = false;
    var actual = 0 ;
    if(objectives[0][2](playerA)){
        objectives[0][0] = true;
        complete = true;
    }
    if(complete){
        objectives.last.text = objectives.current.text;
        objectives.current.text = objectives[0][1];
        objectives.shift();
    }

}

function keyUsed(player){
    if(player.body.velocity.x > 0){ return 'right'; }
    else if(player.body.velocity.x<0){ return 'left'; }
    else if(player.body.velocity.y > 0){ return 'down'; }
    else if(player.body.velocity.y < 0){ return 'up';}
    else{ return  'noInput'; }
}

function pushthat(player,bottle){
    console.log('coucou');
    if(actionKeyB.isDown){
        bottle.body.velocity.x = -150;
    }
    if(actionKey2B.isDown){
        bottle.body.velocity.x = 150;
    }
}

function pushthat2(player,upcaddi){
    if(actionKeyB.isDown){
        upcaddi.body.velocity.y = -150;
    }
    if(actionKey2B.isDown){
        upcaddi.body.velocity.y = 150;
    }
}


function stopping(bottle){
    bottle.body.velocity.x = 0 ; bottle.body.velocity.y = 0 ;
}

function plainte(){
    button1 = game.add.button(100, 460, 'choice', mychoice, this, 1, 0, 2);
}

function mychoice(button){

}