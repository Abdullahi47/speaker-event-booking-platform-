const express = require("express")

const mongoose = require("mongoose")

const app = express()


app.use( express.json())

const imagerouter = require("./model/router/organizationrouter")

app.use("/allImages" , express.static("images"))
app.use("/image" ,imagerouter)

mongoose.connect("mongodb://localhost:27017/Hackathon").then(() =>{
    console.log("connnected")
}).catch((err) =>{
    console.Console(err)
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
