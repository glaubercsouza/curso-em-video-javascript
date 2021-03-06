// Creuza - 1 - Idade
function idade() {
  var atual = document.getElementById('txtanoatual')
  var nasc = document.getElementById('txtanonasc')
  var idade = Number(atual.value) - Number(nasc.value)
  if (Number(nasc.value) > Number(atual.value) || nasc.value.length == '0' || atual.value.length == '0') {
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
    var apr = ''
    res7.innerHTML = `A média do aluno é ${med.toFixed(2)} <br>`
  }
  if (med >= 7 ) {
    res7.innerHTML += 'Aluno <strong>APROVADO</strong>'
    if ( med >= 9){
      apr = 'A'
    } else if (med >= 8 && med < 9) {
      apr = 'B'
    } if (med >= 7 && med < 8) {
      apr = 'C'
    }
  } else if (med >= 5){
      res7.innerHTML += `Aluno <strong>EM RECUPERAÇÃO</strong>`
      if (med >= 6 && med < 7) {
        apr = 'D'
      } else if (med >= 5 && med < 6) {
        apr = 'E'
      }
  } else{
      res7.innerHTML += 'Aluno <strong>REPROVADO</strong>'
      apr = 'F'
  }
  res7.innerHTML += ` com aproveitamento ${apr}`
}

//IMC
function calcularimc() {
  var peso = document.getElementById('txtpes')
  var altura = document.getElementById('txtalt')
  var imc = Number(peso.value) / (Number(altura.value) ** 2)
  res8.innerHTML = `Seu IMC é de ${imc.toFixed(2)}. `
  if (imc < 17) {
    res8.innerHTML += `Muito abaixo do peso`
  } else if (imc >= 17 && imc < 18.5) {
    res8.innerHTML += `Abaixo do peso`
  } else if (imc >= 18.5 && imc < 25) {
    res8.innerHTML += `Peso ideal`
  } else if (imc >= 25 && imc < 30) {
    res8.innerHTML += `Sobrepeso`
  } else if (imc >= 30 && imc < 35) {
    res8.innerHTML += `Obesidade`
  } else if (imc >= 35 && imc < 40) {
    res8.innerHTML += `Obesidade Severa`
  } else {
    res8.innerHTML += `Obesidade Mórbida`
  }
}

// Criança Esperança
function doar() {
  var opcao = document.getElementsByName('doacao')
  if (opcao[0].checked) {
    valor = '10'
  } else if (opcao[1].checked) {
    valor = '25'
  } else if (opcao[2].checked) {
    valor = '50'
  } else {
    valor = document.getElementById('opt4')
    valor = Number(valor.value)
  }
  res9.innerHTML = `Sua doação foi de R$ ${valor}. Obrigado!` 
}

// Dependentes
function dependentes() {
  var nome = document.getElementById('txtfun')
  var salario = document.getElementById('txtsal')
  var depend = document.getElementById('txtdep')
  if (nome.value.length == '0' || salario.value.length == '0' || depend.value.length == '0'){
    alert('Verifique os dados e tente novamente')
  } else {
    var nome = String(nome.value)
    var salario = Number(salario.value)
    var depend = Number(depend.value)
    switch (depend) {
      case 0:
        salario = salario + (salario * 5 /100)
        break
      case 1:
      case 2:
      case 3:
        salario = salario + (salario * 10 /100)
        break
      case 4:
      case 5:
      case 6:
        salario = salario + (salario * 15 /100)
        break
      default:
        salario = salario + (salario * 18 /100)
        break
      }
  res10.innerHTML = `O novo salário de ${nome} será R$ ${salario}`
  }
  
  
}

