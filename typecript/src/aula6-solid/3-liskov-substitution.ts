// As classes derivadas devem ser substituíveis por suas classes base. 
// Este princípio está intimamente relacionado à herança em OOP.

class Figura {
  public obterArea(): number {
    return 0
  }
}

class Quadrado extends Figura {
  private base: number
  private altura: number

  public obterArea(): number {
    return this.base * this.altura
  }
}

