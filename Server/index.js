require('dotenv').config()
const express = require('express');
const cors = require('cors');
const {SERVER_PORT} = process.env;

const app = express()

app.use(express.json())
app.use(cors())

const {seed} = require('./seed')
const {enter, getFortune, getAnswer} = require('./controller')

app.post('/seed', seed)

app.get('/getFortune', getFortune)
app.get('/getAnswer', getAnswer)
app.post('/enter', enter)

app.listen(SERVER_PORT, () => console.log(`running on ${SERVER_PORT}`))