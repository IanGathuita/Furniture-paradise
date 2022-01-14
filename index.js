var express = require('express');
const app = express();
const navigation_routes = require("./Routes/Navigation routes");

app.use(express.static("./public"));
app.set("views","Views");
app.set("view engine","ejs");


app.get("/",(req,res)=>{
    res.render("home");
});
app.use(navigation_routes);
app.listen(4000,()=>{
    console.log("Listening for requests on port 4000...")
});
