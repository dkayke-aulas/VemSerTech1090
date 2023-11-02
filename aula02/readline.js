const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('questão: ', (resposta) => {
    console.log(typeof resposta)
    const number = Number(resposta)
    console.log(typeof number)
    rl.close()
})
