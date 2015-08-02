/*Создать страничку с двумя кнопками Play & Stop. При нажатии на кнопку PLAy синий квадрат двигается вправо, при нажатии на Stop квадрат становится красным и останавливается. 
При повторном нажатии Play - появляется новый квадрат и начинает двигаться. Переделаьт: без onclick с помощью eventlistener, и чтобы перемещаемый блок создавался и вставлялся
на страницу при клике на Play*/


var x = 5;
var moving = false;
var movediv = document.createElement ("div");
var Play = document.getElementById ("play");
var Stop = document.getElementById ("stop");
var Body = document.getElementById ("body");


//x = 5; If necessary returns square to the first position
Play.addEventListener("click", function createSquare() {
movediv.classList.add("square");
Body.appendChild(movediv);
movediv.classList.remove("stopsquare");
moving = setInterval(function () {
	if (x) {
		x++;
		movediv.style.left = x+"px";
	} 
}, 24);
});

Stop.addEventListener ("click", function stopSquare () {	
    moving = clearInterval(moving);
	movediv.classList.add("stopsquare");
});

