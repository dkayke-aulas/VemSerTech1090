class Porta {
    public cor: string
    
    constructor(cor: string) {
        this.cor = cor
    }

    abrir(): void {
        console.log('abrindo porta...')
    }

    fechar(): void {
        console.log('fechando porta...')
    }
}

export { Porta }