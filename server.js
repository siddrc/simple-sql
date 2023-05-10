
require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000



const { schoolsRouter } = require("./routers/schools")

app.use(express.json());
app.use("/school" , schoolsRouter) //<- we are using a middleware 
app.listen(port) // there is a BAR TENDER
console.log(`Example app listening on port ${port}`)







