const db = require('./database')
const express = require('express')



const app = express()

const cors = require("cors")
app.use(cors())

app.use (express.json())

const opcaoDePratosRouter = require('./routes/OpcaoDePratos')
app.use('/opcaoDePrato', opcaoDePratosRouter)
app.listen(5000)