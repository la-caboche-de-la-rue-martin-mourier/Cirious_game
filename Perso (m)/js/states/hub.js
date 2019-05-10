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
        this.playerA.animations.add('frontbag',[16,17,18,19],10,true);
        this.playerA.animations.add('rightbag',[20,21,22,23],10,true);
        this.playerA.animations.add('leftbag',[24,25,26,27],10,true);
        this.playerA.animations.add('victory',[28,29,30,31,32,33,34,35,36,37],10,true);
        this.playerA.animations.add('behindbag',[38,39,40,41],10,true);
            
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
            music = game.add.audio('themegame');
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

        /*
        mairie
        banques
        chien
        courses
        librairie
        maison plage
        */
        game.objectives = [];
            //create 1 objective
        var objective = [];
        objective[0] = false;
        objective[1] = "Aller faire des demandes pour des accès handicapés";
        objective[2] = "objective1";
        game.objectives.push(objective);
        objective1 = game.add.sprite(87,570,'collisionpixel');
        game.physics.enable(objective1, Phaser.Physics.ARCADE);
        objective1.body.immovable = true;
        objective1.body.setSize(53,20,0,0);
        objective1.body.onCollide = new Phaser.Signal()
        objective1.body.onCollide.add(checkObjectives1,this);

            // next
        var objective = [];
        objective[0] = false;
        objective[1] = "Retirer des sous à la banque";
        objective[2] = "objective2";
        game.objectives.push(objective);
        objective2 = game.add.sprite(480,670,'collisionpixel');
        game.physics.enable(objective2, Phaser.Physics.ARCADE);
        objective2.body.immovable = true;
        objective2.body.setSize(32,20,0,0);
        objective2.body.onCollide = new Phaser.Signal()
        objective2.body.onCollide.add(checkObjectives2,this);
        
            ////////
        var objective = [];
        objective[0] = false;
        objective[1] = "Aller chercher saucisse le chien pour l'aveugle !";
        objective[2] = "objective3";
        game.objectives.push(objective);
        objective3 = game.add.sprite(96,304,'collisionpixel');
        game.physics.enable(objective3, Phaser.Physics.ARCADE);
        objective3.body.immovable = true;
        objective3.body.setSize(32,22,0,0);
        objective3.body.onCollide = new Phaser.Signal()
        objective3.body.onCollide.add(checkObjectives3,this);
            ////////
        var objective = [];
        objective[0] = false;
        objective[1] = "Aller faire les courses !";
        objective[2] = "objective4";
        game.objectives.push(objective);
        objective4 = game.add.sprite(788,366,'collisionpixel');
        game.physics.enable(objective4, Phaser.Physics.ARCADE);
        objective4.body.immovable = true;
        objective4.body.setSize(24,22,0,0);
        objective4.body.onCollide = new Phaser.Signal()
        objective4.body.onCollide.add(checkObjectives4,this);
            ////////
        var objective = [];
        objective[0] = false;
        objective[1] = "S'acheter un livre pour lire sur la plage";
        objective[2] = "objective5";
        game.objectives.push(objective);
        objective5 = game.add.sprite(350,570,'collisionpixel');
        game.physics.enable(objective5, Phaser.Physics.ARCADE);
        objective5.body.immovable = true;
        objective5.body.setSize(37,20,0,0);
        objective5.body.onCollide = new Phaser.Signal()
        objective5.body.onCollide.add(checkObjectives5,this);
            ///////
        var objective = [];
        objective[0] = false;
        objective[1] = "Passer à la maison déposer les courses";
        objective[2] = "objective6";
        this.playerA.bag = false
        game.objectives.push(objective);
        objective6 = game.add.sprite(158,80,'collisionpixel');
        game.physics.enable(objective6, Phaser.Physics.ARCADE);
        objective6.body.immovable = true;
        objective6.body.setSize(37,20,0,0);
        objective6.body.onCollide = new Phaser.Signal()
        objective6.body.onCollide.add(checkObjectives6,this);
            ///////
        var objective = [];
        objective[0] = false;
        objective[1] = "Aller à la plage";
        objective[2] = "objective7";
        game.objectives.push(objective);
        objective7 = game.add.sprite(800,80,'collisionpixel');
        game.physics.enable(objective7, Phaser.Physics.ARCADE);
        objective7.body.immovable = true;
        objective7.body.setSize(37,20,0,0);
        objective7.body.onCollide = new Phaser.Signal()
        objective7.body.onCollide.add(checkObjectives7,this);

            //////

        var objective = [];
        objective[0] = false;
        objective[1] = "";
        objective[2] = "";
        game.objectives.push(objective);

        game.add.image(780, 12, 'zonetext');
        var oui = game.add.image(785, 18, 'oui');
        oui.scale.setTo(0.2,0.2);
        var no = game.add.image(785, 34,'no');
        no.scale.setTo(0.2,0.2);
        game.timerblabla = 0;
        game.time.events.loop(Phaser.Timer.SECOND, function(){game.timerblabla++;}, this);

        game.objectives.last = game.add.text(810, 16, "",{ fontSize: '16px', fill: 'white'});
        game.objectives.current = game.add.text(810, 32, game.objectives[0][1],{ fontSize: '16px', fill: 'white'});

	},

	update : function(){

        game.debug.body(objective1);
        game.debug.body(objective2);
        game.debug.body(objective3);
        game.debug.body(objective4);
        game.debug.body(objective5);
        game.debug.body(objective6);
        game.debug.body(objective7);
        
		
        game.debug.body(this.playerB);
        game.debug.body(bordure2);
		autorization();
        radar(this.playerB);

        game.physics.arcade.collide(this.playerA, objective1, null, null ,this);
        game.physics.arcade.collide(this.playerA, objective2, null, null ,this);
        game.physics.arcade.collide(this.playerA, objective3, null, null ,this);
        game.physics.arcade.collide(this.playerA, objective4, null, null ,this);
        game.physics.arcade.collide(this.playerA, objective5, null, null ,this);
        game.physics.arcade.collide(this.playerA, objective6, null, null ,this);
        game.physics.arcade.collide(this.playerA, objective7, null, null ,this);

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
            if(this.playerA.bag){
                this.playerA.animations.play('leftbag');
            }
            else{
                this.playerA.animations.play('leftA');
            }
        }
        else if (cursors.right.isDown)
        {
            this.playerA.body.velocity.x = 120; this.playerA.body.velocity.y = 0;
            if(this.playerA.bag){
                this.playerA.animations.play('rightbag');
            }
            else{
                this.playerA.animations.play('rightA');
            }
        }
        else if (cursors.down.isDown)
        {
            this.playerA.body.velocity.y = 120;
            this.playerA.body.velocity.x = 0;
            if(this.playerA.bag){
                this.playerA.animations.play('frontbag');
            }
            else{
                this.playerA.animations.play('frontA'); 
            } 
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
function checkObjectives1(){
    var complete = false;
    if(game.objectives[0][2] === "objective1"){
        game.objectives[0][0] = true;
        complete = true;
    }
    if(complete){
        game.objectives.last.text = game.objectives.current.text;
        game.objectives.current.text =game.objectives[1][1];
        game.objectives.shift();
    }
}

function checkObjectives2(){
    var complete = false;
    if(game.objectives[0][2] === "objective2"){
        game.objectives[0][0] = true;
        complete = true;
    }
    if(complete){
        game.objectives.last.text = game.objectives.current.text;
        game.objectives.current.text =game.objectives[1][1];
        game.objectives.shift();
    }

}
function checkObjectives3(){
    var complete = false;
    if(game.objectives[0][2] === "objective3"){
        game.objectives[0][0] = true;
        complete = true;
    }
    if(complete){
        game.objectives.last.text = game.objectives.current.text;
        game.objectives.current.text =game.objectives[1][1];
        game.objectives.shift();
    }

}

function checkObjectives4(){
    var complete = false;
    if(game.objectives[0][2] === "objective4"){
        game.objectives[0][0] = true;
        complete = true;
    }
    if(complete){
        this.playerA.bag = true;
        game.objectives.last.text = game.objectives.current.text;
        game.objectives.current.text =game.objectives[1][1];
        game.objectives.shift();
    }

}
function checkObjectives5(){
    var complete = false;
    if(game.objectives[0][2] === "objective5"){
        game.objectives[0][0] = true;
        complete = true;
    }
    if(complete){
        game.objectives.last.text = game.objectives.current.text;
        game.objectives.current.text =game.objectives[1][1];
        game.objectives.shift();
    }

}

function checkObjectives6(){
    var complete = false;
    if(game.objectives[0][2] === "objective6"){
        game.objectives[0][0] = true;
        complete = true;
    }
    if(complete){
        this.playerA.bag = false;
        game.objectives.last.text = game.objectives.current.text;
        game.objectives.current.text =game.objectives[1][1];
        game.objectives.shift();
    }

}

function checkObjectives7(){
    var complete = false;
    if(game.objectives[0][2] === "objective7"){
        game.objectives[0][0] = true;
        complete = true;
    }
    if(complete){
        game.objectives.last.text = game.objectives.current.text;
        game.objectives.current.text =game.objectives[1][1];
        game.objectives.shift();
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