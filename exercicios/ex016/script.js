function idade(){
  let nasc = Number(window.prompt('Em que ano você nasceu?'))
  let now = new Date
  let ano = now.getFullYear()
  let idade = ano - nasc
  let res = document.getElementById('resultado')

  res.innerHTML = `<p>Quem nasceu em ${nasc} vai completar <strong>${idade}</strong> anos em ${ano}.</p>`


}