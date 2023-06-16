"use strict";

$(document).ready(function () {
	$(".button-collapse").sideNav();
	$('select').material_select();
	fishSwim();

});
//NOTE: I like to use pascal case for global objects that contain helper functions or variables as a reminder that thet are global.
//GLOBAL HELPER FUNCTIONS 
var GlobeHlp = {
	getSum: function (total, num) {
		return total + num;
	}
};
//var counter = [];
//var test_position = [];
//This will mostly stay the same, just converting Jquery to vanilla ES6
function fishSwim() {

	let fishProp = {
		fishTopP: 0,
		fishLeftP: 0,
		fishNuTop: 0,
		fishNuLeft: 0,
		swimSpeed: 0,
		counter: [0],
		zCounter: 0,
	};
	//This is what moves the fish to a new posistion
	function makeNewPosition() {

		// Get viewport dimensions (remove the dimension of the div)
		//do some stuff to get the height and width of TANK
		//Then have something that subtracks the size value of FISH, NAV, and FOOTER from computed TANK diminsions
		//var bounds_h = nav_h + fishImgHght + tank_h + gravel_h + footer_h + 
		let fishTopP = document.querySelector('.fish').offsetTop;
		let fishLeftP = document.querySelector('.fish').offsetLeft;
		let fishImgHght = document.querySelector('.fish > img').offsetHeight;
		let fishImgWdth = document.querySelector('.fish > img').offsetWidth;
		let tankHght = document.querySelector('#tank').offsetHeight - (fishImgHght - 20);
		let tankWdth = document.querySelector('#tank').offsetWidth; - (fishImgWdth - 20);
		let fishNuTop = Math.floor(Math.random() * tankHght);
		let fishNuLeft = Math.floor(Math.random() * tankWdth);
		let swimSpeed = Math.floor(Math.random() * (8000 - 3000) + 3000);
		let zCounter = Math.floor((Math.random() * 2) + 1);


		return fishProp['fishTopP'] = fishTopP, fishProp['fishLeftP'] = fishLeftP, fishProp['fishNuTop'] = fishNuTop, fishProp['fishNuLeft'] = fishNuLeft, fishProp['swimSpeed'] = swimSpeed, fishProp.counter[1], fishProp['zCounter'] = zCounter;
	}
	makeNewPosition();
	//test_position.push(newq[0], newq[1]);
	//var zCounter = Math.floor((Math.random() * 2) + 1);
	// Pushes 3rd array value to COUNTER ARRAY
	//counter.push(newq[3]);

	/* Start of ENHANCED FISH ANIMATION */

	//NOTE if top number is low, that means it's high
	//	IF Left numbers is low, that means it's lefter

	if (fishProp.counter.reduce(GlobeHlp.getSum) != 1) {

		// if it is going down AND right
		if (fishProp.fishTopP < fishProp.fishNuTop && fishProp.fishLeftP < fishProp.fishNuLeft) {

			if (document.querySelector('.fish > img').classList.contains('display_n')) {
				document.querySelector('.fish > img').classList.remove('display_n');
				document.querySelector('.fish > img + img').classList.add('display_n');
			}
			else {
				//do nothing
			}
			//turn the fish down
			document.querySelector('.testing').classList.remove('right_forty_up');
			document.querySelector('.testing').classList.add('right_forty_down');
		}

		//if it is going up AND right
		else if (fishProp.fishTopP > fishProp.fishNuTop && fishProp.fishLeftP < fishProp.fishNuLeft) {
			// when the right facing fish is off, turn it on
			if (document.querySelector('.fish > img').classList.contains('display_n')) {
				document.querySelector('.fish > img').classList.remove('display_n');
				document.querySelector('.fish > img + img').classList.add('display_n');
			}
			else {
				//do nothing
			}

			// turn the fish up	
			document.querySelector('.testing').classList.remove('right_forty_down');
			document.querySelector('.testing').classList.add('right_forty_up');

		}

		//if it is going up AND left
		else if (fishProp.fishTopP > fishProp.fishNuTop && fishProp.fishLeftP > fishProp.fishNuLeft) {
			// when the left facing fish is off, turn it on
			if (document.querySelector('.fish > img + img').classList.contains('display_n')) {
				document.querySelector('.fish > img + img').classList.remove('display_n');
				document.querySelector('.fish > img').classList.add('display_n');
			}
			else {
				//do nothing
			}

			// turn the fish down	
			document.querySelector('.testing').classList.remove('right_forty_up');
			document.querySelector('.testing').classList.add('right_forty_down');

		}

		//if it is going down AND left
		else if (fishProp.fishTopP < fishProp.fishNuTop && fishProp.fishLeftP > fishProp.fishNuLeft) {
			// when the left facing fish is off, turn it on
			if (document.querySelector('.fish > img + img').classList.contains('display_n')) {
				document.querySelector('.fish > img + img').classList.remove('display_n');
				document.querySelector('.fish > img').classList.add('display_n');
			}
			else {
				//do nothing
			}

			// turn the fish up
			document.querySelector('.testing').classList.remove('right_forty_down');
			document.querySelector('.testing').classList.add('right_forty_up');

		}

		else {

			//its all good man
		}


		//document.querySelector('.fish > img:first').replaceWith('<img src="https://www.placecage.com/g/102/102" alt="" height="100" width="100">');

	}


	else {
		//do nothing
	}


	// Adjusts the Z-INDEX on FISH
	if (fishProp.zCounter == 1) {
		if (document.querySelector('.fish').classList.contains('z_4')) {
			document.querySelector('.fish').classList.remove('z_4');
			document.querySelector('.fish').classList.add('z_2');
		}
		else {
			//do nothing
		}
	}
	else {
		if (document.querySelector('.fish').classList.contains('z_2')) {
			document.querySelector('.fish').classList.remove('z_2');
			document.querySelector('.fish').classList.add('z_4');
		}
		else {
			//do nothing
		}
	}

	// Keeps the COUNTER ARRAY from getting big
	/*if (counter.reduce(GlobeHlp.getSum) > 1) {
		counter.splice(2, 1);
		//alert(test_position.valueOf());
		test_position.splice(0, 2);
	}
	else {
		//alert(test_position.valueOf());
	}
	*/




	$('.fish').animate({ top: fishProp.fishNuTop, left: fishProp.fishNuLeft }, fishProp.swimSpeed, function () {

		//alert(test_position.valueOf());
		fishSwim();


	});

}


