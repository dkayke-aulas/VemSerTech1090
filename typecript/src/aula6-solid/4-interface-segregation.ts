// Nenhum cliente deve ser forçado a depender de métodos que não utiliza. 
// É melhor ter muitas interfaces menores e específicas do que uma interface grande e de uso geral.


interface OperacoesDoUsuario {
  login: () => void
  logout: () => void

  cadastro(): void

  movimentar(): void
  pular: () => void
  correr: () => void

  trabalhar: () => void

  cadastrarAtividadesParaOutrosUsuarios: () => void
}

interface OperacoesDeAcessoDoUsuario {
  login: () => void
  logout: () => void
}

interface OperacoesDeMovimentacaoDoUsuario {
  movimentar(): void
  pular: () => void
  correr: () => void
}