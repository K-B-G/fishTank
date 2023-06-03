"use strict";

$(document).ready(function () {
	$(".button-collapse").sideNav();
	$('select').material_select();
	fishSwim();

});
//GLOBAL HELPER FUNCTIONS 
function getSum(total, num) {
	return total + num;
}
/*function makeNewPosition(){
 
// Get viewport dimensions (remove the dimension of the div)
var h = $(window).height() - 150;
var w = $(window).width() - 150;
 
var nh = Math.floor(Math.random() * h);
var nw = Math.floor(Math.random() * w);
 
return [nh,nw];    
 
}

function animateDiv(){
var newq = makeNewPosition();
$('#fish').animate({ top: newq[0], left: newq[1] }, 5000, function(){
  animateDiv();        
});
 
};*/

var counter = [];
var test_position = [];
//This will mostly stay the same, just converting Jquery to vanilla ES6
function fishSwim() {	

function makeNewPosition() {

	// Get viewport dimensions (remove the dimension of the div)
	//do some stuff to get the height and width of TANK
	//Then have something that subtracks the size value of FISH, NAV, and FOOTER from computed TANK diminsions
	//var nav_h = $nav.height();
	//var nav_w =  $nav.width();
	//var fish_h = $('#fish').height();
	//var fish_w = $('#fish").width();
	//var tank_h = $('#tank').height();
	//var tank_w = $('#tank').width();
	//var gravel_h = $('#gravel').height();
	//var gravel_w = $('#gravel').width();
	//var footer_h = $('#footer').height();
	//var footer_w = $('#footer').width();
	//var bounds_h = nav_h + fish_h + tank_h + gravel_h + footer_h + 
	var fish_h = document.querySelector('.fish > img').offsetHeight;
	var fish_w = document.querySelector('.fish > img').offsetWidth;
	var h = document.querySelector('#tank').offsetHeight - (fish_h - 20);
	var w = document.querySelector('#tank').offsetWidth; - (fish_w - 20);
	/*var fish = 2;
	for(i=0; i< fish; i++){}*/

	var nh = Math.floor(Math.random() * h);
	var nw = Math.floor(Math.random() * w);
	var swim_speed = Math.floor(Math.random() * (8000 - 3000) + 3000);

	//alert(fish_w);
	return [nh, nw, swim_speed, 1];

}


	




	var newq = makeNewPosition();
	test_position.push(newq[0], newq[1]);
	var z_counter = Math.floor((Math.random() * 2) + 1);
	// Pushes 3rd array value to COUNTER ARRAY
	counter.push(newq[3]);

	/* Start of ENHANCED FISH ANIMATION */

	//NOTE if top number is low, that means it's high
	//	IF Left numbers is low, that means it's lefter

	//$('.fish').hasClass('.right_forty_down')

	if (counter.reduce(getSum) != 1) {

		// if it is going down AND right
		if (test_position[0] < test_position[2] && test_position[1] < test_position[3]) {

			if (document.querySelectorAll('.fish > img:first').classList.contains('display_n')) {
				document.querySelectorAll('.fish > img:first').classList.remove('display_n');
				document.querySelectorAll('.fish > img:last').classList.add('display_n');
			}
			else {
				//do nothing
			}
			//turn the fish down
			document.querySelectorAll('.testing').classList.remove('right_forty_up');
			document.querySelectorAll('.testing').classList.add('right_forty_down');
		}

		//if it is going up AND right
		else if (test_position[0] > test_position[2] && test_position[1] < test_position[3]) {
			// when the right facing fish is off, turn it on
			if (document.querySelectorAll('.fish > img:first').classList.contains('display_n')) {
				document.querySelectorAll('.fish > img:first').classList.remove('display_n');
				document.querySelectorAll('.fish > img:last').classList.add('display_n');
			}
			else {
				//do nothing
			}

			// turn the fish up	
			document.querySelectorAll('.testing').classList.remove('right_forty_down');
			document.querySelectorAll('.testing').classList.add('right_forty_up');

		}

		//if it is going up AND left
		else if (test_position[0] > test_position[2] && test_position[1] > test_position[3]) {
			// when the left facing fish is off, turn it on
			if (document.querySelectorAll('.fish > img:last').classList.contains('display_n')) {
				document.querySelectorAll('.fish > img:last').classList.remove('display_n');
				document.querySelectorAll('.fish > img:first').classList.add('display_n');
			}
			else {
				//do nothing
			}

			// turn the fish down	
			document.querySelector('.testing').classList.remove('right_forty_up');
			document.querySelector('.testing').classList.add('right_forty_down');

		}

		//if it is going down AND left
		else if (test_position[0] < test_position[2] && test_position[1] > test_position[3]) {
			// when the left facing fish is off, turn it on
			if (document.querySelectorAll('.fish > img:last').classList.contains('display_n')) {
				document.querySelectorAll('.fish > img:last').classList.remove('display_n');
				document.querySelectorAll('.fish > img:first').classList.add('display_n');
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
	if (z_counter == 1) {
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
	if (counter.reduce(getSum) > 1) {
		counter.splice(2, 1);
		//alert(test_position.valueOf());
		test_position.splice(0, 2);
	}
	else {
		//alert(test_position.valueOf());
	}




	$('.fish').animate({ top: newq[0], left: newq[1] }, newq[2], function () {

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


