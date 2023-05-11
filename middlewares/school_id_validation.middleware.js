
const validateSchoolIdMiddleware = (request,response,next)=>{
    let status , message;
    const school_id = request.params.school_id;
    console.log(`Hey I am in a middleware`)
    if(!school_id){
      status = 400 
      message = `You need to provide school_id yo!`
      console.log(`Hey I am going back coz data was wrong`)
      response.status(status).send(message)
    }
    else if(isNaN(school_id)){
      status= 400
      message = `School id needs to be a number.. wtf man`
      console.log(`Hey I am going back coz data was wrong`)
      response.status(status).send(message)
    }else{
        console.log(`Hey I am moving on ahead`)
        next()
    }
}

module.exports = {
    validateSchoolIdMiddleware
}