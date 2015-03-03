var repeat = function(func,num){
	var total = func();
	if(total=== num){
		return total;
	}
	repeat(func,num);
};

var repeatIterative = function(func,num){
	var total = 0;
	for(var i=0;i<num;i++){
		total = func();
	}
	return total;
};