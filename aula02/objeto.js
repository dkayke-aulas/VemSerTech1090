class Carro {
    // modificador de acesso public (+)
    cor
    // modificador de acesso private (-)
    #placa
    quantidadePortas

    constructor(placa) {
        this.#placa = placa
    }

    // metodos acessores
    // getters e setters

    get placa() {
        return this.#placa
    }
    
    // getPlaca() {
    //     return this.#placa
    // }

    set placa(novaPlaca) {
        this.#placa = novaPlaca
    }

    frear() {
        console.log('frear...', this.#placa)
    }
    
    buzinar() {
        console.log('fom fom...')
    }
}
// criando um objeto = instanciando o objeto
const carro1 = new Carro('hell-1234')
const carro2 = new Carro('xablau-123')

carro1.placa = 'banana'
console.log(carro1.placa)
// console.log(carro1.getPlaca())

console.log(carro1)
console.log(carro2)


// UML
// SUGGAR SINTAXY
// CALL STACK