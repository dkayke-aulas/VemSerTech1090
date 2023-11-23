import { Cliente } from "./cliente";

class Veiculo {
  public listaEspera: Cliente[];

  constructor(
    public placa: string,
    public alugado: boolean,
    public valorHora: number
  ) {}

  incluirEmEspera(cliente: Cliente): void {
    const exists = this.listaEspera.some((clienteEmEspera) => {
      return clienteEmEspera.cpf === cliente.cpf;
    });

    if (!exists) {
      this.listaEspera.push(cliente);
    }
  }
}

export { Veiculo };
