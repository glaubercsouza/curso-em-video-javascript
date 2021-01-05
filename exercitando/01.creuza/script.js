// Creuza - 1 - Idade
function idade() {
  var atual = document.getElementById('txtanoatual')
  var nasc = document.getElementById('txtanonasc')
  var idade = Number(atual.value) - Number(nasc.value)
  if (Number(nasc.value) > Number(atual.value)) {
    alert('Verifique os dados e tente novamente')
  } else if (idade >= 18){ 
     res1.innerHTML = `<br>Sua idade ao final de ${Number(atual.value)} será ${idade} anos, você já terá atingido a maioridade e estará apto para dirigir.`
  } else {
    res1.innerHTML = `<br>Sua idade ao final de ${Number(atual.value)} será ${idade} anos, você não terá atingido a maioridade e não estará apto para dirigir.`
   }
}

// Creuza - 2 - Moedas
function verificar() {
  var real = document.getElementById('txtreal')
  var dol = Number(real.value) / 5.30

  res2.innerHTML = `<br>Posso ter US$ ${dol.toFixed(2)}`
}


// Creuza - 3 - Temperatura
function converter() {
  var fah = document.getElementById('txtfah')
  var cel = (Number(fah.value)-32) / 1.8

  res3.innerHTML = `<br>No Brasil estaria ${cel.toFixed(1)}°C`
}

// Creuza - 4 - Imposto
function calcular() {
  var valor = document.getElementById('txtprod')
  var imposto = (Number(valor.value) * 60) / 100

  res4.innerHTML = `<br> O valor do imposto será de US$ ${imposto.toFixed(2)}`
}

// Creuza - 5 - Juros
function juros() {
  var emprestimo = document.getElementById('txtval')
  var juros = document.getElementById('txtjur')
  var parcelas = document.getElementById('txtpar')
  var total = ((Number(emprestimo.value) * Number(juros.value) / 100) + Number(emprestimo.value)) / Number(parcelas.value)

  res5.innerHTML = `Vou pagar ${Number(parcelas.value)} parcelas de R$ ${total.toFixed(2).replace('.',',')}`
}

// Par ou Ímpar
function parouimpar() {
  var n = document.getElementById('txtpoi')
  if (Number(n.value) % 2 == 0) {
    res6.innerHTML = `O número digitado é PAR!`
  } else {
    res6.innerHTML = `O número digitado é ÍMPAR!`
  }
  
}

//Médias escolares
function calcularmedia() {
  var n1 = document.getElementById('txtn1')
  var n2 = document.getElementById('txtn2')
  if (n1.value.length == '0'){
    alert('Preencha a primeira nota')
  } else if (n2.value.length == '0'){
      alert('Preencha a segunda nota')
  } else if (Number(n1.value) > 10 || Number(n2.value) > 10){
      alert('As notas devem ter valor igual ou inferior a 10')  
  } 
  else {
    var med = ((Number(n1.value) + Number(n2.value)) / 2)
    res7.innerHTML = `A média do aluno é ${med.toFixed(2)} <br>`
  }
  if (med >= 7 ){
    res7.innerHTML += 'Aluno <strong>APROVADO</strong>'
  } else if (med >= 5){
      res7.innerHTML += `Aluno <strong>EM RECUPERAÇÃO!</strong>`
  } else{
      res7.innerHTML += 'Aluno <strong>REPROVADO</strong>!'
  }
}