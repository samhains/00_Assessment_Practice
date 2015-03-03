describe("reduce_function", function(){



	describe("countWords", function(){

		var array;
		var inputWords;

		beforeEach(function(){
			array = Array.prototype;
			inputWords = ['Closure', 'Recursion', 'HigherOrder', 'Scope', 'Functional', 'Scope', 'Closure', 'Recursion', 'Closure']
		});


		it("takes an array and returns an object that contains the number of times each string occured in the array", function(){
			expect(countWords(inputWords)).toEqual({
				Closure: 3,
				Recursion: 2,
				HigherOrder:1,
				Scope: 2,
				Functional: 1
			});
		});

		it("calls Array.prototype.reduce and does not use .forEach or for/while loops", function(){
			spyOn(array, "reduce");

			countWords(inputWords);
			expect(array.reduce.calls.count()).toEqual(1);
		})

	});


	describe("recursive reduce", function(){
		var array;
		beforeEach(function(){
			array = Array.prototype;
		});

		it('behaves like Array.prototype.reduce except it takes an array as a parameter.', function(){
			expect(reduce([1,2,3], function(prev, curr, index, arr){
				return prev + curr;
			},10)).toEqual(16);
		})

		it("calls itself (Recursion)", function(){
			spyOn(window, 'reduce').and.callThrough();
			reduce([4,5,6], function(prev, curr, index, arr){
				return prev + curr;
			},10);
			expect(reduce.calls.count()).toEqual(4);
		});

		it("does not call Array.prototype.reduce", function(){
			spyOn(array, "reduce");
			reduce([4,5,6], function(prev, curr, index, arr){
				return prev + curr;
			},10);
			expect(array.reduce.calls.count()).toEqual(0);
		});
	});


	describe("create a map function using the reduce method", function(){
		var array;
		beforeEach(function(){
			array = Array.prototype;
		});

		// *** HINT: look into using Array.prototype.concat ***

		describe("mapReduce", function(){
			it("takes an array and a function and passes each index of the array to the function and returns an array of the values", function(){
				expect(mapReduce([1,2,3,4], function(num){return num + 2})).toEqual([3,4,5,6]);
			});

			it("calls Array.prototype.reduce and does not use loops (for/while) or Array.prototype.forEach", function(){
				spyOn(array, "reduce").and.callThrough();
				mapReduce([1,2,3,4], function(num){return num * 2});
				expect(mapReduce([1,2,3,4], function(num){return num * 2})).toEqual([2,4,6,8]);
				expect(array.reduce).toHaveBeenCalled();
			})
		})
	})
});