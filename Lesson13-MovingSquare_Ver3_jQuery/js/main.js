var x = 5;
var moving = false;
$('body').append('<div class="square">');
var $movediv = $("div.square");



//x = 5; If necessary returns square to the first position
$("#play").on("click", function moveSquare() {
      $movediv.css({"background":"#3399FF"}); moving = setInterval(function () {
	if (x) {
		var position = $movediv.position();
        var newPosition = position.left + 1 + "px";
        console.log(newPosition);
		$movediv.css({"left": newPosition});
	}
}, 24);
});

$("#stop").click(function stopSquare () {
    moving = clearInterval(moving);
	$movediv.css({"background": "#FF3300"});
});