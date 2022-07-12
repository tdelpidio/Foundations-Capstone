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


const {enter, getFortune, getAnswer} = require('./controller')

app.get('API/getFortune', getFortune)
app.get('API/getAnswer', getAnswer)
app.post('API/enter', enter)


const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})