import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

console.log(checkForName);

document.getElementById('generate').addEventListener('click', handleSubmit());
console.log("CHANGE!!");

export {
    checkForName,
    handleSubmit
   }