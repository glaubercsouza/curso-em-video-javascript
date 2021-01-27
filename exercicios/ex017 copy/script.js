let n = Math.round(Math.random() * 100)
let res = document.getElementById('resultado')


function adivinhar() {
  let adv = window.prompt(`Qual é o seu palpite?`)

  if (adv > n) {
    res.innerHTML += `<p>Você falou ${adv}. Meu número é <strong>MENOR</strong></p>`
  } else if (n > adv){
    res.innerHTML += `<p>Você falou ${adv}. Meu número é <strong>MAIOR</strong></p>`
  } else if (n == adv){
    res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${adv}!</p>`
    document.getElementById('botao1').style.visibility = 'hidden'
    document.getElementById('botao2').style.visibility = 'visible'
  }
}

 function again() {
  document.getElementById('botao2').style.visibility = 'hidden'
  document.getElementById('botao1').style.visibility = 'visible'
  res.innerHTML = null
  n = Math.round(Math.random() * 100)
 }