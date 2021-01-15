let n = 0
let res = document.getElementsByTagName('p')[0]
function calcular() {
  n++
  res.innerHTML = `O contador está com <mark>${n}</mark> cliques`
}

function zerar() {
  n = 0
  res.innerHTML = ''
}