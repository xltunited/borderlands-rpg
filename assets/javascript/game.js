jQuery(document).ready(function() {

	//Constructor of the character object, this way

	function character(name, health, attack, counterAttack, isMain, currOpponent, battlePic){

		this.name = name;
		this.health = health;
		this.attack = attack;
		this.counterAttack = counterAttack;
		this.isMain = isMain;
		this.currOpponent = currOpponent;
		this.battlePic = battlePic;


	};

	var Maya = new character("Maya", 100, 7, 5, false, false, "./assets/images/mayabattle.jpeg");
	var Axton = new character("Axton", 150, 4, 20, false, false,"./assets/images/axtonbattle.jpeg");
	var Zer0 = new character("Zer0", 120, 6, 15, false, false,"./assets/images/zer0battle.jpeg");
	var Salvador = new character("Salvador", 180, 3, 25, false, false,"./assets/images/salvadorbattle.jpeg");

	var charArray = [Maya, Axton, Zer0, Salvador];

	var Main = new character();

    var Opp = new character();

    var stage = 0;

	$('#mayaIni').on('click', function(){

		if(Maya.isMain == false & Axton.isMain == false & Zer0.isMain == false & Salvador.isMain == false){

			Maya.isMain = true;

			this.style.display = 'none';

			$('#oppRow').css('display', 'block');
			$('#welcomeRow').css('display', 'none');
			
		}

		else {

			currOpponent = true;

			this.style.display = 'none';

			$('#initialMain').css('display', 'none');

			$('#oppRow').css('display', 'none');

		}

	})

	$('#axtonIni').on('click', function(){

		if(Maya.isMain == false & Axton.isMain == false & Zer0.isMain == false & Salvador.isMain == false){

			Axton.isMain = true;

			this.style.display = 'none';

			$('#oppRow').css('display', 'block');
			$('#welcomeRow').css('display', 'none');
			
		}

		else {

			currOpponent = true;

			this.style.display = 'none';

			$('#initialMain').css('display', 'none');

			$('#oppRow').css('display', 'none');

		}

	})

	$('#zer0Ini').on('click', function(){

		if(Maya.isMain == false & Axton.isMain == false & Zer0.isMain == false & Salvador.isMain == false){

			Zer0.isMain = true;

			this.style.display = 'none';

			$('#oppRow').css('display', 'block');
			$('#welcomeRow').css('display', 'none');
			
		}

		else {

			currOpponent = true;

			this.style.display = 'none';

			$('#initialMain').css('display', 'none');

			$('#oppRow').css('display', 'none');

		}
		
	})

	$('#salvadorIni').on('click', function(){

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

		for(var i = 0; i < charArray.length; i++){

			if(charArray[i].currOpponent === true){

				stage++;

			}

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

    		if(charArray[i].currOpponent === true){

    			Opp = charArray[i];
    			break;

    		}

    	}

    	$('#mainTitle').append(Main.name);

    	$('#mainProfile').attr('src', Main.battlePic);

    	$('#mainHealth').append('Health = ' + Main.health);

    	$('#opponentTitle').append(Opp.name);

    	$('#opponentProfile').attr('src', Opp.battlePic);

    	$('#opponentHealth').append('Health = ' + Opp.health);

    	$('#main').css('display', 'block');

    	$('#versus').css('display', 'block');

    	$('#opponent').css('display', 'block');

	}



});

