function contar() {
  let res = document.getElementById('resultado')
  res.innerHTML += `<h1>Contando de 1 até 10</h1>`
  
  for (c = 1 ; c < 11 ; c++) {
    res.innerHTML += `${c} &#x1F449 `
  }
  
  /*while (c < 11){
    res.innerHTML += `${c} &#x1F449 `
    c++
  }*/
  
  res.innerHTML += `&#x1F3C1`
}
