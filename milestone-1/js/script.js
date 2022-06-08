// MILISTONE 1

// 1.SCIVO I NUMERI DA 1 A 100
for(let i = 1; i <= 100; i++) {
    // Multiplo di 5 e 3
    if(i % 5 === 0 && i % 3 === 0){
        fizzBuzz = 'fizzbuzz'
       //Stampo i fizzbuzz
        console.log(fizzBuzz);

    // Multiplo di 5    
    }else if (i % 5 === 0){
         buzz = 'buzz'
        //Stampo i buzz
        console.log(buzz);

    // Multiplo di 3    
    }else if (i % 3 === 0){
         fizz = 'fizz'
        //Stampo i fizz
        console.log(fizz);
        
    }else{
        //Stampo i numeri 
        console.log(i);
    }

}