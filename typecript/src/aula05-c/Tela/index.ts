import { Modal } from "../Modal"

const tela1 = () => {
    const modal = Modal.getInstance()
    modal.nome = 'Banana'
    const modal1 = new Modal()
    modal1.nome = "Maçã"
    modal.nome = 'Banana'

    modal.abrir('modal 1')
    modal.abrir('modal 1')
    modal.abrir('modal 1')
    modal.abrir('modal 1')
    modal1.abrir('modal1 1')
    modal1.abrir('modal1 1')
    modal1.abrir('modal1 1')
    modal1.abrir('modal 1')
}

const tela2 = () => {
    const modal = Modal.getInstance()
    modal.abrir('modal 2')
    modal.abrir('modal 2')
    modal.abrir('modal 2')
    modal.abrir('modal 2')
}

export { tela1, tela2 }