const loginCorreto = "teste@gmail.com";
const senhaCorreta = "123456";

const form = document.querySelector(".login-box");
const loginInput = document.querySelector("input[type='email']");
const passwordInput = document.querySelector("input[type='password']");

form.addEventListener("submit",function(event){
    event.preventDefault();

    const emailDigitado = loginInput.value;
    const senhaDigitado = passwordInput.value;

    if (emailDigitado == loginCorreto & senhaDigitado == senhaCorreta){

        alert("Login efetuado com sucesso!")
        window.location.href = 'home.html'
    } else {

        alert("Email ou senha incorretos!")
    }
    
});



