
var f2c = function(f){
	var c =  (f - 32)*(5/9);
	return c;

};

var c2f = function(c){
	var f = (c * 9/5) + 32;
	return f;
};

var Temperature = function(usrInput){
	var temp = (usrInput? usrInput : 0);
	var isFar = true;

	return {
		//getter
		fahrenheit : function(){
			if(isFar==true){
				return temp;
			}
			else{
				return c2f(temp);
			}
		},
		celcius : function(){
			if(isFar===true){
				return f2c(temp);
			}
			else{
				return temp;
			}
		},
		//setter
		setFahrenheit : function(num){
			isFar = true;
			temp = num;
		},
		setCelcius: function(num){
			isFar = false;
			temp = num;
		}
	};
}