import { Porta } from "../Porta"

class Casa {
    private portaPrincipal: Porta

    constructor(corPorta: string) {
        this.portaPrincipal = new Porta(corPorta)
    }

    entrarEmCasa (): void {
        this.portaPrincipal.abrir()
        console.log('Entrando em casa...')
    }
}

export { Casa }