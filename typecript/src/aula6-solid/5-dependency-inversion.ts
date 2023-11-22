// Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações. 
// As abstrações não devem depender de detalhes. Os detalhes devem depender de abstrações.


// class -> persistência
// class -> apresentar dados na tela
// class -> logicas

class Database {}

interface IDatabaseParaLogicas {
  //...
}

class Logicas {
  
  constructor(private database: IDatabaseParaLogicas) {
  }
}


