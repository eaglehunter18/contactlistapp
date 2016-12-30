var express=require('express');
var app=express();
var mongojs=require('mongojs');
var db=mongojs('contactlist',['contactlist'])
var  bodyParser=require('body-parser');
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.get('/contactlist',function(req,res){
console.log('I received a GETrequest')
db.contactlist.find(function(err,docs){
console.log(docs);
res.json(docs);
});
//res.json(contactlist);
});
app.post('/contactlist',function(req,res){
console.log(req.body);//we must parse this data go to console and type npm install body parser
//insert entered data into database 'contactlist' , and  convert res data using json to view in view model
db.contactlist.insert(req.body,function(err,doc){
	res.json(doc);
})
});
app.listen(3000);
console.log("nodeJs ServerRunning on port 3000");