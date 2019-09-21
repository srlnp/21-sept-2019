var express=require("express");
var bodyparser=require("body-parser");
require("./db/db")
var app=express();
app.use("bodyparser.json");
app.get("/",(req,res)=>{
res.send("welcome mr s rama laxmi narayan patro");
res.end();
})
app.listen("1111",function(){
    console.log("serverlitning port no 1111");
})
