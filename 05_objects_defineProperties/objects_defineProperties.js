function Mammal(name){

	Object.defineProperties(this,{
		name: {value:name},
		offspring: {value: []}
	});
}

Mammal.prototype.haveBaby = function(){
			var babyName = "Baby "+this.name;
    		var baby = new Mammal(babyName);
    		this.offspring.push(baby);
    		return baby;
		};

Mammal.prototype.sayHello = function(){
			return "My name is "+this.name+", I'm a Mammal";};


function Cat(name,color,offspring){
	Mammal.call(this, name, offspring);

    Object.defineProperty(this, 'color',
    	{value: (color? color :"Tabby")}
    );

}

//classical inheritance does not take from Object.defineProperties(...)
// this means that if you want to use this technique, you should add
// anything you want to inherit to the prototype.

Cat.prototype = Object.create(Mammal.prototype);

Cat.prototype.haveBaby = function(color){
    var babyName = "Baby "+this.name;
    var baby = new Cat(babyName,color);
    this.offspring.push(baby);
    return baby;
};

/*


var Cat = function(name, offspring, color){


};


*/