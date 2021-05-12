function Sum(a){
	let result = a;
	return function plus(b){
		return result+=b;
	}
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