var checkUsers = function(validUserArr){
	var validUsers = validUserArr;
	return function(users){
		console.log("users",users);

		return users.every(function(e){
			return validUsers.some(function(s){return e.id == s.id;});
		});

	};
};