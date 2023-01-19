
const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)

// NLW Setup é uma biblioteca da Rocketseat para treinamento

const data = {
    run: ['01-01', '01-02', '01-06'], 
    book: ['01-03', '01-06'],
    water: ['01-05', '01-06'],
    gym: ['01-07'],
    food: ['01-01', '01-02', '01-03'],
}

nlwSetup.setData(data)
nlwSetup.load()

