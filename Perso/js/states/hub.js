var hubState = {

	create : function(){

        //game.add.image(0,0,'fondbizarre');
        map = game.add.tilemap('Town');
        map.addTilesetImage('myTileset','theset');

        //game.stage.backgroundColor='#4488AA'
        ground = map.createLayer('Ground');
        topground = map.createLayer('TopGround')
        obstacles = map.createLayer('Obstacles');
        chairobstacles = map.createLayer('ChairObstacles');
        veterinaire = map.createLayer('Veterinaire');
        clifflimit = map.createLayer('CliffLimit');

        //Collisions
        map.setCollisionByExclusion([0], true, obstacles);
        

    	disappearBlock = game.add.sprite(-100,147,'bridge');
    	game.physics.enable(disappearBlock, Phaser.Physics.ARCADE);
    	disappearBlock.body.immovable = true;
        disappearBlock2 = game.add.sprite(1460,700,'bridge');
        game.physics.enable(disappearBlock2, Phaser.Physics.ARCADE);
        disappearBlock2.body.immovable = true;


        this.TextZone = game.add.sprite(300,400,'barrel');
        game.physics.enable(this.TextZone, Phaser.Physics.ARCADE);
        this.TextZone.body.immovable = true;

        horizFire = game.add.group();
        game.physics.enable(horizFire,Phaser.Physics.ARCADE);
        

    	fire = game.add.sprite(358,128,'circulation');
    	game.physics.enable(fire, Phaser.Physics.ARCADE);
        fire.animations.add('none',[0],4,true);
        fire.animations.add('red',[1],4,true);
        fire.animations.add('orange',[2],4,true);
        fire.animations.add('green',[3],4,true);

        //Players
        this.playerA = game.add.sprite(120, 80, 'guy');
        this.playerA.name = "playerA";
        game.physics.arcade.enable(this.playerA);
        this.playerA.body.collideWorldBounds = true;
        this.playerA.body.setSize(36, 25, 14, 32);
        this.playerA.scale.x = 0.7 ; this.playerA.scale.y = 0.7;
        this.playerA.animations.add('leftA',[8,9,10,11],10,true);
        this.playerA.animations.add('rightA',[4,5,6,7],10,true);
        this.playerA.animations.add('frontA',[0,1,2,3],10,true);
        this.playerA.animations.add('behindA',[12,13,14,15],10,true);
            
        this.playerB = game.add.sprite(170, 80, 'aveugle');
        this.playerB.name = "playerB";
        game.physics.arcade.enable(this.playerB);
        this.playerB.body.collideWorldBounds = true;
        this.playerB.body.setSize(32, 32, 16, 16);
        this.playerB.scale.x = 1 ; this.playerB.scale.y = 1;
        this.playerB.animations.add('visu',[0,1,2,3,4,5,6,7,8,9],10,false);

        above = map.createLayer('Above');
        bordure = game.add.sprite(10,255,'collisionpixel');
        game.physics.enable(bordure, Phaser.Physics.ARCADE);
        bordure.body.immovable = true;
        bordure.body.setSize(560,1,0,0);
        bordure2 = game.add.sprite(576,225,'collisionpixel');
        game.physics.enable(bordure2, Phaser.Physics.ARCADE);
        bordure2.body.immovable = true;
        bordure2.body.setSize(1,100,0,0);

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
    	this.leftcarz = game.add.group();
    	game.physics.enable(this.leftcarz, Phaser.Physics.ARCADE);
    	this.leftcarz.enableBody = true;
    	for (var i = 0; i < 3; i++) {
            this.lc = caralea(this.leftcarz,getRandomInt(5),1);
            this.lc.body.setSize(74, 20, -10, 0);
    		this.lc.body.velocity.x = -150;
    	}
        this.rightcarz = game.add.group();
        game.physics.enable(this.rightcarz, Phaser.Physics.ARCADE);
        this.rightcarz.enableBody = true;
        for (var i = 0; i < 3; i++) {
            this.rc = caralea(this.rightcarz,getRandomInt(5),2);
            this.rc.body.setSize(74, 20, -10, 0);
            this.rc.body.velocity.x = 150;
        }

        /*this.beez2 = game.add.group();
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
        this.bananas.body.onCollide = new Phaser.Signal();
        this.bananas.body.onCollide.add(console.log('yes'),this);*/


        //MUSIQUE
        loaded = 0;
        if(loaded == 0){
            music = game.add.audio('theme');
            music.loop = true ;
            music.play();
            loaded ++;
        }

        //BOUTONS POUR LES DEMANDES EN MAIRIE
        this.button1 = game.add.button(600,600,'mairie',mychoice,this,1,0,2);
        this.button2 = game.add.button(720,600,'mairie',mychoice,this,1,0,2);
        this.button3 = game.add.button(840,600,'mairie',mychoice,this,1,0,2);
        this.button4 = game.add.button(960,600,'mairie',mychoice,this,1,0,2);
        this.button5 = game.add.button(1070,600,'mairie',mychoice,this,1,0,2);
        this.button6 = game.add.button(1180,600,'mairie',mychoice,this,1,0,2);
        this.button1.alpha = 0; this.button2.alpha = 0; this.button3.alpha = 0; 
        this.button4.alpha = 0; this.button5.alpha = 0; this.button6.alpha = 0; 


    	cursors = game.input.keyboard.createCursorKeys();

        fireTimer = 0;
        game.time.events.loop(Phaser.Timer.SECOND, updateTimer, this);

        disappearBlock.body.onCollide = new Phaser.Signal();
        disappearBlock.body.onCollide.add(compteisbon,this);
        disappearBlock2.body.onCollide = new Phaser.Signal();
        disappearBlock2.body.onCollide.add(compteisbon2,this);        

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
		
        game.debug.body(this.playerB);
        game.debug.body(bordure2);
		autorization();
        radar(this.playerB);
        checkObjectives(game.objectives,this.playerA);

        game.physics.arcade.collide(this.playerA,this.playerB);
        game.physics.arcade.collide(this.playerA , this.TextZone, plainte , null , this);

        //Collisions avec la map
        game.physics.arcade.collide(this.playerA,obstacles,null,null,this);
        game.physics.arcade.collide(this.playerB,obstacles,null,null,this);
        game.physics.arcade.collide(this.playerA,bordure,null,null,this);
        game.physics.arcade.collide(this.playerA,bordure2,null,null,this);

		
        //Collide avec les voitures
        //game.physics.arcade.collide(this.leftcarz , obs , null , timerEntrance , this);
		//game.physics.arcade.collide(this.playerA , this.leftcarz , perdu , null , this);
		game.physics.arcade.collide(this.leftcarz , disappearBlock , null , null, this);
		game.physics.arcade.collide(this.leftcarz,this.leftcarz, null , null , this);
        game.physics.arcade.collide(this.rightcarz , disappearBlock2 , null , null, this);
        game.physics.arcade.collide(this.rightcarz,this.rightcarz, null , null , this);
        
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
    this.leftcarz.remove(who);
    that = caralea(this.leftcarz,getRandomInt(5),1);
    that.body.velocity.x = -150;
}
function compteisbon2(him,who) {
    who.kill()
    this.rightcarz.remove(who);
    that = caralea(this.rightcarz,getRandomInt(5),2);
    that.body.velocity.x = 150;
}

function perdu(){
	game.state.start('loose');
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function caralea(group,choix,which){
    if(which == 1){
        if(choix == 0){item = group.create(800 + getRandomInt(200)*10 , 147 , 'lb');}
        if(choix == 1){item = group.create(800 + getRandomInt(200)*10 , 147 , 'lgrey');}
        if(choix == 2){item = group.create(800 + getRandomInt(200)*10 , 147 , 'lr');}
        if(choix == 3){item = group.create(800 + getRandomInt(200)*10 , 147 , 'lgreen');}
        if(choix == 4){item = group.create(800 + getRandomInt(200)*10 , 147 , 'ly');}
    }
    else if(which == 2){
        if(choix == 0){item = group.create(-100 - getRandomInt(200)*10 , 170 , 'rb');}
        if(choix == 1){item = group.create(-100 - getRandomInt(200)*10 , 170 , 'rgrey');}
        if(choix == 2){item = group.create(-100 - getRandomInt(200)*10 , 170 , 'rr');}
        if(choix == 3){item = group.create(-100 - getRandomInt(200)*10 , 170 , 'rgreen');}
        if(choix == 4){item = group.create(-100 - getRandomInt(200)*10 , 170 , 'ry');}
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
    this.button1.alpha = 1;
    this.button2.alpha = 1;
    this.button3.alpha = 1;
    this.button4.alpha = 1;  
    this.button5.alpha = 1;
    this.button6.alpha = 1;
}

function mychoice(button){
    if(button == this.button1){
        game.add.sprite(400,400,'barrel');
    }
    else if(button == this.button2){
        game.add.sprite(400,400,'banana');
    }
    else{
        game.add.sprite(400,400,'caddi1');
    }
    this.button1.alpha = 0; this.button2.alpha = 0;
    this.button3.alpha = 0; this.button4.alpha = 0;
    this.button5.alpha = 0; this.button6.alpha = 0;
}