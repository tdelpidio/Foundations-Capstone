const Sequelize = require('sequelize')

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


const userEnter = (body) => {
    axios.post('https://td-capstone.herokuapp.com/enter', body)
    .then(res => {
        if (res.data.success) {
        } else {
            console.log('Error with new user')
        }
    })
}

function submitHandler(event) {
    event.preventDefault()

    let body = {
        name: nameInput.value,
        email: emailInput.value
    }

    nameInput.value = ""
    emailInput.value = ""

    userEnter(body)
}

enterBtn.addEventListener('submit', submitHandler)

// enterBtn.addEventListener('submit', (e) => {
//     e.preventDefault()

//     let name = nameInput.value
//     let email = emailInput.value

//     axios.post('https://td-capstone.herokuapp.com/enter', {name: name, email: email})
//     .then(() => {
//         console.log('working')
//     })

// })