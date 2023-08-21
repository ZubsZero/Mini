require("dotenv").config();
const { createPool } = require("mysql");
const connection = createPool({
    host: process.env.dbHost,
    database: process.env.dbName,
    user: process.env.dbUser,
    port: process.env.dbPort,
    password: process.env.dbPwd,    
    multipleStatements: true,
    connectionLimit: 30
})

connection.connect((err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Database connected')
})

module.exports = connection
