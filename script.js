function add(val) {
  document.getElementById('result').value += val
}


function solve() {
  let x = document.getElementById('result').value
  let y = eval(x)
  document.getElementById('result').value = y
}

function clr() {
  document.getElementById('result').value = ""
}


function del() {
  let x = document.getElementById('result').value
  let y = x.substring(0, x.length-1)
  console.log(y)
  document.getElementById('result').value = y
}