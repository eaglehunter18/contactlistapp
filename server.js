var express=require('express');
var app=express();
var mongojs=require('mongojs');
var db=mongojs('contactlist',['contactlist'])

app.use(express.static(__dirname + "/public"));

app.get('/contactlist',function(req,res){
console.log('I received a GETrequest')
db.contactlist.find(function(err,docs){
console.log(docs);
res.json(docs);
});
//res.json(contactlist);
});

app.listen(3000);
console.log("nodeJs ServerRunning on port 3000");