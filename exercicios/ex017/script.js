let res = document.getElementById('resultado')

function gerar() {
  let n = Math.floor(Math.random() * 100)
  res.innerHTML += `<p>Acabei de pensar no número <mark>${n}</mark>!</p>`
}

function limpar() {
  res.innerHTML = ``
}