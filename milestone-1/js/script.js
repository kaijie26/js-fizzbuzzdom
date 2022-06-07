// 1.SCIVO I NUMERI DA 1 A 100
for(let i = 1; i <= 100; i++) {
    if(i % 5 === 0 && i % 3 === 0){
        i = `fizzbuzz`
    }else if (i % 5 === 0){
        i = `buzz`
    }else if (i % 3 === 0){
        i = `fizz`
    }

    console.log(i);
    
}