// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

	//terminal case, skip unstringifiable values
	if ((typeof(obj) === "function") || (obj === undefined)) {
  		console.log("Can't be stringified!");
  		return;
  	}
  	//case handling for various stringifiable values
  	//base case
  	else if (obj === null) {
  		return 'null';
  	}
  	else if (typeof(obj) === "string") {
  		return '"'+obj+'"';
  	}
  	else if ((typeof(obj)==="number") || (typeof(obj)==="boolean")) {
  		//simply concatenating quotes to make a string didn't work
  		return obj.toString();
  	}
  	//recursive function for arrays
  	else if (Array.isArray(obj)) {
  		var result = '';
  		if(obj.length === 0) return '[]';
  		else {
  			for(var i=0; i<obj.length; i++) {
  				result += stringifyJSON(obj[i]);
  				if(!(i==obj.length-1)) result += ',';
  			}
  			return '[' + result + ']'
  		}
  	}
  	//recursive function for objects
  	else if (typeof(obj) === "object") {
  		var result = '';
  		if (Object.keys(obj).length === 0) return '{}';
  		else {
  			//can't use simple for-in because no way to see the last element
  			for(var keys = Object.keys(obj), i = 0, end = keys.length; i < end; i++) {
  				var key = keys[i];
  				var value = obj[key];
  				if(stringifyJSON(obj[key])) {
  					result += '\"' + key + '\"' + ':' + stringifyJSON(obj[key]);
  					if(!(i==keys.length-1)) result += ',';
  				}
			}
  			return '{' + result + '}';
  		}
  	}


};
