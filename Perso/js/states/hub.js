var hubState = {

	create : function(){
        this.whichFire = true;
        this.rampe = false;
        this.poulpo ; this.poulpoExist = false;

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
        bordure = game.add.sprite(10,255,'collisionpixel');
        game.physics.enable(bordure, Phaser.Physics.ARCADE);
        bordure.body.immovable = true;
        bordure.body.setSize(560,1,0,0);
        bordure2 = game.add.sprite(576,225,'collisionpixel');
        game.physics.enable(bordure2, Phaser.Physics.ARCADE);
        bordure2.body.immovable = true;
        bordure2.body.setSize(1,100,0,0);


        //Passages Pietons
        cross1 = game.add.sprite(550,143,'collisionpixel');
        game.physics.enable(cross1, Phaser.Physics.ARCADE);
        cross1.body.immovable = true; cross1.body.setSize(53,68,0,0);
        cross2 = game.add.sprite(743,143,'collisionpixel');
        game.physics.enable(cross2, Phaser.Physics.ARCADE);
        cross2.body.immovable = true; cross2.body.setSize(53,68,0,0);
        
        cross3 = game.add.sprite(625,102,'collisionpixel');
        game.physics.enable(cross3, Phaser.Physics.ARCADE);
        cross3.body.immovable = true; cross3.body.setSize(97,20,0,0);
        cross4 = game.add.sprite(625,230,'collisionpixel');
        game.physics.enable(cross4, Phaser.Physics.ARCADE);
        cross4.body.immovable = true; cross4.body.setSize(97,20,0,0);
        cross5 = game.add.sprite(625,390,'collisionpixel');
        game.physics.enable(cross5, Phaser.Physics.ARCADE);
        cross5.body.immovable = true; cross5.body.setSize(97,20,0,0);
        cross6 = game.add.sprite(625,518,'collisionpixel');
        game.physics.enable(cross6, Phaser.Physics.ARCADE);
        cross6.body.immovable = true; cross6.body.setSize(97,20,0,0);



        //Reapparitions de Voitures
    	disappearBlock = game.add.sprite(-100,147,'collisionpixel');
    	game.physics.enable(disappearBlock, Phaser.Physics.ARCADE);
    	disappearBlock.body.immovable = true;
        disappearBlock2 = game.add.sprite(1460,170,'collisionpixel');
        game.physics.enable(disappearBlock2, Phaser.Physics.ARCADE);
        disappearBlock2.body.immovable = true;
        disappearBlock3 = game.add.sprite(680,-20,'collisionpixel');
        game.physics.enable(disappearBlock3, Phaser.Physics.ARCADE);
        disappearBlock3.body.immovable = true;
        disappearBlock4 = game.add.sprite(635,820,'collisionpixel');
        game.physics.enable(disappearBlock4, Phaser.Physics.ARCADE);
        disappearBlock4.body.immovable = true;

        disappearBlock.body.onCollide = new Phaser.Signal();
        disappearBlock.body.onCollide.add(compteisbon,this);
        disappearBlock2.body.onCollide = new Phaser.Signal();
        disappearBlock2.body.onCollide.add(compteisbon2,this);
        disappearBlock3.body.onCollide = new Phaser.Signal();
        disappearBlock3.body.onCollide.add(compteisbon3,this);
        disappearBlock4.body.onCollide = new Phaser.Signal();
        disappearBlock4.body.onCollide.add(compteisbon4,this);

        horizFire = game.add.group();
        vertiFire = game.add.group();
        createFire(horizFire,540,175);
        createFire(horizFire,795,120);
        createFire(vertiFire,625,65);
        createFire(vertiFire,625,355);
        createFire(vertiFire,710,230);
        createFire(vertiFire,710,525);


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
        //this.playerA.animations.add('frontbag',[16,17,18,19],10,true);
        //this.playerA.animations.add('rightbag',[20,21,22,23],10,true);
        //this.playerA.animations.add('leftbag',[24,25,26,27],10,true);
        this.playerA.animations.add('victory',[28,29,30,31,32,33,34,35,36,37],10,true);
        //this.playerA.animations.add('behindbag',[38,39,40,41],10,true);
            
        this.playerB = game.add.sprite(170, 80, 'aveugleetsonchien');
        this.playerB.name = "playerB";
        game.physics.arcade.enable(this.playerB);
        this.playerB.body.collideWorldBounds = true;
        this.playerB.body.setSize(32, 32, 16, 16);
        this.playerB.scale.x = 0.7 ; this.playerB.scale.y = 0.7;
        visu = this.playerB.animations.add('visu',[20,21,22,23,24,25,26,27],10,false);//C'est normal Marc
        this.playerB.animations.add('frontchien',[0,1,2,3],10,true);
        this.playerB.animations.add('behindchien',[4,5,6,7],10,true);
        this.playerB.animations.add('rightchien'[8,9,10,11,12,13],10,true);
        this.playerB.animations.add('leftchien'[14,15,16,17,18,19],10,true);
        this.playerB.animations.add('victory'[29,30,31,32,33,34],10,true);
        this.playerB.alpha = 0;

        visu.onComplete.add(function(){this.playerB.alpha = 0;},this);
        /*
        this.playerB = game.add.sprite(170, 80, 'aveugle');
        this.playerB.scale.x = 1 ; this.playerB.scale.y = 1;
        this.playerB.animations.add('visu',[0,1,2,3,4,5,6,7,8,9],10,false);
        */

        above = map.createLayer('Above');


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
        this.backcarz = game.add.group();
        game.physics.enable(this.backcarz, Phaser.Physics.ARCADE);
        this.backcarz.enableBody = true;
        for (var i = 0; i < 3; i++) {
            this.bc = caralea(this.backcarz,getRandomInt(5),3);
            this.bc.body.setSize(32,32,0,0);
            this.bc.body.velocity.y = -150;
        }
        this.frontcarz = game.add.group();
        game.physics.enable(this.frontcarz, Phaser.Physics.ARCADE);
        this.frontcarz.enableBody = true;
        for (var i = 0; i < 3; i++) {
            this.fc = caralea(this.frontcarz,getRandomInt(5),4);
            this.fc.body.setSize(32,32,0,0);
            this.fc.body.velocity.y = 150;
        }
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
        this.button1 = game.add.button(780,650,'mairie',mychoice,this,1,0,2);
        this.button2 = game.add.button(900,650,'mairie',mychoice,this,1,0,2);
        this.button3 = game.add.button(1020,650,'mairie',mychoice,this,1,0,2);
        this.button4 = game.add.button(1140,650,'mairie',mychoice,this,1,0,2);
        this.button5 = game.add.button(1260,650,'mairie',mychoice,this,1,0,2);
        this.button1.alpha = 0; this.button2.alpha = 0; this.button3.alpha = 0; 
        this.button4.alpha = 0; this.button5.alpha = 0;


    	cursors = game.input.keyboard.createCursorKeys();

        fireTimer = 0;
        game.time.events.loop(Phaser.Timer.SECOND, updateTimer, this);


        fs_button = game.add.button(0,0,"fullscreenbutton",gofull,this);

        timer = 5;
        game.time.events.loop(Phaser.Timer.SECOND, updateTimer, this);

            
        //setup objective

    
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
        objective7 = game.add.sprite(1100,650,'collisionpixel');
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

        game.objectives.last = game.add.text(810, 16, "",{ fontSize: '16px', fill: 'white'});
        game.objectives.current = game.add.text(810, 32, game.objectives[0][1],{ fontSize: '16px', fill: 'white'});

	},

	update : function(){

        if(this.poulpoExist == true){this.poulpo.animations.play('nage');}

        game.debug.body(objective1);
        game.debug.body(objective2);
        game.debug.body(objective3);
        game.debug.body(objective4);
        game.debug.body(objective5);
        game.debug.body(objective6);
        game.debug.body(objective7);

        game.physics.arcade.collide(this.playerA, objective2, null, null ,this);
        game.physics.arcade.collide(this.playerA, objective3, null, null ,this);
        game.physics.arcade.collide(this.playerA, objective4, null, null ,this);
        game.physics.arcade.collide(this.playerA, objective5, null, null ,this);
        game.physics.arcade.collide(this.playerA, objective6, null, null ,this);
        game.physics.arcade.collide(this.playerA, objective7, null, null ,this);
        game.physics.arcade.collide(this.playerB, objective1, plainte, null ,this);
        game.physics.arcade.collide(this.playerB, objective2, null, null ,this);
        game.physics.arcade.collide(this.playerB, objective3, null, null ,this);
        game.physics.arcade.collide(this.playerB, objective4, null, null ,this);
        game.physics.arcade.collide(this.playerB, objective5, null, null ,this);
        game.physics.arcade.collide(this.playerB, objective6, null, null ,this);
        game.physics.arcade.collide(this.playerB, objective7, null, null ,this);
		
        game.debug.body(this.playerB);
		autorization(horizFire,vertiFire,this.leftcarz,this.rightcarz,this.backcarz,this.frontcarz,this.whichFire);
        radar(this.playerB);

        game.physics.arcade.collide(this.playerA,this.playerB);

        //Collisions avec la map
        game.physics.arcade.collide(this.playerA,obstacles,null,null,this);
        game.physics.arcade.collide(this.playerB,obstacles,null,null,this);
        game.physics.arcade.collide(this.playerA,bordure,null,null,this);
        game.physics.arcade.collide(this.playerA,bordure2,null,null,this);
        game.physics.arcade.collide(this.playerB,bordure,null,null,this);
        game.physics.arcade.collide(this.playerB,bordure2,null,null,this);
        game.physics.arcade.collide(this.playerA,chairobstacles,null,null,this);

		
        //Collide avec les voitures
        game.physics.arcade.collide(this.leftcarz , [cross2] , null , timerEntrance , this);
        game.physics.arcade.collide(this.rightcarz , [cross1] , null , timerEntrance , this);
        game.physics.arcade.collide(this.backcarz , [cross4,cross6] , null , timerEntrance2 , this);
        game.physics.arcade.collide(this.frontcarz , [cross3,cross5] , null , timerEntrance2 , this);

        game.physics.arcade.collide(this.leftcarz , this.playerA, null, null , this);
        game.physics.arcade.collide(this.rightcarz , this.playerA, null, null , this);
        game.physics.arcade.collide(this.backcarz , this.playerA, null, null , this);
        game.physics.arcade.collide(this.frontcarz , this.playerA, null, null , this);

        game.physics.arcade.collide(this.leftcarz , this.playerB , null ,null , this);
        game.physics.arcade.collide(this.rightcarz , this.playerB , null , null, this);
        game.physics.arcade.collide(this.backcarz , this.playerB , null , null , this);
        game.physics.arcade.collide(this.frontcarz , this.playerB , null , null , this);


		game.physics.arcade.collide(this.leftcarz , disappearBlock , null , null, this);
		game.physics.arcade.collide(this.leftcarz,this.leftcarz, null , null , this);
        game.physics.arcade.collide(this.rightcarz , disappearBlock2 , null , null, this);
        game.physics.arcade.collide(this.rightcarz,this.rightcarz, null , null , this);
        game.physics.arcade.collide(this.backcarz , disappearBlock3 , null , null, this);
        game.physics.arcade.collide(this.backcarz,this.backcarz, null , null , this);
        game.physics.arcade.collide(this.frontcarz , disappearBlock4 , null , null, this);
        game.physics.arcade.collide(this.frontcarz,this.frontcarz, null , null , this);
        
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
	if(timer <= 7 ){
		return false;
	}
	else{
		return true;
	}
}
function timerEntrance2(){
    if(timer <= 8 ){
        return true;
    }
    else{
        return false;
    }
}

function autorization(group,other,left,right,back,front,condition){
    if(timer <= 6){
        group.callAll('play', null, 'green');
        if(condition == true){
            other.callAll('play',null,'red');
        }
        else{
            other.callAll('play',null,'ondered');
        }
        left.setAll('body.velocity.x',-150);
        right.setAll('body.velocity.x',150);
    }
    else if(timer <=8){
        group.callAll('play',null,'orange');
        if(condition == true){
            other.callAll('play',null,'red');
        }
        else{
            other.callAll('play',null,'ondered');
        }
    }
    else if(timer <= 14){
        if(condition == true){
            group.callAll('play',null,'red');
        }
        else{
            group.callAll('play',null,'ondered');
        }
        other.callAll('play',null,'green');
        back.setAll('body.velocity.y',-150);
        front.setAll('body.velocity.y',150);
    }
    else if(timer <=16){
        if(condition == true){
            group.callAll('play',null,'red');
        }
        else{
            group.callAll('play',null,'ondered');
        }
        other.callAll('play',null,'orange');
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
function compteisbon3(him,who) {
    who.kill()
    this.backcarz.remove(who);
    that = caralea(this.backcarz,getRandomInt(5),3);
    that.body.velocity.y = 150;
}
function compteisbon4(him,who) {
    who.kill()
    this.frontcarz.remove(who);
    that = caralea(this.frontcarz,getRandomInt(5),4);
    that.body.velocity.y = 150;
}

function perdu(){
	game.state.start('loose');
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function caralea(group,choix,which){
    if(which == 1){
        if(choix == 0){item = group.create(800 + getRandomInt(100)*30 , 147 , 'lb');}
        if(choix == 1){item = group.create(800 + getRandomInt(100)*30 , 147 , 'lgrey');}
        if(choix == 2){item = group.create(800 + getRandomInt(100)*30 , 147 , 'lr');}
        if(choix == 3){item = group.create(800 + getRandomInt(100)*30 , 147 , 'lgreen');}
        if(choix == 4){item = group.create(800 + getRandomInt(100)*30 , 147 , 'ly');}
    }
    if(which == 2){
        if(choix == 0){item = group.create(-100 - getRandomInt(100)*30 , 170 , 'rb');}
        if(choix == 1){item = group.create(-100 - getRandomInt(100)*30 , 170 , 'rgrey');}
        if(choix == 2){item = group.create(-100 - getRandomInt(100)*30 , 170 , 'rr');}
        if(choix == 3){item = group.create(-100 - getRandomInt(100)*30 , 170 , 'rgreen');}
        if(choix == 4){item = group.create(-100 - getRandomInt(100)*30 , 170 , 'ry');}
    }
    if(which == 3){
        if(choix == 0){item = group.create(680 , 400 + getRandomInt(100)*30 , 'bb');}
        if(choix == 1){item = group.create(680 , 400 + getRandomInt(100)*30 , 'bgrey');}
        if(choix == 2){item = group.create(680 , 400 + getRandomInt(100)*30 , 'br');}
        if(choix == 3){item = group.create(680 , 400 + getRandomInt(100)*30 , 'bgreen');}
        if(choix == 4){item = group.create(680 , 400 + getRandomInt(100)*30 , 'by');}       
    }
    if(which == 4){
        if(choix == 0){item = group.create(635 , -100 - getRandomInt(100)*30 , 'fb');}
        if(choix == 1){item = group.create(635 , -100 - getRandomInt(100)*30 , 'fgrey');}
        if(choix == 2){item = group.create(635 , -100 - getRandomInt(100)*30 , 'fr');}
        if(choix == 3){item = group.create(635 , -100 - getRandomInt(100)*30 , 'fgreen');}
        if(choix == 4){item = group.create(635 , -100 - getRandomInt(100)*30 , 'fy');}       
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
        player.alpha = 1;
        player.animations.play('visu',10,false);
        timer = 0;
    }
}


function checkObjectives1(){
    var complete = false;
    if(game.objectives[0][2] === "objective1" && this.rampe == true ){
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
}

function mychoice(button){
    if(button == this.button1){
        this.whichFire = !(this.whichFire);
        console.log(this.whichFire);
    }
    else if(button == this.button2){
        this.rampe = true;
    }
    else if(button == this.button3){
        game.add.sprite(210+(getRandomInt(7)*20),630+(getRandomInt(3)*20),'canard');
    }
    else if(button == this.button4){
        game.add.sprite(280,320,'tardis');
    }
    else{
        this.poulpoExist = true;
        this.poulpo = game.add.sprite(1200,700,'pulpo');
        this.poulpo.animations.add('nage',[0,1,2,3,4,5,6],10,true);
    }
    this.button1.alpha = 0; this.button2.alpha = 0;
    this.button3.alpha = 0; this.button4.alpha = 0;
    this.button5.alpha = 0;
}

function createFire(group,x,y){
    fire = group.create(x,y,'circulation2');
    fire.scale.x = 1.2; fire.scale.y = 1.2;
    fire.animations.add('none',[0],6,true);
    fire.animations.add('red',[1],6,true);
    fire.animations.add('orange',[2],6,true);
    fire.animations.add('green',[3],6,true);
    fire.animations.add('ondered',[4,5,6,7,8,9],4,true);
}