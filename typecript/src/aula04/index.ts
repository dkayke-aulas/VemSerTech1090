import { Aluno } from "./Aluno";
import { Materia } from "./Materia";
import { Professor } from "./Professor";

const Aula04 = () => {
  const aluno1 = new Aluno();
  const aluno2 = new Aluno();
  const aluno3 = new Aluno();

  const professor = new Professor(
    'Linguiça',
    'prof.linguica@ada.com',
    new Date('1980-01-04'),
    230
  )

  const materia = new Materia('POO01', 'Programação Orientada a Objetos', professor)
  const materia2 = new Materia('ESD01', 'Estrutura de Dados', professor)

  console.log(materia.professor.nome)

  console.log(aluno1);
  console.log(professor.falar());
};

export { Aula04 };


// RELACIONAMENTOS

// Associações - determinam que uma classe está conectada a outra de alguma forma
// - Agregação - é a relação onde uma classe "TEM UMA" outra classe
// - Composição - 