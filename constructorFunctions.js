/*Constructors follow a few conventions:

Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
Constructors use the keyword this to set properties of the object they will create. 
Inside the constructor, this refers to the new object it will create.
Constructors define properties and behaviors instead of returning a value as other functions might.

*/

//use a contructor function to create an object
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
  this.info = function(){
    console.log("my name is "+this.name+" color is "+this.color);
  }
}
let hound = new Dog();//<== creates new instance of the object Dog
console.log(Dog.name); // Rupert
hound.name = "lambert";
console.log(hound.info);


//Extend Constructors to Receive Arguments__________________________________________________________________________

function Dog(name,color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}
let terrier = new Dog("jack","red");
console.log(terrier.numLegs)//4


//Verify an Object's Constructor with instanceof_____________________________________________________________________

/* jshint expr: true */

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(5);
myHouse instanceof House;
// Add your code below this line


//Understand Own Properties___________________________________________________________________________________________

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

for(let i in canary){
  if(canary.hasOwnProperty(i)){
    ownProps.push(i)
  }
} console.log(ownProps); //[ 'name', 'numLegs' ]


// Use Prototype Properties to Reduce Duplicate Code___________________________________________________________________

function Dog(name) {
  this.name = name; //own property
}
let beagle = new Dog("Snoopy");
Dog.prototype.numLegs = 5;// prototype property

//Here is how you add duck’s own properties to the array ownProps and prototype properties to the array prototypeProps:
function Bird(name) {
  this.name = name; //own property
}
Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}
console.log(ownProps); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]


//Irarate over all properties_________________________________________________________________________________________
//Add all of the own properties of beagle to the array ownProps. 
//Add all of the prototype properties of Dog to the array prototypeProps.

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Add your code below this line 
for (let i in beagle){
  if (Dog.hasOwnProperty(i)){
    ownProps.push(i);
  }else{
    prototypeProps.push(i);
  }
}
console.log(ownProps)//[ 'name' ]
console.log(prototypeProps)//[ 'numLegs' ]


//Understand the "Constructor" Property_______________________________________________________________________________

function Dog(name) {
  this.name = name;
}

function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}

let scooby = new Dog("scooby Doo");
console.log(scooby.constructor === Dog);
joinDogFraternity(scooby);//true




//Change the Prototype to a New Object_________________________________________________________________________________

function Bird(type){
  this.type = type;

}

//Up until now you have been adding properties to the prototype individually:
Bird.prototype.numLegs = 2;

//This becomes tedious after more than a few properties.
Bird.prototype.eat = function() {
  console.log("nom nom nom");
}
Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}

//A more efficient way is to set the prototype to a new object that already contains the properties.
//This way, the properties are added all at once:
Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
    
  }
};


// Remember to Set the Constructor Property when Changing the Prototype__________________________________________________ 

function Dog(name) {
  this.name = name; 
}
Dog.prototype = {
  constructor:Dog,
  
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom"); 
  }, 
  describe: function() {
    console.log("My name is " + this.name); 
  }
};

//Understand Where an Object’s Prototype Comes From_______________________________________________________________________

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);//true


//Understand the prototype chain_________________________________________________________________________________________


function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // => true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);


