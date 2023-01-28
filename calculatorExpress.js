const express = require('express')
const app = express();
app.use(express.urlencoded({ extended: true }))
const port = 3000


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")

})

app.post("/", (req, res) => {

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("sum is " + result)
})
app.listen(port, () => {
    console.log(`listening to port ${port}`)
})