import { Docente } from "../Docente"

class Professor extends Docente {
    private _salario: number

    constructor(nome: string, email: string, dataNascimento: Date, salarioHora: number) {
        super()
        this.nome = nome
        this.email = email
        this.dataNascimento = dataNascimento
    }

    get salario () {
        return this._salario
    }

    lecionar(): string {
        return ''
    }

    falar() {
        console.log('falando programação...')
    }
}

export { Professor }