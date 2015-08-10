function Concat () {
	var result = [];
	var i = 0;
	var a = [];
	
	for  ( i = 0; i < arguments.length; i++) {
		if (typeof arguments[i] == "object") {
			result = result.concat(arguments[i]);
		} else {
			result += arguments[i];
		}
		
	}
	return result;
	
}

Concat ([1,2,3],[4,5]) 