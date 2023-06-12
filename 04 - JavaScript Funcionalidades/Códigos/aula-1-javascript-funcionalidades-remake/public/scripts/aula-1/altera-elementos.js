const divPrimeiroInput = document.querySelector('.input');

const primeiroParagrafo = document.createElement('p');
primeiroParagrafo.textContent = 'O nome do adotante não pode ser vazio!';
primeiroParagrafo.setAttribute('class', 'text-display')




divPrimeiroInput.append(primeiroParagrafo)
// divPrimeiroInput.append(segundoParagrafo)

// divPrimeiroInput.prepend(primeiroParagrafo);

setTimeout(function () {
    const segundoParagrafo = document.createElement('a');
    segundoParagrafo.textContent = 'O nome precisa de um sobrenome!';
    segundoParagrafo.classList.toggle('text-lg');
    segundoParagrafo.setAttribute('href', 'https://google.com');
    segundoParagrafo.setAttribute('data-referencia', 'Google');

    primeiroParagrafo.replaceWith(segundoParagrafo);
}, 5000);