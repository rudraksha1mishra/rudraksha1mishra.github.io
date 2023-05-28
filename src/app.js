const express = require("express");
const hbs=require("hbs");
const User = require("./models/username");
const {registerPartials} =require("hbs");
const path = require("path");

require("./db/conn");
const app = express();
const port = process.env.PORT || 3000;

//-- setting path ;
const staticpath = path.join(__dirname,"../public");
const templetpath = path.join(__dirname,"../templets/views");
const partialpath = path.join(__dirname,"../templets/partials");
//--middleware
app.use('/css',express.static(path.join(__dirname,'../node_modules/bootstrap/dist/css')));
app.use('/js',express.static(path.join(__dirname,'../node_modules/bootstrap/dist/js')));
app.use('/jq',express.static(path.join(__dirname,'../node_modules/jquery/dist')));
app.use(express.urlencoded({extended:false}));
app.use(express.static(staticpath));
app.set("view engine","hbs");
app.set("views",templetpath);
hbs.registerPartials(partialpath);

//--routing
 app.get("/",(req,res)=>{
    res.render("index");
 });

app.get("/about",(req,res)=>{
   res.render("about");
});
app.get("/news",(req,res)=>{
   res.render("news");
});
app.get("/ourrooms",(req,res)=>{
   res.render("ourrooms");
});
app.get("/contact",(req,res)=>{
   res.render("contact");
});
//meseege body
app.post("/message",async(req,res)=>{
   try{
      //res.send(req.body);
      const userData= new User(req.body);
      await userData.save();
      res.status(201).render("index");
   }
   catch(error){
      res.status(500).send(error);
   }
});



 // --server creating

 app.listen(port,()=>{
    console.log('my port number is ',port);
 });
