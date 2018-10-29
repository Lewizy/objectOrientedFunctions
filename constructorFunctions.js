/*Constructors follow a few conventions:

Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
Constructors define properties and behaviors instead of returning a value as other functions might.

*/


let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function(){
    return "This dog has " +dog.numLegs+ " legs.";}
};
console.log(
dog.sayLegs());"This dog has 4 legs."

//use a contructor function to create an object
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
let hound = new Dog();//<== creates new instance of the object Dog
console.log(Dog.name); // Rupert

///////////////////////////////////////////////
Extend Constructors to Receive Arguments

function Dog(name,color) {

this.name = name;
this.color = color;
this.numLegs = 4;

}
let terrier = new Dog("jack","red");
console.log(terrier.numLegs)//4
