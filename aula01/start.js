const readline = require('readline')

// objeto rl
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function calcular(opcao) {
    // if (opcao !== '1'
    //     || opcao !== '2'
    //     || opcao !== '3'
    //     || opcao !== '4'
    //     || opcao !== '0'
    // ) {
    //     console.log('Essa opção é inválida, escolhe direito aê!')
    //     start()
    // }

    rl.question('digite o valor de A: ', (valorA) => {
        rl.question('digite o valor de B: ', (valorB) => {
            let resultado

            switch (opcao) {
                case '1':
                    resultado = soma(valorA, valorB)
                    console.log(`A soma resultou em ${resultado}`)
                    break
                case '2':
                    resultado = subtracao(valorA, valorB)
                    console.log(`A subtração resultou em ${resultado}`)
                    break
                case '3':
                    resultado = divisao(valorA, valorB)
                    console.log(`A divisão resultou em ${resultado}`)
                    break
                case '4':
                    resultado = multiplicacao(valorA, valorB)
                    console.log(`A multiplicação resultou em ${resultado}`)
                    break
                case '0':
                    console.log('Até mais!')
                    break
                default:
                    console.log('Essa opção é inválida, escolhe direito aê!')
                    break
            }

            if (opcao !== '0') {
                start()
            }
            else {
                rl.close()
            }
        })
    })
}

function start() {
    console.log('\n***** CALCULADORA SUPIMPA ******\n')
    console.log('1 - Soma')
    console.log('2 - Subtração')
    console.log('3 - Divisão')
    console.log('4 - Multiplicação')
    console.log('0 - Sair')
    rl.question('Selecione uma opção:', calcular)
}

start()

function soma(valorA, valorB) {
    return valorA + valorB
}

function subtracao(valorA, valorB) {
    return valorA - valorB
}

function divisao(valorA, valorB) {
    return valorA / valorB
}

function multiplicacao(valorA, valorB) {
    return valorA * valorB
}