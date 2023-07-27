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

<<<<<<< HEAD
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
		else if (test_position[0] > test_position[2] && test_position[1] < test_position[3]) {
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
		else if (test_position[0] > test_position[2] && test_position[1] > test_position[3]) {
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
		else if (test_position[0] < test_position[2] && test_position[1] > test_position[3]) {
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
=======
//WORK ON LATER IT'S TO ADD NEW FISH ELEMENTS PROPPER LOOK INTO DOCUMENT FRAGMENTS
let addFish = function () {
	const nufish = '<div class="fish z_4"> <img class="angle betta_fish" src="img/vector_fighting_fish_by_stu_artgraphics-d533k02.png" alt="" height="479" width="511">';
	//let fishDiv = document.createElement('div');
	document.querySelector('.veryback').insertAdjacentHTML("afterend", nufish);//.setAttribute('class', 'fish z_4');
	//document.getElementById('tank').appendChild(fishDiv).setAttribute('class', 'fish z_4').bind(fishSwim);
	//These two lines are VERY IMPORTANT. It binds the newly created DOM elements to THIS and is passed into the fishSwim(). If this isn't done the program doesn't now how to maintain a reference to the fish. 
	let fishy = document.querySelector('.fish');
	fishSwim.bind(fishy)();
}
document.querySelector("[name='feesh']").addEventListener("click", addFish);
//This holds the fishes properties to manipulate and the functions to move it around
let fishSwim = function () {

	let onkneemay;//declaring this for later use
	//fishProp holds the current and newly made properties to move the fish
	let fishProp = {
		topP: 0,
		leftP: 0,
		nuTop: 0,
		nuLeft: 0,
		swimSpeed: 0,
		zCounter: 0,
		fishy: this,
	};
	//This gets the current position of the fish.
	let getCurrentPosition = function () {
		let topP = fishProp.fishy.style.transform.match(/[0-9]+/g);
		//let topP = fishProp.fishy.computedStyleMap().get('transform')[1].y.value;
		//let leftP = fishProp.fishy.computedStyleMap().get('transform')[0].x.value;
		if (topP != null) {
			return fishProp.topP = Number(topP[1]), fishProp.leftP = Number(topP[0]);
			/*return fishProp.topP = topP, fishProp.leftP = leftP,*/
		}
		else {
			//do nothing
		}
	};
	getCurrentPosition();
	//This is what makes the new values to move the fish.
	//This is currently a IIEF function as I only really want it run once.
	//NOTE: I don't know why makeNewPosition() sometimes has a return value of 1 or a 2. Need to look into why. 
	let makeNewPosition = function () {
		let fishImgHght = document.querySelector('.angle').offsetHeight;
		let fishImgWdth = document.querySelector('.angle').offsetWidth;
		let tankHght = document.querySelector('#tank').offsetHeight - (fishImgHght - 20);
		let tankWdth = document.querySelector('#tank').offsetWidth; - (fishImgWdth - 20);
		let nuTop = Math.floor(Math.random() * tankHght);
		let nuLeft = Math.floor(Math.random() * tankWdth);
		let swimSpeed = Math.floor(Math.random() * 5000 + 3000);
		let zCounter = Math.floor((Math.random() * 2) + 1);

		return fishProp.nuTop = nuTop, fishProp.nuLeft = nuLeft, fishProp.swimSpeed = swimSpeed, fishProp.zCounter = zCounter;
	}();
	//The following if statments check to see the current and adjuested positions of the fish as needed.
	//NOTE: if top number is low, that means it's high
	//	IF Left numbers is low, that means it's lefter

	// if it is going down AND right
	if (fishProp.topP < fishProp.nuTop && fishProp.leftP < fishProp.nuLeft) {
		fishProp.fishy.querySelector('.angle').classList.remove('y_180_rotate', 'y_180_rotate_down', 'y_180_rotate_up', 'upward');
		fishProp.fishy.querySelector('.angle').classList.add('downward');
	}
	//if it is going up AND right
	else if (fishProp.topP > fishProp.nuTop && fishProp.leftP < fishProp.nuLeft) {
		fishProp.fishy.querySelector('.angle').classList.remove('y_180_rotate', 'y_180_rotate_down', 'y_180_rotate_up', 'downward');
		fishProp.fishy.querySelector('.angle').classList.add('upward');
	}
	//if it is going up AND left
	else if (fishProp.topP > fishProp.nuTop && fishProp.leftP > fishProp.nuLeft) {
		fishProp.fishy.querySelector('.angle').classList.remove('y_180_rotate', 'y_180_rotate_down', 'downward', 'upward');
		fishProp.fishy.querySelector('.angle').classList.add('y_180_rotate_up');
	}
	//if it is going down AND left
	else if (fishProp.topP < fishProp.nuTop && fishProp.leftP > fishProp.nuLeft) {
		fishProp.fishy.querySelector('.angle').classList.remove('y_180_rotate', 'y_180_rotate_up', 'upward', 'downward');
		fishProp.fishy.querySelector('.angle').classList.add('y_180_rotate_down');
	}
	else {
		//its all good man
	}
	// Adjusts the Z-INDEX on FISH. Wheather it adjusts it's z index depends on the random number generated from makeNewPosition().
	if (fishProp.zCounter == 1) {
		if (fishProp.fishy.classList.contains('z_4')) {
			fishProp.fishy.classList.remove('z_4');
			fishProp.fishy.classList.add('z_2');
		}
	
	else if (fishProp.fishy.classList.contains('z_2')) {
			fishProp.fishy.classList.remove('z_2');
			fishProp.fishy.classList.add('z_4');
		}
	else {
			//do nothing
		}
	}
	//This is what animates the fish. Things like delay and easing most likely will be changed or adjusted later.
	//NOTE: The variable "onkneemay" is a weeb joke. Please ignore. 
	onkneemay = anime({
		targets: fishProp.fishy,
		translateX: fishProp.nuLeft,
		translateY: fishProp.nuTop,
		duration: fishProp.swimSpeed,
		direction: 'normal',
		delay: 100,
		easing: 'easeOutQuart',
		complete: function () {
			//recalls fishSwim() while making sure to maintain the THIS binding so it keeps refernceing the same fish element.
			fishSwim.bind(fishProp.fishy)();
		}
	});
}
>>>>>>> 8fe96ab (Did a little more refactoring and commented out my code. Main things were: making makeNewPosition a IIEF and removed the portions that got the current postion into a new function getCurrentPosition incase I would ever want to call it more than once, Getting rid of the counter varible and the checking if counter had a number, don't know why I had that, and adjusting the if/else statments to have an else if; I don't know why it didn't do it like that before.)
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

<<<<<<< HEAD
=======
//WORK ON LATER IT'S TO ADD NEW FISH ELEMENTS PROPPER LOOK INTO DOCUMENT FRAGMENTS
/*function addFish(){
   const nufish = '<div class="fish z_4"> <img class="angle betta_fish" src="img/vector_fighting_fish_by_stu_artgraphics-d533k02.png" alt="" height="479" width="511">';
   let fishDiv = document.createElement('div');
   fishD
   document.querySelector('.veryback').insertAdjacentElement("afterend", fishDiv).setAttribute('class', 'fish z_4');
   //document.getElementById('tank').appendChild(fishDiv).setAttribute('class', 'fish z_4').bind(fishSwim);
   fishSwim();
}
*/

>>>>>>> 8fe96ab (Did a little more refactoring and commented out my code. Main things were: making makeNewPosition a IIEF and removed the portions that got the current postion into a new function getCurrentPosition incase I would ever want to call it more than once, Getting rid of the counter varible and the checking if counter had a number, don't know why I had that, and adjusting the if/else statments to have an else if; I don't know why it didn't do it like that before.)
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


