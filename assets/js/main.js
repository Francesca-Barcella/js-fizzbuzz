/* 
TRACCIA
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. 
*/



// 1. stampare in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    console.log(i);
    // 2. per i multipli SOLO di 3 far apparire la stringa "Fizz"
    //2.1 come capire se un numero (tra 1 e 100) è multiplo di 3 ?
    // un numero è multiplo di 3 se questo da 0 come resto dopo essere statao diviso per 3.
    const multiplo3 = (i % 3 == 0);
    console.log('il numero è multiplo di 3:', multiplo3);
    // 3. per i multipli SOLO di 5 far apparire la string "Buzz"
    //3.1 come capire se un numero (tra 1 e 100) è multiplo di 5?
    const multiplo5 = (i % 5 == 0);
    console.log('il numero è multiplo di 5:', multiplo5);
    // 4. per i multipli SIA di 3 SIA di 5 far apparire la stringa "FizzBuzz"
    //4.1 come capire se un numero (tra 1 e 100) è multiplo di 3 e di 5?
    const multiplo3e5 = (i % 3 == 0 && i % 5 == 0);
    console.log('il numero è multiplo sia di 3 sia di 5:', multiplo3e5);

}



