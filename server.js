var express=require('express');
var app=express();

app.use(express.static(__dirname + "/public"));

app.get('/contactlist',function(req,res){
console.log('I received a GETrequest')
person1 = {
name:'ahmad',
email:'ahmad@gmail.com',
number:'0598972598'
};
person2 = {
name:'ahmad1',
email:'ahmad1@gmail.com',
number:'10598972598'
};
person3 = {
name:'ahmad2',
email:'ahmad2@gmail.com',
number:'20598972598'
};
var contactlist=[person1,person2,person3];
res.json(contactlist);
});

app.listen(3000);
console.log("nodeJs ServerRunning on port 3000");