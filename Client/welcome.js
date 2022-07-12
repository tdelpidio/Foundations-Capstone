const enterBtn2 = document.getElementById('entryInput');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name')



enterBtn2.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('submit button working')
    axios.post('/enter', {name: nameInput.value, email: emailInput.value})
        .then(() => {
            console.log('new user added')
        })
        .catch(err => console.log('error adding new user', err))
})