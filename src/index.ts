const $root = document.getElementById('root')

function add(a: number, b: number) {
  return a + b
}

if ($root != null) {
  $root.innerText = `${add(2, 2)}`
}
