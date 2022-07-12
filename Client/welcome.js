const enterBtn = document.getElementById('entryInput');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name')


const userEnter = (body) => {
    axios.post('/enter', body)
    .then(res => {
        if (res.data.success){
            console.log('new user added')
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


