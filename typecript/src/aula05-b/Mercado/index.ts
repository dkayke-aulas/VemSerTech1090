import { BancoDados } from "../BancoDados";
import { MySQL } from "../MySQL";
import { SQLServer } from "../SQLServer";

class Mercado {
  private bd: BancoDados;

  constructor() {
    console.log("***** MERCADO SYSTEM *****");
    const driver = new SQLServer();
    this.bd = new BancoDados(driver);
  }

  entrarNoSistema(): void {
    const usuario = "banana";
    const senha = "1234banana5";
    this.bd.validarUsuario(usuario, senha);
  }
}

export { Mercado };
