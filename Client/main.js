
const fortuneBtn = document.getElementById("get");
const resetBtn = document.getElementById("reset");
const askBtn = document.getElementById("ask");
const messageDiv = document.getElementById('message');
const questionDiv = document.getElementById('question');
const submitDiv = document.getElementById('submitBtn');
const greetingDiv = document.getElementById('greeting')
const userName = document.getElementById('name')
const baseURL = `https://td-capstone.herokuapp.com`
const axios = require('axios')


fortuneBtn.addEventListener("click", () => {
    console.log("fortune button hit")
    axios.get(baseURL + '/getFortune').then(res => {
        const messageElement = document.createElement('div')
        messageElement.innerHTML = `<p class="fortune">${res.data}</p>`
        messageDiv.appendChild(messageElement)
    })

}, {once : true});

resetBtn.addEventListener('click', () => {
    window.location.reload()
});

askBtn.addEventListener('click', () => {
    const textElement = document.createElement('div')
    textElement.innerHTML = "<input type='text' id='newInputBox' placeholder='type your question here'>";
    const submitBtn = document.createElement('div')
    submitBtn.innerHTML = "<input type='submit' id='submitBtn2'>";
    questionDiv.appendChild(textElement)
    submitDiv.appendChild(submitBtn)
    
    submitBtn.addEventListener('click', () => {
        axios.get(baseURL + '/getAnswer').then(res => {
            const messageElement = document.createElement('div')
            messageElement.innerHTML = `<p class="fortune">${res.data}</p>`
            messageDiv.appendChild(messageElement)
        })
    }, {once : true})

})