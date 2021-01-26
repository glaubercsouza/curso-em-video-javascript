function horario() {
  let res = document.getElementById('resultado')
  let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
  let semana = new Array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
  let now = new Date
  let dia = now.getDate()
  let ano = now.getFullYear()
  let hora = now.getHours()
  let min = now.getMinutes()
  let seg = now.getSeconds()
  let mes = now.getMonth()
  let sem = now.getDay()
  
  res.innerHTML = `<p>Dia: <mark>${dia}</mark><p>`
  res.innerHTML += `<p>Mês: <mark>${meses[mes]}</mark><p>`
  res.innerHTML += `<p>Ano: <mark>${ano}</mark><p>`
  res.innerHTML += `<p>Dia da semana: <mark>${semana[sem]}</mark><p>`
  res.innerHTML += `<p>Hora: <mark>${hora}</mark><p>`
  res.innerHTML += `<p>Minutos: <mark>${min}</mark><p>`
  res.innerHTML += `<p>Segundos: <mark>${seg}</mark><p>`
}