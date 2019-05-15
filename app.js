const express = require("express");
const bodyParser = require("body-parser")
const date = require(__dirname + "/date.js")
const app = express();


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var workItems=[];
var items = [];


app.get("/", function(req, res) {

// let day = date.getDate();
let day = date.getDay();
         //we are exporting 2 functions from date.js module self created. one is getDate which gives the date, the other is getDay.If we want to specift which function we can tap into it by changing this line to date.getDate() and date.getDay().
  res.render("lists", {
    listTitle: day,
    addItem : items
});

app.get("/work",function(req,res){

  res.render("lists", {listTitle :  "Work", addItem : workItems })
})

});

app.get("/about", function(req,res){
  res.render("about");
})


app.post("/",function(req, res){
  console.log(req.body)
  let item = req.body.todo;
  let wItems = req.body.todo;


  if (req.body.list == "Work"){
    workItems.push(wItems);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }


});

app.post("/work", function(req,res){
  let item = req.body.newItem;
  workItems = push(item);
  res.redirect("/work");
})

app.listen(3000, function() {
  console.log("server is set at 3000");
});
