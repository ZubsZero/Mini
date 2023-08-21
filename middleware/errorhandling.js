const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

// load the cookie-parsing through the middleware
app.use(cookieParser())

//===================================================

app.get('/', (req, res) => {
    throw new Error('BROKEN') // Express will catch this on its own.
  })

  app.get('/', (req, res, next) => {
    fs.readFile('/file-does-not-exist', (err, data) => {
      if (err) {
        next(err) // Pass errors to Express.
      } else {
        res.send(data)
      }
    })
  })

  app.get('/user/:id', async (req, res, next) => {
    const user = await getUserById(req.params.id)
    res.send(user)
  })

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })