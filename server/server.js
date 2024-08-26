const express = require('express')
require('dotenv').config()
const dbConnect = require('./config/dbconnect')
const initRoutes = require('./routes')


const app = express()
const port = process.env.PORT || 8888
dbConnect();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
initRoutes(app)

app.listen(port, () => {
    console.log("Server running on the port:", port)
})

