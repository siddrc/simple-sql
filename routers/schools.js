
const express = require("express")
const schoolsRouter = express.Router()
const { runQuery } = require("../database")

//GET /school all schools
schoolsRouter.get("/" , async (request,response)=>{
    let data = "", status = 0;
    try{
      data = await runQuery(`select * from school`) 
      status = 200;
    }catch(error){
      console.error(`ERROR in GET ${error.message}`)
      data = `ERROR- I could not get the schools`
      status = 500;
    } finally {
      response.status(status).send(data)
    }
});

//GET /school/:id - URL parameter get one school
schoolsRouter.get('/:id', async(request,response)=>{
    let message = "", status = 0;
    try{
      const id = request.params.id
      const result = await runQuery(`select * from school where id=${id}`)
      message = result;
      status = 200;
    }catch(error){
      console.error(`ERROR in GET ${error.message}`)
      message = `ERROR- I could not get the school`
      status = 500;
    } finally {
      response.status(status).send(message)
    }
})

//POST /school we are creating a school
schoolsRouter.post('/', async (request, response)=>{
    let message = "", status = 0;
    try{
      const data = request.body
      await runQuery(`
      insert into public.school(name,abbreviation)VALUES('${data.name}', '${data.abbreviation}' )`);
      message = `SUCCESS - I was able to create a school`
      status = 201;
    }catch(error){
      console.error(`ERROR in POST ${error.message}`)
      message = `ERROR- I could not create the school`
      status = 500;
    } finally {
      response.status(status).send(message)
    }
  })

//PUT /school/:id<- URL parameter
schoolsRouter.put('/:id' , async(request,response)=>{
    let message = "", status = 0;
    try{
      const id = request.params.id
      const data = request.body;
      await runQuery(`update public.school set name='${data.name}',abbreviation='${data.abbreviation}' where id=${id} `)
      message = `SUCCESS - I was able to update a school`
      status = 201;
    }catch(error){
      console.error(`ERROR in PUT ${error.message}`)
      message = `ERROR- I could not update the school`
      status = 500;
    } finally {
      response.status(status).send(message)
    }
  })
  
//DELETE /school/:id<- this will delete a student
schoolsRouter.delete('/:id', async(request,response)=>{
    let message = "", status = 0;
    try{
      const id = request.params.id
      await runQuery(`delete from school where id=${id}`)
      message = `SUCCESS - I was able to delete a school`
      status = 201;
    }catch(error){
      console.error(`ERROR in DELETE ${error.message}`)
      message = `ERROR- I could not update the school`
      status = 500;
    } finally {
      response.status(status).send(message)
    }
})


  module.exports = { 
    schoolsRouter
  }