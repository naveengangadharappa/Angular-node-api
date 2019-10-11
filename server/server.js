
const express=require('express');
const cors=require('cors');
var app=express();
const path=require('path');
app.use(cors());
app.use(express.static(path.join(__dirname, '../frontend/dist/Angularnew/')));

const bodyparser=require('body-parser');
app.use(bodyparser.json());


const userctrls=require('./userctrl');

app.use(bodyparser.urlencoded({
    extended:true
}))
app.listen(3000,()=>{
    console.log("Express server started at port : 3000");
});

app.use('/',userctrls);
