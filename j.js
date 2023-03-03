const cellElement = document.querySelectorAll('.box')
console.log(cellElement)
var count = 1
cellElement.forEach((cell) => {
  cell.addEventListener('click', (e) => {
    Fill(e)
  })
})

const btn = document.getElementById('reset')
btn.addEventListener('click', reset)
function Fill(e) {
  if (count <= 9) {
    if (count % 2 != 0) {
      document.getElementById(e.target.id).innerHTML = 'X'
      // e.disabled=true;
    } else {
      document.getElementById(e.target.id).innerHTML = 'O'
      // e.disabled=true;
    }
    count++

    if (checkWin()) {
      console.log('Winner')
      setTimeout(() => {
        alert('winner')
        reset()
      }, 500)
    }

    if (count === 10) {
      if (checkWin()) {
        console.log('Winner')
        setTimeout(() => {
          alert('winner')
          reset()
        }, 500)
      } else {
        setTimeout(() => {
          alert('match draw')
          reset()
        }, 500)
      }
    }
  }
}

function reset() {
  for (var i = 1; i <= 9; i++) {
    document.getElementById('div' + i).innerHTML = ''
  }
  count = 1
}

function checkWin() {
  if (
    checkCondition('div1', 'div2', 'div3') ||
    checkCondition('div1', 'div4', 'div7') ||
    checkCondition('div7', 'div8', 'div9') ||
    checkCondition('div3', 'div6', 'div9') ||
    checkCondition('div1', 'div5', 'div9') ||
    checkCondition('div3', 'div5', 'div7') ||
    checkCondition('div2', 'div5', 'div8') ||
    checkCondition('div4', 'div5', 'div6')
  ) {
    return true
  }
}

function checkCondition(div1, div2, div3) {
  if (
    getdata(div1) != '' &&
    getdata(div2) != '' &&
    getdata(div3) != '' &&
    getdata(div1) == getdata(div2) &&
    getdata(div2) == getdata(div3)
  ) {
    return true
  }
}

function getdata(div) {
  return document.getElementById(div).innerHTML
}
