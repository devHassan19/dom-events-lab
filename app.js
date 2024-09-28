/*-------------------------------- Constants --------------------------------*/
/* const buttons = document.querySelectorAll('.button')
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    console.log(event.target.innerText)

})
 */
/*-------------------------------- Variables --------------------------------*/
let inputNum = ''
let nextNum = ''
let opert = ''
/*------------------------ Cached Element References ------------------------*/
const calculator = document.querySelector('#calculator')
const theDisplay = document.querySelector('.display')
/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {
  if (event.target.classList.contains('number')) {
    const inp1 = event.target.innerText
    inputNum += inp1
    showDisplay(inputNum)
  } else if (event.target.classList.contains('operator')) {
    if (event.target.innerText === 'C') clearCalculator()
    else {
      if (inputNum !== '') {
        opert = event.target.innerText
        nextNum = inputNum
        inputNum = ''
      }
    }
    showDisplay(opert)
  } else if (event.target.classList.contains('equals')) {
    if (nextNum !== '' && inputNum !== '') {
      let result
      const num1 = parseFloat(nextNum)
      const num2 = parseFloat(inputNum)

      switch (opert) {
        case '+':
          result = num1 + num2
          break
        case '-':
          result = num1 - num2
          break
        case '*':
          result = num1 * num2
          break
        case '/':
          result = num1 / num2
          break
        default:
          return
      }

      showDisplay(result)
      inputNum = ''
      nextNum = result.toString()
    }
  }
})

function clearCalculator() {
  inputNum = ''
  nextNum = ''
  opert = ''
  theDisplay.innerText = '0'
}

function showDisplay(value) {
  theDisplay.innerText = value
}
