/*
  .....  YOUR MISSION  .....
  1. Author functions that define the Make
      and Model of a Car and the Car itself.
  2. Create three instances of your Car that
      each have a different color.
  3. Each Car you create should inherit the
      make and model name.
*/


/*
  Create a function, Make, that has a property
   of makeName and give it the value of your
   vehicle's make.
 */
var Make =function(){
  this.makeName= "Mazda";
}


/*
Create a function, Model, to hold the
corresponding property and value
*/
var Model=function(){
  this.model= "CX-5";
}


// Define the prototype of a Model?
Model.prototype= new Make();

// Define a Car
var Car = function(){};


// Define the prototype of a Car?
Car.prototype=new Model();

// Create the first car
var car1 = new Car();
car1.color="Black";
console.log("car1:",car1);
console.log("car1's make:",car1.makeName);
console.log("car1's model:",car1.model);
console.log("car1's color:",car1.color);

// Create the second car
var car2 = new Car();
car2.color="Red";
console.log("car2:",car2);
console.log("car2's make:",car2.makeName);
console.log("car2's model:",car2.model);
console.log("car2's color:",car2.color);

// Create the third car
var car3 = new Car();
car3.color="White";
console.log("car3:",car1);
console.log("car3's make:",car3.makeName);
console.log("car3's model:",car3.model);
console.log("car3's color:",car3.color);
