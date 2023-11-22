const buttonAdicionar = document.querySelector('#add')
const buttonEditar = document.querySelector('#edit')
const inputTexto = document.querySelector('#txt')
const inputIndice = document.querySelector('#indice')

class Postagem {
    data
    dataEdicao
    editado
    texto 

    constructor(texto) {
        this.data = new Date()
        this.dataEdicao = null
        this.editado = false
        this.texto = texto
    }

    editar(novoTexto) {
        this.texto = novoTexto
        this.editado = true
        this.dataEdicao = new Date()
    }
}

const localStoragePostagens = localStorage.getItem('postagem') ?? '[]'
const postagens = JSON.parse(localStoragePostagens)

const callbackAdicionar = () => {
    const postagem = new Postagem(inputTexto.value)
    postagens.push(postagem)
    localStorage.setItem('postagem', JSON.stringify(postagens))
    inputTexto.value = ''
}

const callbackEditar = () => {
    const postagem = postagens[inputIndice.value]
    postagem.editar(inputTexto.value)
    localStorage.setItem('postagem', JSON.stringify(postagens))
}

buttonAdicionar.addEventListener('click', callbackAdicionar)
buttonEditar.addEventListener('click', callbackEditar)
