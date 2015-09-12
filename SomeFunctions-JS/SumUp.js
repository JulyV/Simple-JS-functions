/*1. Написать функцию, которая принимает два параметра, данную функцию можно вызывать как в 

примерах.
пример 1:
  someFunction(12, 23); // возвращает 34

пример 2:  
  var a = someFunction(12);
  a(23) // возвращает 34;

пример 3:
  domeFunction(12)(23) //возвращает 34;*/




function SumUp() {
	var paramArr = arguments;
	var result = 0;
	if (arguments.length > 1) {
		for (var j = 0; j < paramArr.length; j++) {
			result += paramArr[j];
		}
		return result;
	} else {
		return function () {
			for (var j = 0; j < paramArr.length; j++) {
				result += paramArr[j];
			}
			for (var i = 0; i < arguments.length; i++) {
				result += arguments[i];
			}
			return result;
		};
		
	}	
}


a = SumUp(12);
a(23) 
console.log (a)
