class square {
    #width
    height
    constructor(width=1,height=2){
        this.#width = width
        this.height = height
    }
    getWidth(){
        return this.#width
    }
    setWidth(width){
        this.#width = width
    }
    area =  ()=>{
        return this.#width * this.height
    }
    replaceable = () =>{
        return "from this"
    }
}

var square1 = new square()

console.log("height " + square1.height);
square1.height = 5
console.log("height " + square1.height);
console.log("width "+square1.getWidth());
square1.setWidth(2)
console.log("width "+square1.getWidth());
console.log("area "+square1.area());

console.log(square1.replaceable());
square1.replaceable = ()=>{
    return "to this"
}
console.log(square1.replaceable());