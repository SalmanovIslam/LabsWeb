function Sum(a){
	let result = a;
	
	function plus(b){
		result+=b;
		return plus;
	}
	plus.toString = function(){
		return result;
	}
	return plus;
}

var filter = function(arr, callback){
	var i, length=arr.length, results=[];
	for(i = 0; i < length; i++){
		if(callback(arr[i])){
			results.push(arr[i]);
		}
	}
	return results;
}