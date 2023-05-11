require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const studentRoutes = require('./routes/students')
const driverRoutes = require('./routes/drivers')
const userRoutes = require('./routes/user')

// express app
const app = express()

const cors = require('cors')

// middleware
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/students', studentRoutes)
app.use('/api/drivers', driverRoutes)
app.use('/api/user', userRoutes)


// connect to db
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  })