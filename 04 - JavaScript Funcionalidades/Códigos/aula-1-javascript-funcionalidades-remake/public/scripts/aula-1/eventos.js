const divPrimeiroInput = document.querySelector('.input');
const inputText = divPrimeiroInput.querySelector('input');
const paragrafoDeErro = document.createElement('p');
divPrimeiroInput.append(paragrafoDeErro);


inputText.addEventListener('change', function() {
    const valor = inputText.value.trim();
    const nomeQuebradoArray = valor.split(' ');
    const naoTemSobrenome = nomeQuebradoArray.length <= 1
    const inputTaVazio = valor === '';

    if(naoTemSobrenome) {
        paragrafoDeErro.textContent = 'Por favor, informe um sobrenome!';
        paragrafoDeErro.replaceWith(paragrafoDeErro);
    }

    if(inputTaVazio) {
        paragrafoDeErro.textContent = 'Por favor, informe o nome do adotante!';
        paragrafoDeErro.replaceWith(paragrafoDeErro);
    }

    
    
});
