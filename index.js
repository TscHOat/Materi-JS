const config = require("./config");

config.con.query('select * from test',(err , res)=>{
    console.log(res);
})

(function(){
    console.log("asd");
})()