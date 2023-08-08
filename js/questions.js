(function() {
    const titleQuestions = [...document.querySelectorAll('.questions__title')]; /* Convertimos todas las clases seleccionadas en un arreglo colocando tres puntos "..." */
    // console.log(titleQuestions);

    /* Obtenemos a las preguntas que estan almacenadas en el arreglo de forma individual. Usaremos foreach, El bucle foreach es un tipo especial de bucle que permite recorrer estructuras que contienen varios elementos (como matrices, recursos u objetos) sin necesidad de preocuparse por el número de elementos.*/
    titleQuestions.forEach(question => {
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling; /* nextElementSibling se usa para devolver el siguiente elemento inmediato del elemento especificado, en el mismo nivel de árbol o nulo si el elemento especificado es el último en la lista */
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add');
            question.children[1].classList.toggle('questions__arrow--rotate');
            console.log(question);

            if(answer.clientHeight === 0) {
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();