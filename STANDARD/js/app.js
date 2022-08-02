// console.log('ok');

const numbers = randomNumbers();
let resultEl = document.getElementById('result');
alert('Cerca di ricordare questi numeri: ' + numbers.join(', '));
let message = 'devi inserire ESATTAMENTE 5 numeri - ricarica per riprovare';

setTimeout(() => {
    // prendo l'input dall'utente col prompt
    let urNumbersStr = prompt('Inserisci i numeri visti poco fa');
    // SE è diverso da null (non ha annullato)
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

        // SE ha inserito esattamente 5 valori
        if (urNumbers.length === numbers.length) {
            // variabile per il punteggio
            let counter = 0;
            // PER ogni elemento inserito
            urNumbers.forEach(element => {
                // n = al valore inserito trasformato in intero
                const n = parseInt(element);
                // SE non è NaN
                if (!isNaN(n)) {
                    // SE è un numero presente fra quelli generati
                    if (numbers.includes(n)) {
                        // incremento il punteggio
                        counter++;
                    }
                    // preparo il messaggio a schermo
                    message = counter;
                } else { // ALTRIMENTI (valore inserito non valido)
                    // preparo il messaggio a schermo
                    message = 'hai inserito qualche valore non numerico!';
                    // interrompo il ciclo
                    return;
                }
            });
        }
    } else { // ALTRIMENTI (annullato)
        // preparo il messaggio a schermo
        message = 'Hai annullato';
    }
    // SE li ha azzeccati tutti
    if (message === 5) {
        // aggiungo perfect
        message += ' PERFECT!';
    }
    // stampo il messaggio
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