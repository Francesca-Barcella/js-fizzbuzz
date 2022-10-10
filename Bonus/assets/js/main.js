/* 
TRACCIA
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. 
*/

/*
BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
  */

//const titleDom = document.createElement('h1');
//titleDom.innerHTML = 'FizzBuzzDOM';
//containerEL.append(titleDom);
const containerEL = document.querySelector('.container');

for (let i = 1; i <= 100; i++) {

    const multiplo3 = 'Fizz';
    const multiplo5 = 'Buzz';
    const multiplo3e5 = 'FizzBuz';

    const mySquare = document.createElement('div');
    containerEL.append(mySquare);
    console.log(mySquare);
    mySquare.style.padding = '0.5rem';
    mySquare.style.textAlign = 'center';
    mySquare.style.width = '3.5rem';
    mySquare.style.height = '3.5rem';
    mySquare.style.fontSize = '0.75rem'
    mySquare.style.margin = '0.5rem';
    mySquare.style.lineHeight = '2.5rem';

    if (i % 3 == 0 && i % 5 == 0) {
        console.log(multiplo3e5);
        mySquare.innerHTML = (multiplo3e5);
        mySquare.style.backgroundColor = 'violet';
    } else if (i % 5 == 0) {
        console.log(multiplo5);
        mySquare.innerHTML = (multiplo5);
        mySquare.style.backgroundColor = 'yellow';
    } else if (i % 3 == 0) {
        console.log(multiplo3);
        mySquare.innerHTML = (multiplo3);
        mySquare.style.backgroundColor = 'lightgreen';
    } else {
        console.log(i);
        mySquare.innerHTML = (i);
        mySquare.style.backgroundColor = 'lightblue';
    }
}

