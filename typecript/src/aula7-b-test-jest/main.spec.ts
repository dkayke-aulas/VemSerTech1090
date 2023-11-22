import { operacoes, valorFinal } from './main'

describe('suite de teste', () => {
  test('a funcao soma deve retornar o valor correto', () => {
    const resultado = operacoes.soma(5, 5)

    expect(resultado).toBe(10)
  })

  test('a funcao valorFinal deve retornar o valor correto', () => {
    // a
    jest.spyOn(operacoes, 'soma').mockImplementation((a, b) => a + b)
    
    // a
    const resultado = valorFinal(1 , 2, 3)

    // a
    expect(resultado).toBe(3)
    expect(operacoes.soma).toHaveBeenCalledTimes(1)
    expect(operacoes.soma).toHaveBeenCalledWith(1, 2)
  })
})