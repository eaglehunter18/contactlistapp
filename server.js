var express=require('express');
var app=express();

app.use(express.static(__dirname + "/public"));
app.get('/',function(req,res){
res.send('Hello from nodeJs server')
});
app.listen(3000);
console.log("nodeJs ServerRunning on port 3000");