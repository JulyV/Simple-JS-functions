$("body").append("<ul>");
var $newUl = null;

function addLi (n) {
  for (var i = 0; i < n; i++) {
    $newUl = $("ul").append("<li><a href='#'>Ссылка</a></li>");
  }
  return $newUl;
  
}

addLi(5);

$("a").on("click",  function() {
  $(this).css({"background-color":"red", "color":"#fff"});
});