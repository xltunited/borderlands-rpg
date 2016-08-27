$( document ).ready(function() {

	//Constructor of the character object, this way

	function character(name, health, attack, counterAttack, isMain){

		this.name = name;
		this.health = health;
		this.attack = attack;
		this.counterAttack = counterAttack;
		this.isMain = isMain;

	}

	var Maya = new character("Maya", 100, 7, 5, false);
	var Axton = new character("Axton", 150, 4, 20, false);
	var Zer0 = new character("Zer0", 120, 6, 15, false);
	var Salvador = new character("Salvador", 180, 3, 25, false);

	$('#mayaIni').on('click', function(){

		if(Maya.isMain == false & Axton.isMain == false & Zer0.isMain == false & Salvador.isMain == false){

			Maya.isMain = true;
			this.style.display = 'none';

			$('#oppChoiceRow').style.display = 'block';

		}

	})

	$('#axtonIni').on('click', function(){

		Axton.isMain = true;

	})

	$('#zer0Ini').on('click', function(){

		Zer0.isMain = true;
		this.style.display = 'none';

	})

	$('#salvadorIni').on('click', function(){

		Salvador.isMain = true;

	})


});
