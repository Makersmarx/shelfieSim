require('dotenv').config()
const express = require('express')

// Massive
const massive = require('massive')

const app = express()

//controller
const controller = require('./controller')

// Port being used
const port = 8000

// Destructing vars from .env to use in index.js
const {
  SERVER_PORT,
  CONNECTION_STRING
} = process.env

// Using massive to connect to db
massive({
    connectionString: CONNECTION_STRING,
    ssl: {
      rejectUnauthorized: false
    }
  })
  .then(db => {
    app.set('db', db)
    console.log('db connected')
  })
  .catch((err) => console.log(err))





app.use(express.json())

// Endpoints
app.get('/api/inventory', controller.read)




app.listen(port, () => console.log(`We hear you at Port: ${port}`))