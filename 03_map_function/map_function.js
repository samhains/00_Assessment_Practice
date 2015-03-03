var tripleAllIterative = function(arr){
	var tripleArr = [];
	for(var i=0;i<arr.length;i++){
		tripleArr.push(arr[i]*3);
	}

	return tripleArr;
};

var tripleAll = function(arr){
	return arr.map(function(i){
		return (i*3);
	});

};