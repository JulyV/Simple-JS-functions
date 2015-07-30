/*Создать страничку с двумя кнопками Play & Stop. При нажатии на кнопку PLAy синий квадрат двигается вправо, при нажатии на Stop квадрат становится красным и останавливается. 
При повторном нажатии Play - появляется новый квадрат и начинает двигаться*/


var movediv = document.getElementById('square');
var x = 5;
var moving = false;

function moveSquare() {
	//x = 5; If necessary returns square to the first position
	movediv.classList.remove("stopsquare");
    moving = setInterval(function () {
		if (x) {
			x++;
			movediv.style.left = x+"px";
		} 
	}, 24);

}

function stopSquare () {
	moving = clearInterval(moving);
	movediv.classList.add("stopsquare");
}
