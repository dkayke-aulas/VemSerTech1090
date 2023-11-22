import { tela1, tela2 } from "./Tela";

class Banana {

}

interface Contrato1 {
  dataDeInicio: Date
}

interface Contrato2 {
  nadar(banana: string, melancia: number): void
}

class AtorGlobal implements Contrato2 {
  nadar(): void {
  }
  // dataDeInicio: Date
}

const atorGlobal = new AtorGlobal()
atorGlobal.nadar()

const Aula05 = () => {
  // tela1();
  // tela2();
};

export { Aula05 };
