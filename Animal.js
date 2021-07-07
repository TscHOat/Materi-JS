class Animal{
    name
    food
    constructor(name="name",food){
        this.name = name
        this.food = food
    }
    greeting = ()=>{
        console.log("hello my name is "+name);
    }
    eat = ()=>{
        console.log("Eating "+this.food);
    }
}

module.exports = Animal