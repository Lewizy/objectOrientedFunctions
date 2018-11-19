let litteral_Object = {
  name:"Litteral Object",
  type:"litteral",
  inheret:"Inheret this value for objectCreate",
  
}
console.log(litteral_Object.__proto__)
console.log(litteral_Object.toString())

let otherWayObject = new Object();
otherWayObject.name = "secondWayObjectCreation";
otherWayObject.description = "Second way to create object";
//console.log(otherWayObject)

//let objectCreate = Object.create(null);
let objectCreate = Object.create(litteral_Object);//inherets from "litteral_Object"
objectCreate.name = "thirdWayObjectCreation";
//console.log(objectCreate) //"Inheret this value for objectCreate",


Object.prototype.globalGreetVariable = function(){
  
  console.log("Inheret this global greeting"+" my name is "+this.name);
  
}

litteral_Object.globalGreetVariable(); 
//"Inheret this global greeting my name is litteral_Object"
otherWayObject.globalGreetVariable(); 
////"Inheret this global greeting my name is
console.log(objectCreate.__proto__.__proto__  == Object.prototype)//true
console.log(Object.getPrototypeOf(objectCreate) == litteral_Object)
