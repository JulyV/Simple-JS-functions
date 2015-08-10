function ConcatObjects () {
	var i = 0;
	var result = 0;
	
	for  ( i = 0; i < arguments.length; i++ ) {
		if( Array.isArray(arguments[i]) === true ) {
				result = [];
				for  ( i = 0; i < arguments.length; i++) {
				result = result.concat(arguments[i]);
				}
			} else if (typeof arguments[i] === "object") {
				result = {};
				for  ( i = 0; i < arguments.length; i++) {
					for (var attrname in arguments[i]) { 
					result[attrname] = arguments[i][attrname]; 
					}
				}	
				
			} else {
				result += arguments[i];
			}
	}
	return result;
	
}

ConcatObjects (1,2,3)  

ConcatObjects ({a: 1, b: 2}, {c: 3, d: 4})  

ConcatObjects ([1,2,3], [4,5])
