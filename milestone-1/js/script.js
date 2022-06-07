// 1.SCIVO I NUMERI DA 1 A 100
for(let i = 1; i <= 100; i++) {
    if(i % 5 === 0 && i % 3 === 0){
        let fizzBuzz = 'fizzbuzz'
       //Stampo i fizzbuzz
        console.log(fizzBuzz);
    }else if (i % 5 === 0){
        let buzz = 'buzz'
        //Stampo i buzz
        console.log(buzz);
    }else if (i % 3 === 0){
        let fizz = 'fizz'
        //Stampo i fizz
        console.log(fizz);
    }else{
        //Stampo i numeri 
        console.log(i);
    }

}