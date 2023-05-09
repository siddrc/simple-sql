/* this file will be responsible for :
 1. to connect to db --
 2. run any given query
*/
const { Client } = require('pg')

async function runQuery(query){
    let connection
    try{  
        connection = new Client({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
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