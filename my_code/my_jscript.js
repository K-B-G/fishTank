"use strict";

$(document).ready(function () {
	$(".button-collapse").sideNav();
	$('select').material_select();
});
/*const once = {
	once: true 
};*/
//WORK ON THIS LATER 

//NOTE: I like to use pascal case for global objects that contain helper functions or variables as a reminder that thet are global.
//GLOBAL HELPER FUNCTIONS 
var GLOBHLP = {
	getSum: function (total, num) {
		return total + num;
	}
}

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

$('#btn1').click(function () {
	changeBackground();
	changeMiddle();
	changeFore();
	changeGravel();
})