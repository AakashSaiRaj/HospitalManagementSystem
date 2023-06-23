const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set("view engine", "ejs");
const PORT=process.env.PORT || 3000;

app.get("/", function(req, res){
    res.render("home");
});

app.listen(PORT, function(){
    console.log(`App is listening to ${PORT}`);
});