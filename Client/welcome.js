const enterBtn = document.getElementById('entryInput');
const emailInput = document.getElementById('email');
const baseURL = `http://localhost:5432/enter`

const userEnter = (body) => {
    axios.post('/enter', body)
    .then(res => {
        if (res.data.success) {
            console.log('hello')
        } else {
            console.log('Error with new user')
        }
    })
}

function submitEmail (event) {
    event.preventDefault()

    let body = {
        email: emailInput.value
    }

    emailInput.value = ""
    userEnter(body)
}

enterBtn.addEventListener('submit', submitEmail)
