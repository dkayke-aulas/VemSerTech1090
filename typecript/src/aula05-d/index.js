const button = document.querySelector('button')
const input = document.querySelector('#banana')

const callback = () => {
    console.log('clicou', input.value)
}

button.addEventListener('click', callback)