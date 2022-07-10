const enterBtn = document.getElementById('enterBtn');
const emailInput = document.getElementById('email');
const baseURL = `http://localhost:4000`

let userEnter = (body) => {
    axios.post("http://localhost:4000/enter", body)
    .then(res=> {
        if (res.data.success) {
            console.log('New user added')
        } else {
            console.log('Error with new user')
        }
    })
}

function submitEmail (event) {
    console.log('we here?')
    event.preventDefault()
    let body = {
        email: emailInput.value
    }

    emailInput.value = ""
console.log('submit error')
    userEnter(body)
}

enterBtn.addEventListener('submit', submitEmail)
