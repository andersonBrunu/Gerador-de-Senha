let tamanhoCaractere = document.querySelector("#tamanho-caractere");
let sliderItem = document.querySelector("#slider");

let buttonGerar = document.querySelector("#button-gerar");

let senhaContainer = document.querySelector("#div-result");
let senha = document.querySelector("#senha");

const caracteres = "abcdefghijklmnopkrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
let novaSenha = null;

tamanhoCaractere.innerHTML = sliderItem.value;

sliderItem.oninput = function () {
    tamanhoCaractere.innerHTML = this.value;
}

function gerarSenha() {
    let pass = "";
    for (let i = 0, n = caracteres.length; i < sliderItem.value; i++) {
        pass += caracteres.charAt(Math.floor(Math.random() * n));
    }
    senhaContainer.classList.remove("hide");
    senha.innerHTML = pass;
    novaSenha = pass;
}

function copiarSenha (){
    navigator.clipboard.writeText(novaSenha);
    alert("Senha Copiada");
}



