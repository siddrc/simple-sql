const testRouter = require("express").Router()


function middleWare1(req,res,next){
    console.log(`I am middleware 1`)
    next()
}
function middleWare2(req,res,next){
    console.log(`I am middleware 2`)
    next()
}
function middleWare3(req,res,next){
    console.log(`I am middleware 3`)
    next()
}
function middleWare4(req,res,next){
    console.log(`I am middleware 4`)
    next()
}

//GET
testRouter.get("/" , middleWare1 , middleWare2 , middleWare3, middleWare4 , (request,response)=>{

     response.send(`I am response from the quest handler`)

} )

module.exports = {
    testRouter
}