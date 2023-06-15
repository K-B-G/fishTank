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
	fish_topP: 0,
	fish_leftP: 0,
	nh : 0,
	nw : 0,
	swim_speed: 0,
	counter : [0],
	z_counter: 0,
	};
function makeNewPosition() {

	// Get viewport dimensions (remove the dimension of the div)
	//do some stuff to get the height and width of TANK
	//Then have something that subtracks the size value of FISH, NAV, and FOOTER from computed TANK diminsions
	//var bounds_h = nav_h + fish_h + tank_h + gravel_h + footer_h + 
	let fish_topP = document.querySelector('.fish').offsetTop;
	let fish_leftP = document.querySelector('.fish').offsetLeft;
	let fish_h = document.querySelector('.fish > img').offsetHeight;
	let fish_w = document.querySelector('.fish > img').offsetWidth;
	let h = document.querySelector('#tank').offsetHeight - (fish_h - 20);
	let w = document.querySelector('#tank').offsetWidth; - (fish_w - 20);
	let nh = Math.floor(Math.random() * h);
	let nw = Math.floor(Math.random() * w);
	let swim_speed = Math.floor(Math.random() * (8000 - 3000) + 3000);
	let z_counter = Math.floor((Math.random() * 2) + 1);

	//alert(fish_w);
	return  fishProp['fish_topP']=fish_topP, fishProp['fish_leftP']=fish_leftP,  fishProp['nh']=nh, fishProp['nw']=nw, fishProp['swim_speed']=swim_speed, fishProp.counter [1], fishProp['z_counter']=z_counter;
    //fishProp['fish_h']=fish_h, fishProp['fish_w']=fish_w, 
}
	makeNewPosition();
	//test_position.push(newq[0], newq[1]);
	//var z_counter = Math.floor((Math.random() * 2) + 1);
	// Pushes 3rd array value to COUNTER ARRAY
	//counter.push(newq[3]);

	/* Start of ENHANCED FISH ANIMATION */

	//NOTE if top number is low, that means it's high
	//	IF Left numbers is low, that means it's lefter

	if (fishProp.counter.reduce(GlobeHlp.getSum) != 1) {

		// if it is going down AND right
		if (fishProp.fish_topP < fishProp.nh && fishProp.fish_leftP < fishProp.nw) {

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
		else if (fishProp.fish_topP > fishProp.nh && fishProp.fish_leftP < fishProp.nw) {
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
		else if (fishProp.fish_topP > fishProp.nh && fishProp.fish_leftP > fishProp.nw) {
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
		else if (fishProp.fish_topP < fishProp.nh && fishProp.fish_leftP > fishProp.nw) {
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
	if (fishProp.z_counter == 1) {
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




	$('.fish').animate({ top: fishProp.nh, left: fishProp.nw }, fishProp.swim_speed, function () {

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


