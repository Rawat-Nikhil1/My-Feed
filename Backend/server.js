require("dotenv").config()  //.env kr andar ki values iss like ko likhne ke baad hi use kr skte h
const app = require("./src/app")
const connectDB = require("./src/db/db")

connectDB()


app.listen(3000, ()=>{
    console.log("Server running on port 3000");
}) 

