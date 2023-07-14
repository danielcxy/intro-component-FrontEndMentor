// DECLARAÇÃO DE VARIÁVEIS COM ELEMENTOS DA DOM //
const form = document.querySelector('form')
const first = document.querySelector('.firstname')
const last  = document.querySelector('.lastname')
const email = document.querySelector('.email')
const password = document.querySelector('.password')
//CRIAÇÃO DE UMA FUNÇÃO QUE VALIDA O E-MAIL DO USUÁRIO//
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
//------------------------------------------------------//
//função que envia o form =>                            //
form.addEventListener('submit',  (event) => {
    event.preventDefault()
    //validar nome (perceber se há entrada de algum dado: 'caractere';)
    if(first.value === "") {
        document.querySelector('.firstname').style.display = "none";
        document.querySelector('.alertnotify1').style.borderColor = "red";
        document.querySelector('.alertnotify1').style.display = "block";
        document.querySelector('.alert1').style.display = "block";    
    } 
    //validar sobrenome (perceber se há entrada de algum dado: 'caractere')
    if(last.value === "") {
        document.querySelector('.lastname').style.display = "none";
        document.querySelector('.alertnotify2').style.borderColor = "red";
        document.querySelector('.alertnotify2').style.display = "block";
        document.querySelector('.alert2').style.display = "block";    
    } 
    //validar e-mail (perceber se há entrada de algum dado: 'caractere')
    if( validateEmail(email.value) != "") {

    } else {
        document.querySelector('.email').style.display = "none";
        document.querySelector('.alertnotify3').style.borderColor = "red";
        document.querySelector('.alertnotify3').style.display = "block";
        document.querySelector('.alert3').style.display = "block";
    
    }
    //validar senha (perceber se há entrada de algum dado: 'caractere')
    if(password.value === "") { 
        document.querySelector('.password').style.display = "none";
        document.querySelector('.alertnotify4').style.borderColor = "red";
        document.querySelector('.alertnotify4').style.display = "block";
        document.querySelector('.alert4').style.display = "block"; 
    } 
})
