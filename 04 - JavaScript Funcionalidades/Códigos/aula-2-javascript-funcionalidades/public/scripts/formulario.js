/**
 * 1. Buscar os inputs do formuário.
 * 2. Capturar o conteúdo desses inputs.
 * 3. Criar novos elementos com o conteúdo dos inputs.
 * 4. Mostrar estes elementos abaixo de cada input.
 */

const btnProximo = document.querySelector('.btn-proximo')

btnProximo.addEventListener('click', function () {
    const inputName = document.querySelector('#full-name');
    const inputBrithday = document.querySelector('#birthday');
    const inputWhatsApp = document.querySelector('#whatsapp');

    const nameTag = document.createElement('p');
    const birthdayTag = document.createElement('p');
    const whatsAppTag = document.createElement('p');
    
    nameTag.textContent = inputName.value;
    birthdayTag.textContent = inputBrithday.value;
    whatsAppTag.textContent = inputWhatsApp.value;
    
    inputName.replaceWith(nameTag);
    inputBrithday.replaceWith(birthdayTag);
    inputWhatsApp.replaceWith(whatsAppTag);
});

/**
 * Exercício Extra: Fazer conteúdo do box de formulário de cadastro 
 * de adotante se transformar em um box de confirmação de dados. (Dica: só precisa mudar o conteúdo de texto)
 * 1. Trocar: "Digite seu nome completo" por "nome completo: "
 * 2. Por ai vai! :)
 * 
 */