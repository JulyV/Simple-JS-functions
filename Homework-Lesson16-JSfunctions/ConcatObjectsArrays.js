function ConcatObjects () {
	var i = 0;
	
	for  ( i = 0; i < arguments.length; i++ ) {
		if( Array.isArray(arguments[i]) === true ) {
				result = [];
				for  ( i = 0; i < arguments.length; i++) {
				result = result.concat(arguments[i]);
				}
			} else {
				result = {};
				for  ( i = 0; i < arguments.length; i++) {
					for (var attrname in arguments[i]) { 
					result[attrname] = arguments[i][attrname]; 
					}
				}	
			} 
	}
	return result;
	
}

ConcatObjects ({a: 1, b: 2}, {c: 3, d: 4})  
