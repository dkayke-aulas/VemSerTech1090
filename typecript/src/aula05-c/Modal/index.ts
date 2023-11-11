class Modal {
  private static instance: Modal;
  public nome: string;
  public estaAberto: boolean = false;

  // private constructor() {}

  public static getInstance(): Modal {
    if (!Modal.instance) {
      Modal.instance = new Modal();
    }

    return Modal.instance;
  }

  abrir(str: string) {
    if (!this.estaAberto) {
      console.log("abrindo modal...", this.nome, str);
    }
    this.estaAberto = true;
  }

  fechar(str: string) {
    this.estaAberto = false;
    setInterval(() => {
      console.log("fechando modal...", str);
    }, 2000);
  }
}

export { Modal };
