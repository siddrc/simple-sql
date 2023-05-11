
require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000



const { schoolsRouter } = require("./routers/schools")
const { classesRouter } = require("./routers/classes")
const { testRouter } = require("./routers/testRouter")

app.use(express.json());
app.use("/school" , schoolsRouter) //<- we are using a middleware 
app.use("/classes" , classesRouter) //<- we are using a middleware 

app.use("/test-middlewares" , testRouter)

app.listen(port) // there is a BAR TENDER
console.log(`Example app listening on port ${port}`)
//http://localhost:3000/school/2/classes






