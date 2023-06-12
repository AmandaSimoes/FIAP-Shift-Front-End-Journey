const divPrimeiroInput = document.querySelector('.input');
const inputText = divPrimeiroInput.querySelector('input');
const paragrafoDeErro = document.createElement('p');
divPrimeiroInput.append(paragrafoDeErro);


// inputText.onmouseenter = function () {
//     console.log('onmouseenter funcionando')
// };

// inputText.onmouseleave = function () {};
// inputText.onclick = function () {};

// inputText.click();
// inputText.focus();



inputText.addEventListener('mouseenter', function() {
    console.log('elemento entrou no mouse!');
});

inputText.addEventListener('mouseleave', function() {
    console.log('elemento saiu do mouse!');
});

inputText.addEventListener('click', function() {
    console.log('elemento foi click!');
});

inputText.addEventListener('focus', function() {
    console.log('elemento foi focado!');
});

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
