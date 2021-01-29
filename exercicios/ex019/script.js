function calcular() {
  let n1 = Number(window.prompt(`Primeiro valor:`))
  let n2 = Number(window.prompt(`Segundo valor:`))
  let sel = Number(window.prompt(`Valores informados: ${n1} e ${n2}\nO que vamos fazer?\n[1] Somar\n[2] Subtrair\n[3] Multiplicar\n[4] Dividir`))
  let equal = 0
  let res = document.getElementById('resultado')

  res.innerHTML = `<h1>Calculando...</h1>`

  switch (sel){
    case 1:
      res.innerHTML += `<p>${n1} + ${n2} = <strong>${n1 + n2}</strong></p>`
      break
    case 2:
      res.innerHTML += `<p>${n1} - ${n2} = <strong>${n1 - n2}</strong></p>`
      break
    case 3:
      res.innerHTML += `<p>${n1} X ${n2} = <strong>${n1 * n2}</strong></p>`
      break
    case 4:
      res.innerHTML += `<p>${n1} / ${n2} = <strong>${n1 / n2}</strong></p>`
      break
    default:
      res.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles.</p>`
  }
}