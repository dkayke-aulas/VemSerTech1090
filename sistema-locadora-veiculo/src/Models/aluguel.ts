import { Cliente } from "./cliente";
import { Veiculo } from "./veiculo";

class Aluguel {
  public dataInicio: Date;
  public dataFim: Date | null;
  public valorHoraContratado: number;

  constructor(
    public cliente: Cliente,
    public veiculo: Veiculo,
    public dataEntregaPrevista: Date
  ) {
    this.valorHoraContratado = this.veiculo.valorHora
  }

  public calcularValorFinal(): number {
    return 10;
  }
}

export { Aluguel };
