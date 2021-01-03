function gerar(){
  var txtn = document.getElementById('txtn')
  var tab = document.getElementById('seltab')
  if (txtn.value.length == 0){
    alert ('Digite um número')
  } else {
    var n = Number(txtn.value)
    tab.innerHTML = ''
    for (c = 1; c <= 10; c++) {
      var item = document.createElement('option')
      item.text = `${n} x ${c} = ${n*c}`
      item.value = `tab${c}`
      tab.appendChild(item)
    }
  }
}