import { handleSubmit } from './js/formHandler'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

console.log('text');

document.getElementById('button').addEventListener('click', handleSubmit());
console.log("CHANGE!!");

export {
    handleSubmit
   }