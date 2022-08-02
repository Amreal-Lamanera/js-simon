// console.log('ok');

const numbers = randomNumbers();
let resultEl = document.getElementById('result');
alert('Cerca di ricordare questi numeri: ' + numbers.join(', '));
let message = 'devi inserire ESATTAMENTE 5 numeri - ricarica per riprovare';

setTimeout(() => {
    let urNumbersStr = prompt('Inserisci i numeri visti poco fa');
    if (urNumbersStr !== null) {
        // sostituisco le , con spazi
        let urNumbers = urNumbersStr.replaceAll(',', ' ')
        // console.log(urNumbers);
        // inserisco tutto ciò che è separato dallo spazio in un array e rimuovo gli spazi rimasti se presenti
        urNumbers = urNumbers.split(' ').filter(function (value) {
            return value != '';
        });
        // console.log(urNumbers);
        // console.log(numbers.includes(parseInt(urNumbers[0])));
        if (urNumbers.length === numbers.length) {
            let counter = 0;
            urNumbers.forEach(element => {
                const n = parseInt(element);
                if (!isNaN(n)) {
                    if (numbers.includes(n)) {
                        counter++;
                    }
                    message = counter;
                } else {
                    message = 'hai inserito qualche valore non numerico!';
                    return;
                }
            });
        }
    } else {
        message = 'Hai annullato';
    }
    if (message === 5) {
        message += ' PERFECT!';
    }
    resultEl.innerHTML = message;

}, 30000)

// funzione che genera 5 numeri casuali sotto forma di stringa
function randomNumbers() {
    const myNumbers = [];
    while (myNumbers.length < 5) {
        const n = Math.floor(Math.random() * 100 + 1);
        // console.log(n);
        if (!myNumbers.includes(n)) {
            myNumbers.push(n);
        }
    }
    // console.log(myNumbers);
    return myNumbers;
}