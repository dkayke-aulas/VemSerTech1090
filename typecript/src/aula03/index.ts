import { Conta } from "./Conta";
import { ContaEspecial } from "./ContaEspecial";

const Aula03 = () => {
  let numeroConta = 0;

  const conta = new Conta(++numeroConta, 2000);
  console.log(conta.extrato());

  console.log("pula linha", "\n");

  const contaEspecial = new ContaEspecial(++numeroConta, 1000, 2000);
  console.log(contaEspecial.extrato());
};

export { Aula03 };