// Futebol
function futebol() {
  var time1 = document.getElementById('txttm1')
  var time2 = document.getElementById('txttm2')
  var placar1 = document.getElementById('txtpc1')
  var placar2 = document.getElementById('txtpc2')
  var diferenca = Math.abs(Number(placar1.value) - Number(placar2.value))
  var placar1 = Number(placar1.value)
  var placar2 = Number(placar2.value)
  res11.innerHTML = ``
  
  if (placar1 > placar2) {
    res11.innerHTML = `Vitória do ${String(time1.value)}`
  } else if (placar2 > placar1) {
    res11.innerHTML = `Vitória do ${String(time2.value)}`
  }
  switch (diferenca) {
    case 0:
      res11.innerHTML += '<br>Empate'
      break
    case 1:
    case 2:
    case 3:
      res11.innerHTML += `<br>Normal`
      break
    default:
      res11.innerHTML += '<br>Goleada'
      break
  }
}

// Contador
function contagem() {
  var inicio = document.getElementById('txtini')
  var final = document.getElementById('txtfin')
  var final = Number(final.value)
  var inicio = Number(inicio.value)
  res12.innerHTML = ''
  if (final > inicio) {
    for (var c = inicio; c <= final; c += 1){
      res12.innerHTML += `${c}... `
    }
  } else {
    for (var c = inicio; c >= final; c -= 1) {
      res12.innerHTML += `${c}... `
    }
  }
}

// Tabuada
function tabuada() {
  var tabuada = document.getElementById('txttab')
  tabuada = Number(tabuada.value)
  res13.innerHTML = ''
  for (var c = 1; c <= 10; c++){
    res13.innerHTML += `<br>${tabuada} X ${c} = ${c * tabuada}`
  }
}

// Fatorial
function fatorial() {
  var fatorial = document.getElementById('txtfat')
  fat = Number(fatorial.value)
  res14.innerHTML = ''
  if (fatorial.value.length == '0' || fat == '0') {
    fatorial = 1
  } else {
    fatorial = Number(fatorial.value)
    for (var c = fatorial - 1; c >= 1; c--) {
    fatorial = fatorial * c
    }
  }
  res14.innerHTML = `<br>${fat}! = ${fatorial}`
}

// Primo
function primo() {
  var numero = document.getElementById('txtpri')
  res15.innerHTML = ''
  if (numero.value.length == '0') {
    alert('Preencha um número')
  } else {
    var contdiv = 0
    numero = Number(numero.value)
    for (var c = 1; c < numero ; c++ ) {
      if (numero % c == '0') {
        contdiv++
      }
    }
      if (contdiv > 2 || numero == 0) {
        res15.innerHTML = `<br>O número ${numero} não é primo`
      } else {
        res15.innerHTML = `<br>O número ${numero} é primo`
    }
  }
}

// Contador com seletor
function contarseletor() {
  var opcao = document.getElementsByName('contagem')
  res16.innerHTML = ``
  if (opcao[0].checked) {
    for (var c = 1; c <= 10; c += 1) {
      res16.innerHTML += `${c}... `
    } 
  } else if (opcao[1].checked) {
    for (var c = 10; c >= 1; c -= 1) {
      res16.innerHTML += `${c}... `
    }
  } else {
    alert('Escolha uma opção')
  }
}

// Seletor de Pessoas
function selecpessoas() {
  
  var sexo = document.getElementsByName('anpsexo')
  var idade = document.getElementById('anpida')
  var cabelo = document.getElementsByName('cabelo')
  var TotH = 0
  var TotM = 0
  idade = Number(idade.value)
  
  do {
    res17.innerHTML = ''
    if (sexo[0].checked && idade > 18 && cabelo[1].checked) {
      TotH++
    } else if (sexo[1].checked && idade >= 25 && idade < 30 && cabelo[2].checked) {
      TotM++
    }
  
    var continuar = ''
    var confirm = window.confirm('Gostaria de inserir outra pessoa?')
    if (confirm == true) {
      continuar = 'S'
    } else {
      continuar = 'N'
    }
  } while (continuar == 'S')
  
  res17.innerHTML += `O total de homens maiores de 18 anos e cabelos castanhos é ${TotH}`
  res17.innerHTML += `<br>O total de mulheres com idade entre 25 e 30 anos e cabelos loiros é de ${TotM}`
}

