module.exports = {
    enter: (req, res) => {
        const {name, email} = req.body
        let newUserEntry = {}
        newUserEntry.name = name
        newUserEntry.email = email
        console.log('New user added')
        userDatabase.push(newUserEntry)
        res.status(200).send({success: true})
    },

    getFortune: (req, res) => {
        console.log('server get fortune hit')
        for(i = 0; i = fortunes.length; i++)
        res.status(200).send(fortunes[Math.floor(Math.random()*fortunes.length)])
    },

    getAnswer: (req, res) => {
        res.status(200).send(answers[Math.floor(Math.random()* answers.length)])
    }
};

const userDatabase = [
    {
        name: 'John',
        email: 'john@gmail.com'
    },
    {
        name: 'Joe',
        email: 'joe@yahoo.com'
    },
]

const fortunes = [
    'You will soon find love.',
    'Someone you love will betray you.',
    'Soon you will take a big risk and it will pay off.',
    'You will soon come into a large sum of money.',
    'A job promotion is in your future.',
    'Be careful who you trust.',
    'Do something today that your future will thank you for.',
    'You only live once, but if you do it right, once is enough.',
    'Nobody ever got anywhere by standing still.',
    "Fear will always be a thing, but don't let it get in your way.",
    "One bad chapter doesn't mean your story is over.",
    "It is never too late to be what you might have been.",
    "A faithful friend is a strong defense.",
    "A lifetime of happiness lies ahead of you.",
    "A pleasant surprise is waiting for you.",
    "Accept something that you cannot change, and you will feel better.",
    "All the effort you are making will ultimately pay off.",
    "All will go well with your new project.",
    "Allow compassion to guide your decisions.",
    "An acquaintance of the past will affect you in the near future.",
    "An important person will offer you support.",
    "Be careful of the decisions you make today.",
    "Follow the middle path. Neither extreme will make you happy.",
    "From now on your kindness will lead you to success.",
    "Go take a rest; you deserve it.",
    "Welcome change.",
    "You are soon going to change your present line of work.",
    "You will be traveling and coming into a fortune soon.",
    "You will enjoy good health.",
    "You will inherit a large sum of money.",
    "You will make a change for the better.",
    "You will soon be surrounded by good friends and laughter.",
    "You will take a chance on something in the near future.",
    "Your hard work will payoff today.",
    "Now is the time to try something new."
]

const answers = [
    "It is certain.",
    "Without a doubt.",
    "Yes.",
    "Definitely.",
    "Most likely.",
    "I'm seeing yes.",
    "Ask again later.",
    "You don't want to know.",
    "Hm, not sure. Ask again later.",
    "I don't think I should answer.",
    "Unable to predict that right now.",
    "Wait, what? Ask again.",
    "No.",
    "Doubtful.",
    "Don't count on it.",
    "I'm seeing no",
    "Not looking good."
]