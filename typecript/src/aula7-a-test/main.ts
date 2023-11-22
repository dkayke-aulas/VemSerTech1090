import { test, describe, todo, skip, before, beforeEach } from 'node:test'
import * as assert from 'node:assert'

function divisao(a: number, b: number, options?: any): number {
  //
  return a / b
}

describe('tests da funcao soma', () => {
  beforeEach(() => {
    console.log('beforeEach')
  })

  before(() => {
    console.log('before')
  })

  test('a funcao divisao deveria retornar o devido valor da divisao de dois numeros', t => {
    const resultado = divisao(5, 5)

    assert.equal(resultado, 1)
  })

  skip('esse teste aqui vai falhar')

  todo('deveria ser validado o tipo do atributo options para ser um objeto valido')
})