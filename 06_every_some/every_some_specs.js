describe("every_some", function(){
	var array;
	var validUsers;

	beforeEach(function(){
		array = Array.prototype
		validUsers = [
				{id: 1},
				{id: 2},
				{id: 3}
			];
		
	});

	describe("checkUsers", function(){
		
		it("returns a list of valid users, returns a function that returns true if all of the supplied users exist in the original list of users", function(){
			
			var testAllValid = checkUsers(validUsers);
			// the key "id" will be the only key in each users array, you do not have to account for multiple keys
			var users = [
				{id:2},
				{id:1}
			];
			expect(testAllValid(users)).toEqual(true);
			
		});
	
	  it("returns a list of valid users, returns a function that returns false if a supplied user was not in the original list of users", function(){
	  	var testAllValid = checkUsers(validUsers);
	  	// the key "id" will be the only key in each users array, you do not have to account for multiple keys
	  	var users = [
	  		{id: 2},
	  		{id: 4},
	  		{id: 1}
	  	]
	  	expect(testAllValid(users)).toEqual(false);
	  })

	  it("calls the Array.prototype.some function", function(){
			spyOn(array, "some").and.callThrough();
			
			var testAllValid = checkUsers(validUsers);
	  	
	  	testAllValid([{id:2}, {id:18}]);	
			expect(array.some).toHaveBeenCalled();
	  });

	  it("calls the Array.prototpye.every function", function(){
	  	spyOn(array, "every").and.callThrough();
	  	
	  	var testAllValid = checkUsers(validUsers);
	  	testAllValid([{id: 1}]);
	  	expect(array.every).toHaveBeenCalled();
	  });
	  
	});
});