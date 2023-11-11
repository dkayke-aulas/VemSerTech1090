import { MySQL } from "../MySQL";
import { SQLServer } from "../SQLServer";

class BancoDados {
    private bd: MySQL | SQLServer

    constructor(driver: MySQL | SQLServer) {
        this.bd = driver
    }

    validarUsuario(usuario: string, senha: string): boolean {
        if(this.bd instanceof MySQL) {
            console.log('validação MySQL')
            return true
        }
        
        if(this.bd instanceof SQLServer) {
            console.log('validação SQLServer')
            return true
        }
        
        return false
    }
}

export { BancoDados }