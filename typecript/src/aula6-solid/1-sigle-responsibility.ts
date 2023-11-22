// Uma classe deve ter um, e apenas um, motivo para mudar.
// Isso significa que uma classe deve ter apenas um trabalho ou responsabilidade.

class Teclado {
    public digitar(): void {}
}

class Monitor {
  public ligarMonitor(): void {}

  public mostrarNoMonitor(): void {}
}

class Computador {

  constructor() {}

  public ligar(): void {}

  public desligar(): void {}
}