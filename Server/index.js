const express = require('express');
const cors = require('cors');

const app = express()

app.use(express.json())
app.use(cors())

const {enter, getFortune, getAnswer} = require('./controller')

app.get('/getFortune', getFortune)
app.get('/getAnswer', getAnswer)
app.post('/enter', enter)

app.listen(4000, () => console.log(`running on port 4000`))