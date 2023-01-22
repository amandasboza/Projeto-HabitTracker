
const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)

// NLW Setup é uma biblioteca da Rocketseat para treinamento

/* const data = {
    run: ['01-01', '01-02', '01-06'], 
    book: ['01-03', '01-06'],
    water: ['01-05', '01-06'],
    gym: ['01-07'],
    food: ['01-01', '01-02', '01-03'],
}

nlwSetup.setData(data)
nlwSetup.load() */

const button = document.querySelector('header button')
button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
    const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

    if(dayExists) {
        alert("You already add this day 🚫")
        return
    }

    alert("Successfully added ✅")
    nlwSetup.addDay(today)
}

function save() {
    window.localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()