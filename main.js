/*

Scrivi un programma che stampi i numeri da 1 a 100,

ma per i multipli di 3 stampi “Fizz” al posto del numero 

e per i multipli di 5 stampi Buzz.

Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

*/



//Stampo i numeri da 1 a 100

for (let i = 1; i<=100; i++){

    // console.log(i);

    if(i%3==0 && i%5==0){ //se multiplo di 3 e 5
        // Allora Stampo i + FizzBuzz
        console.log('FizzBuzz');

    } else if (i%5==0){ //se multiplo di 5
        //Alora Stampo i + Buzz
        console.log('Buzz');

    } else if (i%3==0){ //se multiplo di 3 
        // Allora Stampo i + Fizz
        console.log('Fizz');
        
    } else {
        console.log(i);
    }

}

