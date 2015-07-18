// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	//use element.children, element.classList, element.className, node.contains()
	var result = [];
  	function findClass(level) {
  		var children_array = level.children;

  		//terminal case for no nodes in element being searched
  		if(children_array.length == 0) {
  			console.log("No children! (Adults welcome)");
  			return;
  		}
  		//base case... I guess... because if there are no more levels to go down, 
  		//the section after won't run and it will return
  		for (var i = 0; i < children_array.length; i++) {
  			if (children_array[i].classList.contains(className)) {
  			result.push(children_array[i]);
  		}
  		//using recursion, explore all levels until the the last child node on each branch
  			if (children_array[i].children) {
  			findClass(children_array[i]);
  			}
  		}
  }
	findClass(document); //start the search, passing in the whole document
	return result;
};
