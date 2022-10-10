/* 
TRACCIA
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. 
*/

//come capire se un numero (tra 1 e 100) è multiplo di 3 ?
//un numero è multiplo di 3/5 se questo da 0 come resto dopo essere stato diviso per 3/5.


const containerEL = document.querySelector('.container');

const titleDom = document.createElement('h1');
// bonus 1.3 - appendo il contenuto all'elemento creato
titleDom.innerHTML = 'FizzBuzzDOM';
//bonus 1.4 - appendo il mio elemento al dom
containerEL.append(titleDom);

// 1. stampare in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    const mySquare = document.createElement('div');
    mySquare.innerHTML = i;
    containerEL.append(mySquare);
    //console.log(i);
    // 2. individuare i multipli di 3
    // 2.1 assegnare valore "Fizz" a i multipla di 3
    const multiplo3 = 'Fizz';
    //console.log('il numero è multiplo di 3:', multiplo3);
    // 3. individuare i multipli di 5
    // 3.1 assegnare valore "Buzz" a i multipla di 5
    const multiplo5 = 'Buzz';
    //console.log('il numero è multiplo di 5:', multiplo5);
    // 4. pindividuare i multipli di 3 e 5
    // 4.1 assegnare valore "FizzBuzz" a i multipla sia di 3 sia di 5
    const multiplo3e5 = 'FizzBuz';
    //console.log('il numero è multiplo sia di 3 sia di 5:', multiplo3e5);

    // 4. far apparire la stringa "Fizz" al posto dei multipli di 3 
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(multiplo3e5);
        // 5. far apparire la stringa "Buzz" al posto dei multipli di 5
    } else if (i % 5 == 0) {
        console.log(multiplo5);
        // 6. far apparire la stringa "FizzBuzz" al posto dei multipli sia di 3 sia di 5
    } else if (i % 3 == 0) {
        console.log(multiplo3);
        // 7. far apparire il numero se non è multiplo di niente
    } else {
        console.log(i);
    }
}

/*
BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
*/
