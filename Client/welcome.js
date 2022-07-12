const Sequelize = require('sequelize')
require('dotenv').config()
const {CONNECTION_STRING} = process.env

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

const enterBtn = document.getElementById('entryInput');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name')


// const userEnter = (body) => {
//     axios.post('https://td-capstone.herokuapp.com/enter', body)
//     .then(res => {
//         if (res.data.success) {
//         } else {
//             console.log('Error with new user')
//         }
//     })
// }

// function submitHandler(event) {
//     event.preventDefault()

//     let body = {
//         name: nameInput.value,
//         email: emailInput.value
//     }

//     nameInput.value = ""
//     emailInput.value = ""

//     userEnter(body)
// }

// enterBtn.addEventListener('submit', submitHandler)


let body = {
    name: nameInput.value,
    email: emailInput.value
}

nameInput.value = ""
emailInput.value = ""

enterBtn.addEventListener('submit', (e) => {
    e.preventDefault()

    let body = {
        name: nameInput.value,
        email: emailInput.value
    }
    
    nameInput.value = ""
    emailInput.value = ""

    axios.post('https://td-capstone.herokuapp.com/enter', body)
    .then(() => {
        console.log('working')
    })

})