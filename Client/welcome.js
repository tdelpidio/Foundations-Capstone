const enterBtn = document.getElementById('entryInput');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name')
const baseURL = `https://td-capstone.herokuapp.com`



form.addEventListener('submit', (e) => {
    e.preventDefault()

    axios.post(baseURL + '/enter', {name: nameInput.value, email: emailInput.value})
        .then(() => {
            console.log('new user added')
        })
        .catch(err => console.log('new user error', err))
})