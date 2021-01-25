function calcular() {
  let res = document.getElementById('resultado')
  let nome = window.prompt(`Qual é o nome do aluno`)
  let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}`))
  let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}`))
  let med = (n1 + n2) / 2

  res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.</p>`
  res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>`
  res.innerHTML += `<p>A média final será <mark>${med}</mark>.</p>`

  if (med < 6) {
    res.innerHTML += `<p>A mensagem que temos é: <strong style="color:red;">Estude um pouco mais!</strong></p>`
  } else {
    res.innerHTML += `<p>A mensagem que temos é: <strong style="color:red;">Meus parabéns!</strong></p>`
  }
  
}