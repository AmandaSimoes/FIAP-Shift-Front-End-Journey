/**
 * 1. document.getElementById => Busca um elemento na página dado um id!
 */

// const onboarding = document.getElementById("onboarding");

// onboarding.innerHTML = 'Estou aprendendo <strong>DOM!</strong>';
// onboarding.onclick = function elementoClicado () {
//     alert('elemento onboarding foi clicado!');
// }

// console.log('onboarding elemento: ', onboarding);



/**
 * 2. document.querySelector => Busca um elemento na página dado um criterio de busca (ID, class, etc.)!
 * # para IDs
 * . para classes
 * nome da tag, para elementos.
 */

// const onboarding = document.querySelector("#onboarding .input label");

// onboarding.innerHTML = 'Estou aprendendo <strong>Query Selector!</strong>';

// console.log('onboarding elemento: ', onboarding);

/**
 * 3. document.querySelectorAll => Busca uma lista elementos na página dado um criterio de busca (ID, class, etc.)!
 * # para IDs
 * . para classes
 * nome da tag, para elementos.
 */

// const labels = document.querySelectorAll("label");

// labels[0].innerHTML = 'Estou aprendendo <strong>Query Selector All!</strong>';
// labels[1].innerHTML = 'Estou aprendendo <strong>Query Selector All!</strong>';
// labels[2].innerHTML = 'Estou aprendendo <strong>Query Selector All!</strong>';

// console.log('labels elementos: ', labels);


/**
 * 4. buscas relativas a partir de um elemento (querySelector e querySelectorAll)
 */

// const inputs = document.querySelectorAll("#onboarding .input");
// const primeiroInput = inputs[0];

// const primeiraLabel = primeiroInput.querySelector('label');
// console.log('primeira label', primeiraLabel);

// console.log('inputs', inputs);