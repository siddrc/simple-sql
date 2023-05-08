/* this file will be responsible for :
 1. to connect to db --
 2. run any given query
*/
const { Client } = require('pg')
async function runQuery(query){
    let connection
    try{  
        connection = new Client({
            host: 'dpg-chcisi3hp8u01614m070-a.frankfurt-postgres.render.com',
            port: 5432,
            database: 'hellodb_0y7l',
            user: 'siddharth',
            password: 'RNDV2kPbh2b51CX4vu4h2l1e1ZtlEziB',
            ssl: { rejectUnauthorized: false }
          })
         await connection.connect()
         return await connection.query(query)
    }catch(error){
        console.error(`[ERROR in runQuery] ${error.message}`)
        throw error
    } finally {
        connection.end()
    }
}

module.exports = {
    runQuery
}