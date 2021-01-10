let num = document.getElementById('txtadd')
let lista = document.getElementById('txtnum')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
}





/*let n = []
    n.push(num)
    var add = document.createElement('option')
    add.text = `Valor ${n} adicionado`
    add.value = `numeros${n}`
    numeros.appendChild(add)
    */