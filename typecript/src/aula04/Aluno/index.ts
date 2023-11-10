import { Pessoa } from "../Pessoa"

class Aluno extends Pessoa {
    private static _proximaMatricula = 1
    public matricula: number

    constructor() {
        super()
        this.matricula = Aluno._proximaMatricula++
    }

    static get proximaMatricula () {
        return Aluno._proximaMatricula
    }
}

export { Aluno }