const express = require('express')
require('dotenv').config()
const cors = require('cors')

<<<<<<< HEAD
const db = require('./database/mongooseConect')


const app = express()

app.use(express.joson())
app.use(cors())
db.connect()

module.exports = app
=======
const express = require('express')
require('dotenv').config()
const cors = require('cors')
const db = require('./database/mongooseConnect')
const musicRoutes = require('./routes/musicRoutes')

const app = express()

// configuracao
app.use(express.json())
app.use(cors())

// base de dados
db.connect()

// rotas
app.use(musicRoutes)

module.exports = app

>>>>>>> 39c12350c35b2ab19f68601962a22c5122a0b2ae
