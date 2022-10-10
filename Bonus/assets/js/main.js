/* 
TRACCIA
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. 
*/

//come capire se un numero (tra 1 e 100) è multiplo di 3 ?
//un numero è multiplo di 3/5 se questo da 0 come resto dopo essere stato diviso per 3/5.

// 1. stampare in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    //console.log(i);
    // 2. individuare i multipli di 3
    // 2.1 assegnare valore "Fizz" a i multipla di 3
    let multiplo3 = (i % 3 == 0);
    multiplo3 = 'Fizz'
    //console.log('il numero è multiplo di 3:', multiplo3);
    // 3. individuare i multipli di 5
    // 3.1 assegnare valore "Buzz" a i multipla di 5
    let multiplo5 = (i % 5 == 0);
    multiplo5 = 'Buzz'
    //console.log('il numero è multiplo di 5:', multiplo5);
    // 4. pindividuare i multipli di 3 e 5
    // 4.1 assegnare valore "FizzBuzz" a i multipla sia di 3 sia di 5
    let multiplo3e5 = (i % 3 == 0 && i % 5 == 0);
    multiplo3e5 = 'FizzBuz'
    //console.log('il numero è multiplo sia di 3 sia di 5:', multiplo3e5);
    
    // 4. far apparire la stringa "Fizz" al posto dei multipli di 3 
    if (i % 3 == 0){
        console.log(multiplo3);
        // 5. far apparire la stringa "Buzz" al posto dei multipli di 5
    } else if (i % 5 == 0){
        console.log(multiplo5);
        // 6. far apparire la stringa "FizzBuzz" al posto dei multipli sia di 3 sia di 5
    } else if (i % 3 == 0 && i % 5 == 0) {
        console.log(multiplo3e5);
        // 7. far apparire il numero se non è multiplo di niente
    } else{
        console.log(i);
    }
}



