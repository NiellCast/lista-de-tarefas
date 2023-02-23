const lista = document.querySelector("#lista-de-tarefas")
const botaoAdicionar = document.querySelector("#btn-add")
const tarefa = document.querySelector("#ntarefa")


function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
}


function adicionarItens() {
    let div = document.createElement('div')
    let item = document.createElement('li')
    let separador = document.createElement('hr')

    div.classList.add('item-container')
    lista.appendChild(div)

    div.appendChild(item)
    item.classList.add('item')

    item.innerHTML = capitalize(tarefa.value)

    div.appendChild(separador)

    div.addEventListener('click', () => {
        div.classList.toggle('selecionado')
    })
}


botaoAdicionar.addEventListener('click', () => {
    if (tarefa.value.length > 0) {
        adicionarItens()
        tarefa.value = ''
    }
})
