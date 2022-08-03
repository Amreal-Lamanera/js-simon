// Ho cambiato le immagini perché le altre non mi piacevano :D
const slides = [
    "./img/01.jpg",
    "./img/02.jpg",
    "./img/03.jpg",
    "./img/04.jpg",
    "./img/05.jpg",
    "./img/06.jpg",
    "./img/07.jpg",
    "./img/08.png",
    "./img/09.jpg"
];

const slideElements = [];
let indexAct = 0;

const wrapperElement = document.querySelector('.slides-wrapper');

// creazione scorrimento nel tempo
let myInterval = setInterval(nextFun, 3000);

// generare il contenuto dello slider
for (let i = 0; i < slides.length; i++) {
    const src = slides[i];

    // creo elemento li
    const li = document.createElement('li');
    // aggiungo classe slide a li
    li.className = 'slide';

    // assegno la classe active al primo elemento
    if (i === indexAct) {
        li.classList.add('active');
    }

    // creo elemento img
    const img = document.createElement('img');
    // assegno alla proprietà src di img il valore src
    img.src = src;
    // console.log(img);
    // inserisco img in li
    li.append(img);
    // console.log(li);

    // inserisco li nello slides-wrapper
    wrapperElement.append(li);

    // mi salvo tutte le slide in un array
    slideElements.push(li);
}

// implementare i pointer
const pointerWrapperElement = [];
for (let i = 0; i < slideElements.length; i++) {
    pointerWrapperElement[i] = document.getElementById(i);

    pointerWrapperElement[i].addEventListener('click', goTo.bind(pointerWrapperElement, i)
        // function () {
        //     // se muovo slider resetto timer e lo faccio ripartire
        //     resetInterval();

        //     // togliere active dal pointer attivo
        //     pointerWrapperElement[indexAct].classList.remove('active');
        //     // togliere active dalla slide attiva
        //     slideElements[indexAct].classList.remove('active');

        //     // aggiungere la classe active al pointer selezionato
        //     indexAct = i;
        //     pointerWrapperElement[indexAct].classList.add('active');


        //     // aggiungere la classe active alla slide corrispondente al pointer clickato
        //     slideElements[indexAct].classList.add('active');

        // }
    )
};

// implementare freccia right
const nextElement = document.querySelector('.arrow-next');

nextElement.addEventListener('click', nextFun);

// implementare freccia left
const prevElement = document.querySelector('.arrow-prev');

prevElement.addEventListener('click', prevFun);

function goTo(i) {
    // se muovo slider resetto timer e lo faccio ripartire
    resetInterval();

    // togliere active dal pointer attivo
    pointerWrapperElement[indexAct].classList.remove('active');
    // togliere active dalla slide attiva
    slideElements[indexAct].classList.remove('active');

    // aggiungere la classe active al pointer selezionato
    indexAct = i;
    pointerWrapperElement[indexAct].classList.add('active');


    // aggiungere la classe active alla slide corrispondente al pointer clickato
    slideElements[indexAct].classList.add('active');
}

function nextFun() {
    // // se muovo slider resetto timer e lo faccio ripartire
    // resetInterval();

    // // togliere active dalla slide attiva
    // slideElements[indexAct].classList.remove('active');
    // // togliere active dal pointer attivo
    // pointerWrapperElement[indexAct].classList.remove('active');

    // aggiungere la classe active alla slide successiva (se esiste)
    if (indexAct === slideElements.length - 1) {
        goTo(0);
        // // riparto dalla prima slide => azzero index
        // indexAct = 0;
        // // cambio slide all'index
        // slideElements[indexAct].classList.add('active');
        // // cambio pointer all'index
        // pointerWrapperElement[indexAct].classList.add('active');
    } else {
        // // passo alla slide successiva
        // slideElements[++indexAct].classList.add('active');
        // // passo al pointer successivo
        // pointerWrapperElement[indexAct].classList.add('active');
        goTo(indexAct + 1);
    }
};

function prevFun() {
    // // se muovo slider resetto timer e lo faccio ripartire
    // resetInterval();

    // // togliere active dalla slide attiva
    // slideElements[indexAct].classList.remove('active');
    // // togliere active dal pointer attivo
    // pointerWrapperElement[indexAct].classList.remove('active');

    // aggiungere la classe active alla slide precedente (se esiste)
    if (indexAct === 0) {
        goTo(slideElements.length - 1)
        // // passo all'ultima slide
        // indexAct = slideElements.length - 1;
        // // cambio slide all'index
        // slideElements[indexAct].classList.add('active');
        // // cambio pointer all'index
        // pointerWrapperElement[indexAct].classList.add('active');
    } else {
        goTo(indexAct - 1)
        // // passo alla slide precedente
        // slideElements[--indexAct].classList.add('active');
        // // passo al pointer successivo
        // pointerWrapperElement[indexAct].classList.add('active');
    }
}

function resetInterval() {
    clearInterval(myInterval);
    myInterval = setInterval(nextFun, 3000);
}