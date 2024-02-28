import { calculate } from "./calculate.js"
import {main , root , input, resultInput, allowedKeys} from "./CalcVars.js"
import { themeSwitcher } from "./themeCalc.js"
import { copy } from "./copyCalc.js"


document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
  charKeyBtn.addEventListener('click' , function(){
    const value = charKeyBtn.dataset.value
    input.value += value
  })
})

document.getElementById('equal').addEventListener('click' , calculate)
document.getElementById('clear').addEventListener('click' , function(){
  input.value = " "
  input.focus()
})

input.addEventListener('keydown' , function(ev){
  ev.preventDefault()
  if(allowedKeys.includes(ev.key)){
    input.value += ev.key
    return
  }
  if(ev.key === 'Backspace'){
    input.value = input.value.slice(0, -1)
  }
  if(ev.key === 'Enter'){
    calculate()
  }
})

document.getElementById('copyToClipboard').addEventListener('click' , copy)
  
document.getElementById('themeSwitcher').addEventListener('click' , function () {
  themeSwitcher()
})