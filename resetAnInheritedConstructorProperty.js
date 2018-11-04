/*
When an object inherits its prototype from another object, it also inherits the supertype's constructor property.
But duck and all instances of Bird should show that they were constructed by Bird and not Animal. 
To do so, you can manually set Bird's constructor property to the Bird object:
*/


function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Add your code below this line

Bird.prototype.constructor = Bird; //set Bird's constructor property to the Bird object:
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();
