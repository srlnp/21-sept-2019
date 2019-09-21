var express=require("express");
var app=express();
app.get("/",(req,res)=>{
res.send("welcome mr s rama laxmi narayan patro");
res.end();
})
app.listen("1111",function(){
    console.log("serverlitning port no 1111");
})