jQuery(document).ready(function() {

	//Constructor of the character object, this way

	function character(name, health, startingAttack, attack, counterAttack, isMain, currOpponent, battlePic, isDead){

		this.name = name;
		this.health = health;
		this.attack = attack;
		this.startingAttack = startingAttack;
		this.counterAttack = counterAttack;
		this.isMain = isMain;
		this.currOpponent = currOpponent;
		this.battlePic = battlePic;
		this.isDead = isDead;


	};

	var Maya = new character("Maya", 100, 7, 7, 5, false, false, "./assets/images/mayabattle.jpeg", false);
	var Axton = new character("Axton", 150, 4, 4, 20, false, false,"./assets/images/axtonbattle.jpeg", false);
	var Zer0 = new character("Zer0", 120, 8, 8, 15, false, false,"./assets/images/zer0battle.jpeg", false);
	var Salvador = new character("Salvador", 180, 2, 2, 25, false, false,"./assets/images/salvadorbattle.jpeg", false);

	var charArray = [Maya, Axton, Zer0, Salvador];

	var Main = new character();

    var Opp = new character();

    var stage = 0;

    var dead = 0;

	$('#MayaIni').on('click', function(){

		if(Maya.isMain == false & Axton.isMain == false & Zer0.isMain == false & Salvador.isMain == false){

			Maya.isMain = true;

			this.style.display = 'none';

			$('#oppRow').css('display', 'block');
			$('#welcomeRow').css('display', 'none');
			
		}

		else {

			Maya.currOpponent = true;

			this.style.display = 'none';

			battleStart();

		}

	})

	$('#AxtonIni').on('click', function(){

		if(Maya.isMain == false & Axton.isMain == false & Zer0.isMain == false & Salvador.isMain == false){

			Axton.isMain = true;

			this.style.display = 'none';

			$('#oppRow').css('display', 'block');
			$('#welcomeRow').css('display', 'none');
			
		}

		else {

			Axton.currOpponent = true;

			this.style.display = 'none';

			battleStart();

		}

	})

	$('#Zer0Ini').on('click', function(){

		if(Maya.isMain == false & Axton.isMain == false & Zer0.isMain == false & Salvador.isMain == false){

			Zer0.isMain = true;

			this.style.display = 'none';

			$('#oppRow').css('display', 'block');
			$('#welcomeRow').css('display', 'none');
			
		}

		else {

			Zer0.currOpponent = true;

			this.style.display = 'none';

			battleStart();

		}
		
	})

	$('#SalvadorIni').on('click', function(){

		if(Maya.isMain == false & Axton.isMain == false & Zer0.isMain == false & Salvador.isMain == false){

			Salvador.isMain = true;

			this.style.display = 'none';

			$('#oppRow').css('display', 'block');
			$('#welcomeRow').css('display', 'none');
			
		}

		else {

			Salvador.currOpponent = true;

			this.style.display = 'none';

			battleStart();


		}

	})

	function battleStart(){

		$('#initialMain').css('display', 'none');

		$('#oppRow').css('display', 'none');

		if(stage == 0){

			stage = 1;

		}

		if(dead == 1){

			stage = 2;

		}

		if(dead == 2){

			stage = 3;

		}

		if(stage == 1){

			$('.full').css('background', 'url("./assets/images/ore_chasm.jpg") no-repeat center center fixed');
			$('#stage1').css('display', 'block');

		} else if (stage == 2){

			$('.full').css('background', 'url("./assets/images/lamerock.jpg") no-repeat center center fixed');
			$('#stage2').css('display', 'block');

		} else if (stage == 3){

			$('.full').css('background', 'url("./assets/images/iceworld.jpg") no-repeat center center fixed');
			$('#stage3').css('display', 'block');

		}

    	for(var i = 0; i < charArray.length; i++){

    		if(charArray[i].isMain === true){

    			Main = charArray[i];
    			break;

    		}

    	}

    	for(var i = 0; i < charArray.length; i++){

    		if(charArray[i].currOpponent === true && charArray[i].isDead == false){

    			Opp = charArray[i];
    			break;

    		}

    	}

    	$('#mainTitle').empty();

    	$('#mainTitle').append(Main.name);

    	$('#mainProfile').attr('src', Main.battlePic);

    	$('#mainHealth').empty();

    	$('#mainHealth').append('Health = ' + Main.health);

    	$('#opponentTitle').empty();

    	$('#opponentTitle').append(Opp.name);

    	$('#opponentProfile').attr('src', Opp.battlePic);

    	$('#opponentHealth').empty();

    	$('#opponentHealth').append('Health = ' + Opp.health);

    	$('#main').css('display', 'block');

    	$('#versus').css('display', 'block');

    	$('#opponent').css('display', 'block');

    	$('#mainAttackLog').css('display', 'block');

    	$('#opponentAttackLog').css('display', 'block');

	}

	$('#attack').on('click', function(){

		Opp.health = Opp.health - Main.attack;

		$('#opponentHealth').empty();
		$('#opponentHealth').append('Health = ' + Opp.health);

		$('#mainAttackLog').empty();
		$('#mainAttackLog').append(Main.name + ' attacked ' + Opp.name + ' for ' + Main.attack + ' damage.');

		Main.attack = Main.attack + Main.startingAttack;

		if (Opp.health > 0) {

			Main.health = Main.health - Opp.counterAttack;

			$('#mainHealth').empty();
			$('#mainHealth').append('Health = ' + Main.health);

			$('#opponentAttackLog').empty();
			$('#opponentAttackLog').append(Opp.name + ' counter-attacked ' + Main.name + ' for ' + Opp.counterAttack+ ' damage.');

			if (Main.health <= 0) {

				$('#mainAttackLog').css('display', 'none');

    			$('#opponentAttackLog').css('display', 'none');

				$('#mainKill').empty();

    			$('#mainKill').append(Opp.name + ' killed ' + Main.name + '. Aww :(, better luck next time!');

    			$('#mainKillRow').css('display', 'block');

    			$('#attack').css('display', 'none');

    			$('#tryAgain').css('display', 'block');

			}

		}

		else {

			Opp.isDead = true;

			dead++;

			$('#mainAttackLog').css('display', 'none');

    		$('#opponentAttackLog').css('display', 'none');

    		$('#mainKill').empty();

    		$('#mainKill').append(Main.name + ' killed ' + Opp.name + '. Nice Job!');

    		$('#mainKillRow').css('display', 'block');

    		$('#attack').css('display', 'none');


			if( dead == 3){

				$('#winRow').css('display', 'block');

				$('#continue').css('display', 'block');

			}

			else {

	    		$('#proceed').css('display', 'block');

    		}


		}

	})

	$('#proceed').on('click', function(){

		$('.full').css('background', 'url("./assets/images/background.jpg") no-repeat center center fixed');
		$('.full').css('-webkit-background-size', 'cover');
		$('.full').css('-moz-background-size', 'cover');
		$('.full').css('o-background-size', 'cover');
		$('.full').css('background-size', 'cover');
		$('.full').css('transition', 'background 1s linear');

		$('#mainAttackLog').empty();
		$('#opponentAttackLog').empty();

		$('#proceed').css('display', 'none');

		$('#initialMain').css('display', 'block');

		$('#oppRow').css('display', 'block');

		$('#main').css('display', 'none');

    	$('#versus').css('display', 'none');

    	$('#attack').css('display', 'block');

    	$('#opponent').css('display', 'none');

    	$('#mainKillRow').css('display', 'none');

    	$('#stage'+stage).css('display', 'none');

	})

	$('#tryAgain').on('click', function(){

		$('.full').css('background', 'url("./assets/images/background.jpg") no-repeat center center fixed');
		$('.full').css('-webkit-background-size', 'cover');
		$('.full').css('-moz-background-size', 'cover');
		$('.full').css('o-background-size', 'cover');
		$('.full').css('background-size', 'cover');
		$('.full').css('transition', 'background 1s linear');

		$('#mainAttackLog').empty();
		$('#opponentAttackLog').empty();

		$('#proceed').css('display', 'none');

		$('#initialMain').css('display', 'block');

		$('#welcomeRow').css('display', 'block');

		$('#main').css('display', 'none');

    	$('#versus').css('display', 'none');

    	$('#attack').css('display', 'block');

    	$('#tryAgain').css('display', 'none');

    	$('#opponent').css('display', 'none');

    	$('#mainKillRow').css('display', 'none');

    	$('#stage'+stage).css('display', 'none');

    	$('#' + Main.name + 'Ini').css('display', 'block');

    	for(var i = 0; i < charArray.length; i++){

    		if(charArray[i].currOpponent == true){

    			$('#' + charArray[i].name + 'Ini').css('display', 'block');

    		}

    	}

    	Maya = new character("Maya", 100, 7, 7, 5, false, false, "./assets/images/mayabattle.jpeg", false);
		Axton = new character("Axton", 150, 4, 4, 20, false, false,"./assets/images/axtonbattle.jpeg", false);
		Zer0 = new character("Zer0", 120, 8, 8, 15, false, false,"./assets/images/zer0battle.jpeg", false);
		Salvador = new character("Salvador", 180, 2, 2, 25, false, false,"./assets/images/salvadorbattle.jpeg", false);

		charArray = [Maya, Axton, Zer0, Salvador];

		Main = new character();

	    Opp = new character();

	    stage = 0;

	    dead = 0;

	})

	$('#continue').on('click', function(){

		$('.full').css('background', 'url("./assets/images/win.jpg") no-repeat center center fixed');
		$('.full').css('-webkit-background-size', 'cover');
		$('.full').css('-moz-background-size', 'cover');
		$('.full').css('o-background-size', 'cover');
		$('.full').css('background-size', 'cover');
		$('.full').css('transition', 'background 1s linear');

		$('#continue').css('display', 'none');

		$('#main').css('display', 'none');

		$('#versus').css('display', 'none');

		$('#opponent').css('display', 'none');

    	$('#mainKillRow').css('display', 'none');

    	$('#stage3').css('display', 'none');

    	$('#winRow').css('display', 'none');

    	$('#playAgain').css('display', 'block');

	})

	$('#playAgain').on('click', function(){

		$('#playAgain').css('display', 'none');

		$('.full').css('background', 'url("./assets/images/background.jpg") no-repeat center center fixed');
		$('.full').css('-webkit-background-size', 'cover');
		$('.full').css('-moz-background-size', 'cover');
		$('.full').css('o-background-size', 'cover');
		$('.full').css('background-size', 'cover');
		$('.full').css('transition', 'background 1s linear');

		$('#mainAttackLog').empty();
		$('#opponentAttackLog').empty();

		$('#proceed').css('display', 'none');

		$('#initialMain').css('display', 'block');

		$('#welcomeRow').css('display', 'block');

		$('#main').css('display', 'none');

    	$('#versus').css('display', 'none');

    	$('#attack').css('display', 'block');

    	$('#tryAgain').css('display', 'none');

    	$('#opponent').css('display', 'none');

    	$('#mainKillRow').css('display', 'none');

    	$('#stage'+stage).css('display', 'none');

    	$('#' + Main.name + 'Ini').css('display', 'block');

    	for(var i = 0; i < charArray.length; i++){

    		if(charArray[i].currOpponent == true){

    			$('#' + charArray[i].name + 'Ini').css('display', 'block');

    		}

    	}

    	Maya = new character("Maya", 100, 7, 7, 5, false, false, "./assets/images/mayabattle.jpeg", false);
		Axton = new character("Axton", 150, 4, 4, 20, false, false,"./assets/images/axtonbattle.jpeg", false);
		Zer0 = new character("Zer0", 120, 8, 8, 15, false, false,"./assets/images/zer0battle.jpeg", false);
		Salvador = new character("Salvador", 180, 2, 2, 25, false, false,"./assets/images/salvadorbattle.jpeg", false);

		charArray = [Maya, Axton, Zer0, Salvador];

		Main = new character();

	    Opp = new character();

	    stage = 0;

	    dead = 0;


	})



});

