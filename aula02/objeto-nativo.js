const carroDannyel = {
    cor: 'vermelho',
    placa: 'hell-1234',
    quantidadePortas: 5,
    frear: () => console.log('freando...'),
    buzinar: () => console.log('fom fom...')
}

// const pitanga = 'cor'
// const melancia = carroDannyel[pitanga]

// const {placa: banana} = carroDannyel
// const banana = placa
// const placa = carroDannyel.placa

const carroAmanda = {...carroDannyel}
carroAmanda.placa = 'xablau-123'

// carroDannyel = {} // error
 
console.log(carroDannyel)