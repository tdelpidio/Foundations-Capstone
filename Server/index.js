require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express();
const cors = require('cors');


app.use(express.json())
app.use(cors())

app.use(express.static('Client'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Client/welcome.html'))
})

app.get('/main', (req, res) => {
    res.sendFile(path.join(__dirname, '../Client/main.html'))
})

app.get('/mainjs', (req, res) => {
    res.sendFile(path.join(__dirname, '../Client/main.js'))
})

app.get('/welcomejs', (req, res) => {
    res.sendFile(path.join(__dirname, '../Client/welcome.js'))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../Client/style.css'))
})

const {enter, getFortune, getAnswer} = require('./controller')

app.get('/getFortune', getFortune)
app.get('/getAnswer', getAnswer)
app.post('/enter', enter)


const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})