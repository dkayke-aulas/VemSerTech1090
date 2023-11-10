import { Docente } from "../Docente";
import { Pessoa } from "../Pessoa";

class Materia {
  public codigo: string;
  public nome: string;
  public professor: Docente;

  constructor(codigo: string, nome: string, professor?: Docente) {
    this.codigo = codigo;
    this.nome = nome;
    this.professor = professor;
  }

  aula() {
    this.professor.lecionar()
  }
}

export { Materia };
