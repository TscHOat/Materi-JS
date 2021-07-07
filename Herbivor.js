const Animal = require('./Animal')
class Herbivor extends Animal{
    constructor(name){
        super(name,"meat")
    }
    greeting =()=>{
        console.log("you dont need to know my name");
    }

}

module.exports = Herbivor