/*function haveFish(){
	$('.background').prepend('<img id="theImg" src="http://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg" />')
};*/

/*$('#btn1').click(function(){
alert('Handler for .click() called.');
	$('.background').append('<p>text</p>');
}); */
function changeBackground() {
	var background_v = $('select[name="background"]').val();
	var backgimg_1 = '<img class="responsive-img" src="img/water_sprite.svg" onerror="this.src= &quotimg/water_sprite.png &quot; this.onerror=null;" width="2000" height="550" alt="water sprite"/>';
	var backgimg_2 = '<img class="responsive-img" src="img/java_fern.svg" onerror="this.src= &quotimg/java_fern.png &quot; this.onerror=null;" width="2000" height="550" alt="java_fern"/>';

	if ($('.veryback:has(img)').length > 0) {
		if (background_v == 1) {
			$('.veryback > img').replaceWith(backgimg_1);
		}
		else if (background_v == 2) {
			$('.veryback > img').replaceWith(backgimg_2);
		}
	}

	else if (background_v == 1) {
		$('.veryback').prepend(backgimg_1);
	}
	else if (background_v == 2) {
		$('.veryback').prepend(backgimg_2);
	}
	else {
		//do nothing		 
	}
}


function changeMiddle() {
	var middleground_v = $('select[name="middleground"]').val();
	var middlegimg_1 = '<img class="responsive-img" src="img/rock_1.svg" onerror="this.src= &quotimg/rock_1.png &quot; this.onerror=null;" width="2000" height="550" alt="Its a rock"/>';
	var middlegimg_2 = '<img class="responsive-img" src="img/wood_1.svg" onerror="this.src= &quotimg/wood_1.png &quot; this.onerror=null;" width="2000" height="550" alt="java_fern"/>';

	if ($('.middleground:has(img)').length > 0) {
		if (middleground_v == 1) {
			$('.middleground > img').replaceWith(middlegimg_1);
		}
		else if (middleground_v == 2) {
			$('.middleground > img').replaceWith(middlegimg_2);
		}
	}

	else if (middleground_v == 1) {
		$('.middleground').prepend(middlegimg_1);
	}
	else if (middleground_v == 2) {
		$('.middleground').prepend(middlegimg_2);
	}
	else {
		//do nothing
	}
}

