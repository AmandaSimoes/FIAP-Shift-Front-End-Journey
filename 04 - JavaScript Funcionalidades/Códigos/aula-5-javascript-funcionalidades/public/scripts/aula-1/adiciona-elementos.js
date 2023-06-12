const divPrimeiroInput = document.querySelector('.input');

const primeiroParagrafo = document.createElement('p');
primeiroParagrafo.innerText = 'O nome do adotante não pode ser vazio!';


divPrimeiroInput.append(primeiroParagrafo)
// divPrimeiroInput.append(segundoParagrafo)

// divPrimeiroInput.prepend(primeiroParagrafo);

setTimeout(function () {
    const segundoParagrafo = document.createElement('p');
    segundoParagrafo.innerText = 'O nome precisa de um sobrenome!';
    primeiroParagrafo.replaceWith(segundoParagrafo);
}, 5000);