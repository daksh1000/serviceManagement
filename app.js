
const express = require("express");
const app = express();
const admin = express();

var requestTime = function (req, res, next)
{
req.requestTime = Date.now()
next()
}
app.use(express.json());

app.all("/admin", (req, res, next) =>{
    console.log(req.method + "called");
    next()
})
app.get ("/", function (req, res) {
    res.send("hello everyone")
})

admin.post("/", function(req, res) {
    let c  = req.body.a + req.body.b;
    console.log(req.body);
    res.send("Total is : "+ c);
})

app.use("/admin", admin)

app.listen(3000, ()=>{
    console.log("app started on port 3000")
})