// Entidades de software devem estar abertas para extensão, mas fechadas para modificação.

class Desconto {
  public calcular(valorTotal: number): number {
    return valorTotal - 2
  }
}

class DescontoDePrimavera {
  public calcular(valorTotal: number): number {
    return valorTotal - 10
  }
}

class Caixa {
  private valor: number;

  constructor(private desconto: Desconto) {
  }

  public valorDaCompra(): number {
    return this.desconto.calcular(this.valor)
  }
}


const desconto = new DescontoDePrimavera()
const caixa = new Caixa(desconto)
console.log(caixa.valorDaCompra())