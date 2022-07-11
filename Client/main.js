
const fortuneBtn = document.getElementById("get");
const resetBtn = document.getElementById("reset");
const askBtn = document.getElementById("ask");
const messageDiv = document.querySelector('#message');
const questionDiv = document.querySelector('#question');
const submitDiv = document.querySelector('#submitBtn');

const baseURL = `http://localhost:5432`


fortuneBtn.addEventListener("click", () => {
    axios.get('http://localhost:5432/getFortune').then(res => {
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
        axios.get('http://localhost:5432/getAnswer').then(res => {
            const messageElement = document.createElement('div')
            messageElement.innerHTML = `<p class="fortune">${res.data}</p>`
            messageDiv.appendChild(messageElement)
        })
    }, {once : true})

})