function converter() {
  var fah = document.getElementById('txtfah')
  var cel = (Number(fah.value)-32) / 1.8

  res.innerHTML = `<br>No Brasil estaria ${cel.toFixed(1)}°C`
}