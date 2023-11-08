import { Conta } from "../Conta";

class ContaEspecial extends Conta {
  private _limite: number;

  constructor(conta: number, limite: number, saldo: number = 0) {
    super(conta, saldo);
    this._limite = limite;
  }

  get limite() {
    return this._limite;
  }

  extrato() {
    return `
        ${super.extrato()}
        Limite: ${this._limite}
        Saldo + Limite: ${this._saldo + this._limite}
      `;
  }
}

export { ContaEspecial };
