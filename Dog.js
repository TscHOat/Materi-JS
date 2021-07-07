const Herbivor = require("./Herbivor")
class Dog extends Herbivor{
    constructor(name){
        super(name)
    }
    bark = ()=>{
        console.log("Barking");
    }
}
const anjing = new Dog("guguk")
anjing.greeting()
anjing.eat()