require('dotenv').config()
const express = require('express');
const path = require('path');
const cors = require('cors');
const {SERVER_PORT} = process.env || 5432;

const app = express()

app.use(express.json())
app.use(cors())


app.get('/', (reg,res) => {
    res.sendFile(path.join(__dirname, '../client/welcome.html'))
})

// app.get('/', (reg,res) => {
//     res.sendFile(path.join(__dirname, '../main.html'))
// })

app.get('/css', (reg,res) => {
    res.sendFile(path.join(__dirname, '../client/style.css'))
})

app.get('/welcomejs', (reg,res) => {
    res.sendFile(path.join(__dirname, '../client/welcome.js'))
})

// app.get('/mainjs', (reg,res) => {
//     res.sendFile(path.join(__dirname, '../client/main.js'))
// })

const {seed} = require('./seed')
const {enter, getFortune, getAnswer} = require('./controller')

app.post('/seed', seed)

app.get('/getFortune', getFortune)
app.get('/getAnswer', getAnswer)
app.post('/enter', enter)

app.listen(SERVER_PORT, () => {
    console.log(`running on ${SERVER_PORT}`)
})