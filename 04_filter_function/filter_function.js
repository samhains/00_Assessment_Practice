var getMessages = function(messages){
	var mapped = messages.map(function(element){
		return element.message;});
	return mapped.filter(function(element){
		return element.length<50;
	});

	/*return messages.filter(function(element){
		return element.message>50;
	});*/
};