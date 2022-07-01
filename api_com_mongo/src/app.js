const express = require('express')
require('dotenv').config()
const cors = require('cors')

const db = require('./database/mongooseConect')


const app = express()

app.use(express.joson())
app.use(cors())
db.connect()

module.exports = app
