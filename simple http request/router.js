const expres = require("express");
const { ControllerTest } = require("./Controller");

const app = expres()

// Put your routes here
app.get("/",ControllerTest.getData)
app.get("/add",ControllerTest.addPerson)

app.listen(8080,()=>{
    console.log("app run on port 8080");
})