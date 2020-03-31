var express =require("express");
var app= express();
var request =require("request");

app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("search");
});

app.get("/results",function(req,res){
    var query=req.query.movie;
    var url="http://www.omdbapi.com/?apikey=8db69a7&s="+query;
    request(url,function(error,response,body){
        if(!error && response.statusCode==200){
            var data=JSON.parse(body);
            res.render("result",{results:data});
        }
    });
});

app.listen(3000,function(){
    console.log("server has started");
});
//www.omdbapi.com/?apikey=8db69a7&