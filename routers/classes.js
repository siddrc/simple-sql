 const Router  = require("express").Router
 const { runQuery } = require("../database")
 const classesRouter = Router();
 const { validateSchoolIdMiddleware } = require("../middlewares/school_id_validation.middleware")


 // validation on school_id
 // it should be numeric
 // it should not be blank
 classesRouter.get("/school/:school_id", validateSchoolIdMiddleware , async(request,response)=>{
    let message = "", status = 0;
    try{
      const school_id = request.params.school_id;
      console.log(!isNaN(request.params.school_id))
      const result = await runQuery(`select * from public.classes where school_id=${school_id}`)
      message = result;
      status = 200;
    }catch(error){
      console.error(`ERROR in GET ${error.message}`)
      message = `ERROR- I could not get the classes`
      status = 500;
    } finally {
      response.status(status).send(message)
    }

 })



 module.exports = {
    classesRouter
 }