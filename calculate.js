import {main , root , input, resultInput, allowedKeys} from "./CalcVars.js"


function calculate(){

  let result 
  console.log("calculado")
  resultInput.value = 'ERROR'
  resultInput.classList.add('error')
  result = eval(input.value)
  resultInput.classList.remove('error')
  resultInput.value = result
}


export {calculate}