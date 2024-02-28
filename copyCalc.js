import {main , root , input, resultInput, allowedKeys} from "./CalcVars.js"


function copy(ev){
  const button = ev.currentTarget

if(button.innerText === 'Copy'){
  
  button.innerText = 'Coppied!'
  button.classList.add('success')
  navigator.clipboard.writeText(resultInput.value)

}else if(button.innerText === 'Coppied!'){
  
  button.innerText = 'Copy'
  button.classList.remove('success')

}}

export {copy}