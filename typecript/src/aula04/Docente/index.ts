import { Pessoa } from "../Pessoa";

abstract class Docente extends Pessoa {
  abstract lecionar(): string;
}

export { Docente };

// alto acoplamento