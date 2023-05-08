
const express = require("express")
const studentRouter = express.Router()
const { runQuery } = require("../database")

//GET /student all students
studentRouter.get("/" , async (request,response)=>{
    let data = "", status = 0;
    try{
      data = await runQuery(`select * from student`) 
      status = 200;
    }catch(error){
      console.error(`ERROR in POST ${error.message}`)
      data = `ERROR- I could not update the student`
      status = 500;
    } finally {
      response.status(status).send(data)
    }
});

//GET /student/:id - URL parameter get one stuent
studentRouter.get('/:id', async(req,res)=>{
    let message = "", status = 0;
    try{
      const id = request.params.id
      await runQuery(`select * from student where id=${id}`)
      message = `SUCCESS - I was able to update a student`
      status = 201;
    }catch(error){
      console.error(`ERROR in POST ${error.message}`)
      message = `ERROR- I could not update the student`
      status = 500;
    } finally {
      response.status(status).send(message)
    }
})

//POST /student we are creating a student
studentRouter.post('/', async (request, response)=>{
    let message = "", status = 0;
    try{
      const data = request.body
      await runQuery(`
      insert into public.student(name,email_address)VALUES('${data.name}', '${data.email}' )`);
      message = `SUCCESS - I was able to create a student`
      status = 201;
    }catch(error){
      console.error(`ERROR in POST ${error.message}`)
      message = `ERROR- I could not create the student`
      status = 500;
    } finally {
      response.status(status).send(message)
    }
  })

//PUT /student/:id<- URL parameter
studentRouter.put('/student/:id' , async(request,response)=>{
    let message = "", status = 0;
    try{
      const id = request.params.id
      await runQuery(`update public.student set name='${data.name}',email_address='${data.email}' where id=${id} `)
      message = `SUCCESS - I was able to update a student`
      status = 201;
    }catch(error){
      console.error(`ERROR in POST ${error.message}`)
      message = `ERROR- I could not update the student`
      status = 500;
    } finally {
      response.status(status).send(message)
    }
  })
  
//DELETE /student/:id<- this will delete a student
studentRouter.delete('/:id', async(request,response)=>{
    let message = "", status = 0;
    try{
      const id = request.params.id
      await runQuery(`delete from student where id=${id}`)
      message = `SUCCESS - I was able to update a student`
      status = 201;
    }catch(error){
      console.error(`ERROR in POST ${error.message}`)
      message = `ERROR- I could not update the student`
      status = 500;
    } finally {
      response.status(status).send(message)
    }
})


  module.exports = { 
    studentRouter
  }