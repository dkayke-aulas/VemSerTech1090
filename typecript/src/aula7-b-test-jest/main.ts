
export const operacoes = {
  soma : (a: number, b: number): number => {
   return a + b
  }
}

export function valorFinal(a: number, b: number, c: number): number {
  if(c > a) {
    return operacoes.soma(a, b)
  }

  if (c > b) {
    return operacoes.soma(b, c)
  }

  return operacoes.soma(a, c)
}