function changeFore() {
	//<img class="responsive-img" src="img/wisteria.svg" onerror="this.src='img/wisteria.png'; this.onerror=null;" width="2000" height="550" alt=""/>
	var foreground_v = $('select[name="foreground"]').val();
	var foregimg_1 = '<img class="responsive-img" src="img/wisteria.svg" onerror="this.src= &quotimg/wisteria.png &quot; this.onerror=null;" width="2000" height="550" alt="wisteria plant"/>';
	var foregimg_2 = '<img class="responsive-img" src="img/crypto.svg" onerror="this.src= &quotimg/crypto.png &quot; this.onerror=null;" width="2000" height="550" alt="one of the smaller crypto things"/>';

	if ($('.foreground:has(img)').length > 0) {
		if (foreground_v == 1) {
			$('.foreground > img').replaceWith(foregimg_1);
		}
		else if (foreground_v == 2) {
			$('.foreground > img').replaceWith(foregimg_2);
		}
	}

	else if (foreground_v == 1) {
		$('.foreground').prepend(foregimg_1);
	}
	else if (foreground_v == 2) {
		$('.foreground').prepend(foregimg_2);
	}
	else {
		//do nothing
	}
}


function changeGravel() {
	//<img class="responsive-img" src="img/wisteria.svg" onerror="this.src='img/wisteria.png'; this.onerror=null;" width="2000" height="550" alt=""/>
	var foreground_v = $('select[name="gravel"]').val();
	var foregimg_1 = '<img class="responsive-img" src="img/aquaruim-things.png" width="2000" height="550" alt="gray gravel"/>';
	var foregimg_2 = '<img class="responsive-img" src="img/gravel_sand.png" width="2000" height="550" alt="sandy gravel"/>';

	if ($('.gravel:has(img)').length > 0) {
		if (foreground_v == 1) {
			$('.gravel > img').replaceWith(foregimg_1);
		}
		else if (foreground_v == 2) {
			$('.gravel > img').replaceWith(foregimg_2);
		}
	}

	else if (foreground_v == 1) {
		$('.gravel').prepend(foregimg_1);
	}
	else if (foreground_v == 2) {
		$('.gravel').prepend(foregimg_2);
	}
	else {
		//do nothing
	}
}

$('#btn1').click(function () {
	changeBackground();
	changeMiddle();
	changeFore();
	changeGravel();

});






/*$(document).ready(function(){
$("#btn1").click(function(){
	var fish = $("#fish");
	startAnimation();
	function startAnimation(){
	fish.animate({right: "300"});
	fish.animate({bottom: "300"});
	fish.animate({left: "0"});
	fish.animate({top: "30"}, "slow", startAnimation);
}
 });
	});*/

/*$(document).ready(function(){
$("button").click(function(){
	var div = $("div");
	startAnimation();
	function startAnimation(){
		//div.animate({marginLeft: 300}, "slow");
		div.animate({marginDown: 50}, "slow");
		 
	   /* div.animate({bottom: 100}, "slow");
		div.animate({top: 100}, "slow", startAnimation);
	}
});
});
		*/
/** functoin that moves image from spot 1 to spot 2 on button click.*/